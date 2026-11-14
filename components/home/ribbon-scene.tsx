'use client';

import { useEffect, useRef } from 'react';
import {
  AmbientLight,
  Box3,
  Color,
  DirectionalLight,
  Group,
  Mesh,
  MeshPhysicalMaterial,
  MeshStandardMaterial,
  NeutralToneMapping,
  PerspectiveCamera,
  PMREMGenerator,
  PointLight,
  Scene,
  SRGBColorSpace,
  Vector3,
  WebGLRenderer,
  type Object3D,
} from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

export type RibbonSceneState = {
  /** 0 → 1 across the hero's scroll distance. */
  progress: number;
};

type PieceSpec = {
  /** File name in /public/models/tech, without the extension. */
  model: string;
  /** Resting position in a -1…1 stage (x across, y up), plus depth. */
  home: [number, number, number];
  /** The same for portrait screens, where the stage is tall and narrow. */
  homeNarrow: [number, number];
  /** How far the piece travels as the hero scrolls away. */
  drift: [number, number];
  /** Resting rotation; the models face the viewer at zero. */
  rest: [number, number, number];
  /** Size relative to the other pieces (longest side). */
  scale: number;
  phase: number;
  /** Replaces a base colour that would vanish on the ink background. */
  tint?: string;
  /** Keep the model's own metal finish instead of softening it. */
  keepMetal?: boolean;
};

type Piece = PieceSpec & {
  holder: Group;
  loadedAt: number;
};

const MODEL_URL = '/models/asheraatech-ribbon.glb';
const TECH_URL = '/models/tech';

/**
 * The stack shown around the emblem. One entry per model; edit this list to
 * add, remove or move a piece.
 */
const TECHNOLOGIES: PieceSpec[] = [
  // Left of the emblem
  { model: 'react', home: [-0.77, -0.1, 0.7], homeNarrow: [-0.72, -0.42], drift: [-0.22, 1.5], rest: [0.08, 0.38, 0.04], scale: 0.62, phase: 0.2 },
  { model: 'nodejs', home: [-0.56, 0.36, -0.5], homeNarrow: [-0.74, 0.38], drift: [-0.12, 0.75], rest: [0.1, 0.34, -0.06], scale: 0.42, phase: 1.7 },
  { model: 'html', home: [-0.92, 0.42, -0.9], homeNarrow: [-0.3, 0.45], drift: [-0.1, 0.6], rest: [0.06, 0.44, 0.05], scale: 0.36, phase: 2.9 },
  { model: 'css', home: [-0.3, 0.68, -1.0], homeNarrow: [0.02, 0.36], drift: [-0.04, 0.5], rest: [0.12, 0.3, -0.05], scale: 0.3, phase: 3.6 },
  { model: 'postgresql', home: [-0.6, -0.1, -0.3], homeNarrow: [-0.8, 0.02], drift: [-0.16, 0.95], rest: [0.04, 0.4, 0.03], scale: 0.38, phase: 4.9 },
  { model: 'javascript', home: [-0.52, -0.56, 0.3], homeNarrow: [-0.36, -0.52], drift: [-0.2, 1.15], rest: [-0.1, 0.4, 0.08], scale: 0.42, phase: 0.9 },
  { model: 'mongodb', home: [-0.88, -0.56, 0.1], homeNarrow: [-0.76, -0.72], drift: [-0.24, 1.3], rest: [0.0, 0.5, -0.12], scale: 0.42, phase: 5.8 },
  // Right of the emblem
  { model: 'docker', home: [0.78, -0.14, 0.9], homeNarrow: [0.72, -0.4], drift: [0.24, 1.85], rest: [0.06, -0.4, -0.04], scale: 0.56, phase: 5.3 },
  { model: 'nextjs', home: [0.56, 0.36, -0.6], homeNarrow: [0.74, 0.38], drift: [0.14, 0.85], rest: [0.08, -0.36, 0.0], scale: 0.44, phase: 4.4, tint: '#f6faff' },
  { model: 'tailwindcss', home: [0.92, 0.4, -0.8], homeNarrow: [0.34, 0.46], drift: [0.12, 0.7], rest: [0.1, -0.44, 0.04], scale: 0.42, phase: 1.2 },
  { model: 'redis', home: [0.3, 0.62, -1.1], homeNarrow: [0.8, 0.02], drift: [0.05, 0.45], rest: [0.62, -0.3, 0.0], scale: 0.34, phase: 3.1 },
  { model: 'solidity', home: [0.6, -0.06, -0.3], homeNarrow: [0.02, -0.54], drift: [0.16, 1.0], rest: [0.04, -0.42, 0.06], scale: 0.36, phase: 2.0, tint: '#c7d0ea' },
  { model: 'ethereum', home: [0.48, -0.58, 0.4], homeNarrow: [0.38, -0.5], drift: [0.2, 1.25], rest: [0.0, -0.3, 0.06], scale: 0.5, phase: 2.4, keepMetal: true },
  { model: 'postman', home: [0.86, -0.56, 0.2], homeNarrow: [0.76, -0.72], drift: [0.24, 1.4], rest: [0.04, -0.46, -0.06], scale: 0.38, phase: 0.5 },
  // A chain of blocks runs under the emblem and passes behind it on scroll
  { model: 'blockchain', home: [-0.02, -0.87, -1.4], homeNarrow: [0, -0.73], drift: [0, 1.25], rest: [0.24, 0.1, 0.03], scale: 1.6, phase: 3.9 },
];

const palette = {
  cyan: '#01e6ff',
};

/**
 * Hero stage: the ribbon emblem in 3D with the studio's technology stack
 * floating around it as 3D models. Everything responds to `state.progress`
 * so the parent can scrub it with the page.
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

    let disposed = false;

    const stage = new Group();
    scene.add(stage);

    const ribbonPivot = new Group();
    stage.add(ribbonPivot);

    // Technology pieces ---------------------------------------------------
    const loader = new GLTFLoader();
    loader.setMeshoptDecoder(MeshoptDecoder);

    const pieces: Piece[] = TECHNOLOGIES.map((spec) => {
      const holder = new Group();
      holder.visible = false;
      holder.rotation.set(spec.rest[0], spec.rest[1], spec.rest[2]);
      stage.add(holder);
      return { ...spec, holder, loadedAt: 0 };
    });

    const disposeObject = (object: Object3D) => {
      object.traverse((child) => {
        const mesh = child as Mesh;
        if (!mesh.isMesh) return;
        mesh.geometry.dispose();
        const materials = Array.isArray(mesh.material)
          ? mesh.material
          : [mesh.material];
        materials.forEach((material) => {
          (material as MeshStandardMaterial).map?.dispose();
          material.dispose();
        });
      });
    };

    pieces.forEach((piece) => {
      loader.load(
        `${TECH_URL}/${piece.model}.glb`,
        (gltf) => {
          if (disposed) {
            disposeObject(gltf.scene);
            return;
          }
          const model = gltf.scene;
          // Normalise: centred on its pivot, longest side one unit.
          const bounds = new Box3().setFromObject(model);
          const size = bounds.getSize(new Vector3());
          model.position.sub(bounds.getCenter(new Vector3()));
          const fit = new Group();
          fit.scale.setScalar(1 / Math.max(size.x, size.y, size.z, 1e-6));
          fit.add(model);

          model.traverse((child) => {
            const mesh = child as Mesh;
            if (!mesh.isMesh) return;
            const materials = Array.isArray(mesh.material)
              ? mesh.material
              : [mesh.material];
            materials.forEach((entry) => {
              const material = entry as MeshStandardMaterial;
              if (!material.isMeshStandardMaterial) return;
              if (piece.tint) material.color.set(piece.tint);
              if (!piece.keepMetal) {
                material.metalness = Math.min(material.metalness, 0.12);
              }
              material.roughness = Math.min(
                0.7,
                Math.max(material.roughness, 0.3),
              );
            });
          });

          piece.holder.add(fit);
          piece.holder.visible = true;
          piece.loadedAt = performance.now();
          if (reduceMotion) renderFrame(performance.now());
        },
        undefined,
        () => undefined, // A missing model simply leaves its place empty.
      );
    });

    // Ribbon -------------------------------------------------------------
    let ribbon: Object3D | null = null;
    let loadedAt = 0;

    loader.load(
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
      const pieceUnit = portrait
        ? viewWidth * 0.3
        : Math.min(viewHeight, viewWidth * 0.8) * 0.26;
      pieces.forEach((piece) => {
        if (!piece.loadedAt) return;
        const homeX = portrait ? piece.homeNarrow[0] : piece.home[0];
        const homeY = portrait ? piece.homeNarrow[1] : piece.home[1];
        const homeZ = piece.home[2];
        const arrive = Math.min(
          1,
          (now - piece.loadedAt) / (reduceMotion ? 1 : 1100),
        );
        const grown = 1 - Math.pow(1 - arrive, 4);
        const bob = Math.sin(time * 0.6 + piece.phase) * 0.04;
        const depth = 1 + homeZ * 0.12;
        piece.holder.position.set(
          (homeX + piece.drift[0] * progress) * spreadX +
            pointer.x * 0.08 * depth,
          (homeY + bob + piece.drift[1] * progress) * spreadY -
            pointer.y * 0.06 * depth -
            (1 - grown) * 0.35,
          homeZ,
        );
        piece.holder.scale.setScalar(piece.scale * pieceUnit * grown);
        // Sway around the resting pose so each mark stays recognisable, and
        // let the scroll turn every piece a little further as it leaves.
        const sway = reduceMotion ? 0 : 1;
        piece.holder.rotation.set(
          piece.rest[0] +
            sway * Math.sin(time * 0.5 + piece.phase) * 0.12 -
            pointer.y * 0.12 +
            progress * 0.45,
          piece.rest[1] +
            sway * Math.sin(time * 0.42 + piece.phase * 1.7) * 0.34 +
            pointer.x * 0.22 +
            progress * (homeX < 0 ? -0.8 : 0.8),
          piece.rest[2] + sway * Math.sin(time * 0.3 + piece.phase * 0.6) * 0.05,
        );
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
      pieces.forEach((piece) => disposeObject(piece.holder));
      if (ribbon) disposeObject(ribbon);
      environment.dispose();
      pmrem.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, [state]);

  return <div ref={host} className="absolute inset-0 [&>canvas]:block [&>canvas]:h-full [&>canvas]:w-full" />;
}
