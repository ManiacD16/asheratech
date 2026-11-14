'use client';

import { useEffect, useRef } from 'react';
import {
  AmbientLight,
  Box3,
  Color,
  CylinderGeometry,
  DirectionalLight,
  Group,
  Mesh,
  MeshPhysicalMaterial,
  MeshStandardMaterial,
  NeutralToneMapping,
  OctahedronGeometry,
  PerspectiveCamera,
  PMREMGenerator,
  PointLight,
  Scene,
  SRGBColorSpace,
  TorusGeometry,
  Vector3,
  WebGLRenderer,
  type BufferGeometry,
  type Material,
  type Object3D,
} from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';

export type RibbonSceneState = {
  /** 0 → 1 across the hero's scroll distance. */
  progress: number;
};

type Piece = {
  mesh: Object3D;
  /** Resting position in a -1…1 stage (x across, y up), plus depth. */
  home: Vector3;
  /** How far the piece travels as the hero scrolls away. */
  drift: Vector3;
  spin: Vector3;
  phase: number;
  scale: number;
};

const MODEL_URL = '/models/asheraatech-ribbon.glb';

const palette = {
  ink: '#0f0b4d',
  violet: '#2c0d81',
  royal: '#124ed9',
  azure: '#00a8f7',
  cyan: '#01e6ff',
  paper: '#f6faff',
};

function glossy(color: string, options: Partial<MeshPhysicalMaterial> = {}) {
  return new MeshPhysicalMaterial({
    color: new Color(color),
    roughness: 0.28,
    metalness: 0.05,
    clearcoat: 0.9,
    clearcoatRoughness: 0.22,
    ...options,
  });
}

/**
 * Hero stage: the ribbon emblem in 3D with a handful of smaller objects
 * (ledger blocks, tokens, a contract card) floating around it. Everything
 * responds to `state.progress` so the parent can scrub it with the page.
 */
export function RibbonScene({
  state,
  onReady,
}: {
  state: React.MutableRefObject<RibbonSceneState>;
  onReady?: () => void;
}) {
  const host = useRef<HTMLDivElement>(null);
  const ready = useRef(onReady);
  ready.current = onReady;

  useEffect(() => {
    const container = host.current;
    if (!container) return;

    let renderer: WebGLRenderer;
    try {
      renderer = new WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      });
    } catch {
      return; // No WebGL: the static emblem underneath stays visible.
    }

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    renderer.outputColorSpace = SRGBColorSpace;
    renderer.toneMapping = NeutralToneMapping;
    renderer.toneMappingExposure = 1;
    renderer.setClearAlpha(0);
    container.appendChild(renderer.domElement);
    renderer.domElement.setAttribute('aria-hidden', 'true');

    const scene = new Scene();
    const camera = new PerspectiveCamera(28, 1, 0.1, 50);
    camera.position.set(0, 0, 8);

    const pmrem = new PMREMGenerator(renderer);
    const environment = pmrem.fromScene(new RoomEnvironment(), 0.03).texture;
    scene.environment = environment;
    scene.environmentIntensity = 0.38;

    scene.add(new AmbientLight('#b9c8ff', 0.22));
    const key = new DirectionalLight('#ffffff', 1.25);
    key.position.set(-3, 4.5, 6);
    scene.add(key);
    const rim = new PointLight(palette.cyan, 14, 18, 2);
    rim.position.set(4.2, 1.2, 2.4);
    scene.add(rim);
    const fill = new PointLight('#6a4dff', 9, 18, 2);
    fill.position.set(-4.5, -2.4, 3);
    scene.add(fill);

    const stage = new Group();
    scene.add(stage);

    const ribbonPivot = new Group();
    stage.add(ribbonPivot);

    // Supporting pieces --------------------------------------------------
    const disposables: Array<BufferGeometry | Material> = [];
    const track = <T extends BufferGeometry | Material>(item: T) => {
      disposables.push(item);
      return item;
    };

    const blockGeometry = track(new RoundedBoxGeometry(1, 1, 1, 5, 0.16));
    const cardGeometry = track(new RoundedBoxGeometry(0.72, 1, 0.045, 4, 0.02));
    const coinGeometry = track(new CylinderGeometry(0.5, 0.5, 0.1, 64));
    const coinRimGeometry = track(new TorusGeometry(0.5, 0.05, 20, 72));
    const gemGeometry = track(new OctahedronGeometry(0.6, 0));
    const studGeometry = track(new OctahedronGeometry(0.11, 0));

    const paper = track(glossy(palette.paper, { roughness: 0.34 }));
    const royal = track(glossy(palette.royal));
    const ink = track(glossy(palette.violet, { roughness: 0.4 }));
    const cyan = track(
      glossy(palette.cyan, {
        roughness: 0.12,
        emissive: new Color(palette.azure),
        emissiveIntensity: 0.25,
      }),
    );
    const azure = track(glossy(palette.azure, { metalness: 0.35 }));

    const makeBlock = (body: Material, stud: Material) => {
      const group = new Group();
      group.add(new Mesh(blockGeometry, body));
      const marker = new Mesh(studGeometry, stud);
      marker.position.set(0, 0, 0.52);
      marker.scale.set(1, 1, 0.35);
      group.add(marker);
      const top = marker.clone();
      top.position.set(0, 0.52, 0);
      top.rotation.x = Math.PI / 2;
      group.add(top);
      return group;
    };

    const makeCoin = (face: Material, edge: Material) => {
      const group = new Group();
      const disc = new Mesh(coinGeometry, face);
      disc.rotation.x = Math.PI / 2;
      group.add(disc);
      group.add(new Mesh(coinRimGeometry, edge));
      const stud = new Mesh(studGeometry, edge);
      stud.position.z = 0.06;
      stud.scale.set(1.5, 1.5, 0.3);
      group.add(stud);
      return group;
    };

    const makeCard = (body: Material, stud: Material) => {
      const group = new Group();
      group.add(new Mesh(cardGeometry, body));
      const marker = new Mesh(studGeometry, stud);
      marker.position.z = 0.03;
      marker.scale.set(1.2, 1.2, 0.2);
      group.add(marker);
      return group;
    };

    const pieces: Piece[] = [
      {
        mesh: makeBlock(ink, cyan),
        home: new Vector3(-0.7, -0.28, 0.7),
        drift: new Vector3(-0.22, 1.5, 0),
        spin: new Vector3(0.22, 0.31, 0.1),
        phase: 0.2,
        scale: 0.62,
      },
      {
        mesh: makeCoin(azure, paper),
        home: new Vector3(-0.56, 0.2, -0.6),
        drift: new Vector3(-0.12, 0.7, 0),
        spin: new Vector3(0.1, 0.5, 0.06),
        phase: 1.7,
        scale: 0.4,
      },
      {
        mesh: makeCard(ink, cyan),
        home: new Vector3(0.46, 0.56, -1.2),
        drift: new Vector3(0.05, 0.45, 0),
        spin: new Vector3(0.05, 0.2, 0.12),
        phase: 3.1,
        scale: 0.52,
      },
      {
        mesh: new Mesh(gemGeometry, cyan),
        home: new Vector3(0.54, 0.26, -0.4),
        drift: new Vector3(0.16, 0.95, 0),
        spin: new Vector3(0.12, 0.42, 0.08),
        phase: 4.4,
        scale: 0.36,
      },
      {
        mesh: makeBlock(paper, azure),
        home: new Vector3(0.72, -0.18, 0.9),
        drift: new Vector3(0.24, 1.85, 0),
        spin: new Vector3(0.26, 0.2, 0.14),
        phase: 5.3,
        scale: 0.46,
      },
      {
        mesh: makeCard(royal, paper),
        home: new Vector3(0.6, -0.66, 0.3),
        drift: new Vector3(0.2, 1.25, 0),
        spin: new Vector3(0.08, 0.26, 0.2),
        phase: 2.4,
        scale: 0.5,
      },
      {
        mesh: makeCoin(paper, royal),
        home: new Vector3(-0.42, -0.72, 0.2),
        drift: new Vector3(-0.2, 1.1, 0),
        spin: new Vector3(0.14, 0.36, 0.05),
        phase: 0.9,
        scale: 0.3,
      },
    ];

    pieces.forEach((piece) => {
      piece.mesh.rotation.set(piece.phase, piece.phase * 1.7, piece.phase * 0.6);
      stage.add(piece.mesh);
    });

    // Ribbon -------------------------------------------------------------
    let ribbon: Object3D | null = null;
    let disposed = false;
    let loadedAt = 0;

    new GLTFLoader().load(
      MODEL_URL,
      (gltf) => {
        if (disposed) return;
        ribbon = gltf.scene;
        const bounds = new Box3().setFromObject(ribbon);
        const centre = bounds.getCenter(new Vector3());
        ribbon.position.sub(centre);
        ribbon.traverse((child) => {
          const mesh = child as Mesh;
          if (!mesh.isMesh) return;
          const source = mesh.material as MeshStandardMaterial;
          if (source.map) source.map.anisotropy = 8;
          mesh.material = new MeshPhysicalMaterial({
            map: source.map,
            color: source.color,
            roughness: 0.34,
            metalness: 0.05,
            clearcoat: 0.55,
            clearcoatRoughness: 0.3,
            emissive: new Color('#ffffff'),
            emissiveMap: source.map,
            emissiveIntensity: 0.42,
          });
          source.dispose();
        });
        ribbonPivot.add(ribbon);
        loadedAt = performance.now();
        layout();
        ready.current?.();
        if (reduceMotion) renderFrame(performance.now());
      },
      undefined,
      () => undefined, // Leave the static emblem in place if loading fails.
    );

    // Layout -------------------------------------------------------------
    let viewHeight = 1;
    let viewWidth = 1;
    let ribbonScale = 1;

    const layout = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      if (!width || !height) return;
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      viewHeight = 2 * Math.tan((camera.fov * Math.PI) / 360) * camera.position.z;
      viewWidth = viewHeight * camera.aspect;
      // The emblem is roughly 1 × 0.97 units; keep it inside both axes.
      ribbonScale = Math.min(viewHeight * 0.6, viewWidth * 0.5);
    };

    const pointer = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const handlePointer = (event: PointerEvent) => {
      pointer.targetX = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.targetY = (event.clientY / window.innerHeight) * 2 - 1;
    };

    const renderFrame = (now: number) => {
      const time = now / 1000;
      const progress = Math.min(1, Math.max(0, state.current.progress));
      pointer.x += (pointer.targetX - pointer.x) * 0.06;
      pointer.y += (pointer.targetY - pointer.y) * 0.06;

      const intro = loadedAt
        ? Math.min(1, (now - loadedAt) / (reduceMotion ? 1 : 1400))
        : 0;
      const eased = 1 - Math.pow(1 - intro, 4);

      const portrait = camera.aspect < 0.9;
      const baseY = portrait ? -viewHeight * 0.02 : -viewHeight * 0.1;

      ribbonPivot.position.y = baseY - (1 - eased) * 0.5;
      ribbonPivot.scale.setScalar(ribbonScale * (0.86 + 0.14 * eased));
      ribbonPivot.rotation.y =
        Math.sin(time * 0.45) * 0.16 +
        pointer.x * 0.28 +
        progress * 1.25 +
        (1 - eased) * -0.9;
      ribbonPivot.rotation.x =
        Math.sin(time * 0.35 + 1) * 0.05 + pointer.y * 0.14 - progress * 0.22;
      ribbonPivot.rotation.z = Math.sin(time * 0.28) * 0.025;

      const spreadX = Math.min(viewWidth * 0.5, viewHeight * 0.92);
      const spreadY = viewHeight * 0.5;
      const pieceUnit = Math.min(viewHeight, viewWidth * 0.8) * 0.26;
      pieces.forEach((piece) => {
        const bob = Math.sin(time * 0.6 + piece.phase) * 0.05;
        const depth = 1 + piece.home.z * 0.12;
        piece.mesh.position.set(
          (piece.home.x + piece.drift.x * progress) * spreadX +
            pointer.x * 0.08 * depth,
          (piece.home.y + bob + piece.drift.y * progress) * spreadY -
            pointer.y * 0.06 * depth -
            (1 - eased) * (0.6 + piece.phase * 0.12),
          piece.home.z,
        );
        piece.mesh.scale.setScalar(piece.scale * pieceUnit * (0.6 + 0.4 * eased));
        if (!reduceMotion) {
          piece.mesh.rotation.x += piece.spin.x * 0.006;
          piece.mesh.rotation.y += piece.spin.y * 0.006;
          piece.mesh.rotation.z += piece.spin.z * 0.006;
        }
      });

      stage.rotation.y = pointer.x * 0.05;
      renderer.render(scene, camera);
    };

    // Loop: only while the stage is on screen and the tab is visible.
    let frame = 0;
    let visible = true;
    const loop = (now: number) => {
      frame = 0;
      if (!visible || document.hidden) return;
      renderFrame(now);
      if (!reduceMotion) frame = window.requestAnimationFrame(loop);
    };
    const start = () => {
      if (!frame) frame = window.requestAnimationFrame(loop);
    };

    const visibility = new IntersectionObserver((entries) => {
      visible = entries.some((entry) => entry.isIntersecting);
      if (visible) start();
    });
    visibility.observe(container);

    const resize = new ResizeObserver(() => {
      layout();
      if (reduceMotion) renderFrame(performance.now());
    });
    resize.observe(container);

    const handleVisibility = () => {
      if (!document.hidden) start();
    };

    layout();
    start();
    window.addEventListener('pointermove', handlePointer, { passive: true });
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      disposed = true;
      window.cancelAnimationFrame(frame);
      visibility.disconnect();
      resize.disconnect();
      window.removeEventListener('pointermove', handlePointer);
      document.removeEventListener('visibilitychange', handleVisibility);
      disposables.forEach((item) => item.dispose());
      ribbon?.traverse((child) => {
        const mesh = child as Mesh;
        if (!mesh.isMesh) return;
        mesh.geometry.dispose();
        const material = mesh.material as MeshPhysicalMaterial;
        material.map?.dispose();
        material.dispose();
      });
      environment.dispose();
      pmrem.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, [state]);

  return <div ref={host} className="absolute inset-0 [&>canvas]:block [&>canvas]:h-full [&>canvas]:w-full" />;
}
