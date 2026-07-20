type CapabilityCardGraphicProps = {
  variant: number;
};

export function CapabilityCardGraphic({
  variant,
}: CapabilityCardGraphicProps) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Theme-aware ambient glow */}
      <div className="absolute right-[4%] top-[12%] h-56 w-56 rounded-full bg-accent/[0.035] blur-[70px] transition duration-700 group-hover:bg-accent/[0.09]" />

      {/* Shared grid texture */}
      <div className="grid-lines absolute inset-0 opacity-[0.08] [mask-image:linear-gradient(to_bottom,black,transparent_72%)] dark:opacity-[0.12]" />

      <div className="absolute right-0 top-16 h-[56%] w-[84%] max-w-[560px] origin-center text-border/75 opacity-75 transition duration-700 ease-out group-hover:scale-[1.025] group-hover:text-border">
        {variant === 0 && <StrategyGraphic />}

        {variant === 1 && <ExperienceGraphic />}

        {variant === 2 && <EngineeringGraphic />}

        {variant === 3 && <FintechGraphic />}
      </div>

      {/* Fade graphics before textual content */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-card/95" />
    </div>
  );
}

function StrategyGraphic() {
  return (
    <svg
      viewBox="0 0 560 300"
      className="h-full w-full overflow-visible"
      fill="none"
    >
      {/* Decision routes */}
      <g
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.72"
      >
        <path d="M60 54C148 54 171 129 274 134" />
        <path d="M82 230C150 221 190 158 274 147" />
        <path d="M506 54C415 61 389 120 307 136" />
        <path d="M500 230C417 224 388 163 307 148" />

        <path
          d="M138 88C203 103 216 124 274 136"
          strokeDasharray="4 7"
        />

        <path
          d="M421 86C365 100 345 124 307 136"
          strokeDasharray="4 7"
        />
      </g>

      {/* Strategic target */}
      <g
        className="origin-center transition duration-700 group-hover:rotate-12"
        style={{ transformOrigin: '290px 142px' }}
      >
        <circle
          cx="290"
          cy="142"
          r="70"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="3 8"
          opacity="0.5"
        />

        <circle
          cx="290"
          cy="142"
          r="44"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.72"
        />

        <circle
          cx="290"
          cy="142"
          r="18"
          className="fill-accent/10 stroke-accent"
          strokeWidth="1.5"
        />

        <circle cx="290" cy="142" r="4.5" className="fill-accent" />
      </g>

      {/* Opportunity nodes */}
      {[
        [60, 54],
        [82, 230],
        [506, 54],
        [500, 230],
        [138, 88],
        [421, 86],
      ].map(([x, y], index) => (
        <g key={`${x}-${y}`}>
          <circle
            cx={x}
            cy={y}
            r={index < 4 ? 10 : 7}
            className="fill-card stroke-current"
            strokeWidth="1"
          />

          <circle
            cx={x}
            cy={y}
            r="2.5"
            className={index === 2 ? 'fill-accent' : 'fill-current'}
            opacity={index === 2 ? 1 : 0.3}
          />
        </g>
      ))}

      {/* Selected opportunity */}
      <g className="text-accent">
        <path
          d="M290 142L372 98"
          stroke="currentColor"
          strokeWidth="1.5"
        />

        <circle
          cx="372"
          cy="98"
          r="9"
          className="fill-card stroke-current"
          strokeWidth="1.5"
        />

        <circle cx="372" cy="98" r="3" fill="currentColor" />
      </g>
    </svg>
  );
}

function ExperienceGraphic() {
  return (
    <svg
      viewBox="0 0 560 300"
      className="h-full w-full overflow-visible"
      fill="none"
    >
      {/* Interface frames */}
      <g
        stroke="currentColor"
        strokeWidth="1"
        className="transition duration-700 group-hover:-translate-y-1"
      >
        <rect
          x="107"
          y="37"
          width="320"
          height="200"
          rx="22"
          className="fill-card/30"
        />

        <rect
          x="139"
          y="69"
          width="256"
          height="138"
          rx="15"
          opacity="0.75"
        />

        <path d="M139 104H395" opacity="0.65" />

        <circle cx="158" cy="87" r="3" className="fill-accent stroke-none" />

        <circle cx="169" cy="87" r="3" className="fill-current stroke-none" opacity="0.24" />

        <circle cx="180" cy="87" r="3" className="fill-current stroke-none" opacity="0.24" />
      </g>

      {/* UI hierarchy */}
      <g
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.75"
      >
        <rect x="158" y="124" width="88" height="58" rx="10" />

        <rect x="258" y="124" width="118" height="16" rx="8" />

        <rect x="258" y="151" width="93" height="8" rx="4" opacity="0.55" />

        <rect x="258" y="170" width="72" height="8" rx="4" opacity="0.42" />

        <path d="M169 139H218" opacity="0.55" />

        <path d="M169 151H207" opacity="0.4" />
      </g>

      {/* Interaction path */}
      <path
        d="M66 220C131 204 153 192 203 167C245 146 281 164 319 136C351 112 388 104 457 85"
        className="stroke-accent"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="5 7"
      />

      {[66, 203, 319, 457].map((x, index) => {
        const points = [
          [66, 220],
          [203, 167],
          [319, 136],
          [457, 85],
        ];

        const [, y] = points[index];

        return (
          <g key={`${x}-${y}`}>
            <circle
              cx={x}
              cy={y}
              r={index === 3 ? 9 : 6}
              className="fill-card stroke-accent"
              strokeWidth="1.5"
            />

            <circle
              cx={x}
              cy={y}
              r="2.5"
              className="fill-accent"
            />
          </g>
        );
      })}

      {/* Cursor */}
      <path
        d="M445 76L464 96L453 99L449 111L445 76Z"
        className="fill-accent stroke-card"
        strokeWidth="2"
      />

      {/* Validation ring */}
      <circle
        cx="457"
        cy="85"
        r="26"
        className="stroke-accent"
        strokeWidth="1"
        strokeDasharray="3 6"
        opacity="0.55"
      />
    </svg>
  );
}

function EngineeringGraphic() {
  return (
    <svg
      viewBox="0 0 560 300"
      className="h-full w-full overflow-visible"
      fill="none"
    >
      {/* Architecture connections */}
      <g
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.7"
      >
        <path d="M118 77H235" />

        <path d="M325 77H443" />

        <path d="M280 111V193" />

        <path d="M161 111C161 153 201 175 241 195" />

        <path d="M400 111C400 154 360 176 319 195" />

        <path d="M161 111V150H84V210" strokeDasharray="4 6" />

        <path d="M400 111V150H477V210" strokeDasharray="4 6" />
      </g>

      {/* Core service */}
      <g className="transition duration-700 group-hover:-translate-y-1">
        <rect
          x="235"
          y="47"
          width="90"
          height="64"
          rx="16"
          className="fill-card/60 stroke-accent"
          strokeWidth="1.5"
        />

        <path
          d="M254 70L265 80L254 90"
          className="stroke-accent"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M276 91L286 69"
          stroke="currentColor"
          strokeWidth="1.3"
          opacity="0.6"
        />

        <path
          d="M296 70L307 80L296 90"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.6"
        />
      </g>

      {/* Service modules */}
      {[
        [74, 48, 88, 63],
        [399, 48, 88, 63],
        [40, 205, 88, 52],
        [236, 194, 88, 63],
        [433, 205, 88, 52],
      ].map(([x, y, width, height], index) => (
        <g key={`${x}-${y}`}>
          <rect
            x={x}
            y={y}
            width={width}
            height={height}
            rx="14"
            className="fill-card/30 stroke-current"
            strokeWidth="1"
          />

          <circle
            cx={x + 18}
            cy={y + 18}
            r="4"
            className={index === 3 ? 'fill-accent' : 'fill-current'}
            opacity={index === 3 ? 1 : 0.28}
          />

          <path
            d={`M${x + 31} ${y + 18}H${x + width - 15}`}
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.35"
          />

          <path
            d={`M${x + 16} ${y + 34}H${x + width - 27}`}
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.22"
          />
        </g>
      ))}

      {/* Data pulse */}
      <g className="text-accent">
        <circle cx="280" cy="152" r="5" fill="currentColor" />

        <circle
          cx="280"
          cy="152"
          r="16"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.45"
        />

        <circle
          cx="280"
          cy="152"
          r="28"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="3 6"
          opacity="0.25"
        />
      </g>
    </svg>
  );
}

function FintechGraphic() {
  return (
    <svg
      viewBox="0 0 560 300"
      className="h-full w-full overflow-visible"
      fill="none"
    >
      {/* Ledger surface */}
      <rect
        x="72"
        y="43"
        width="306"
        height="206"
        rx="22"
        className="fill-card/30 stroke-current"
        strokeWidth="1"
      />

      <path
        d="M72 88H378"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.65"
      />

      <circle cx="95" cy="65" r="3" className="fill-accent" />

      <circle cx="107" cy="65" r="3" className="fill-current" opacity="0.2" />

      <circle cx="119" cy="65" r="3" className="fill-current" opacity="0.2" />

      {/* Ledger rows */}
      {[112, 145, 178, 211].map((y, index) => (
        <g key={y}>
          <circle
            cx="99"
            cy={y}
            r="7"
            className={
              index === 2
                ? 'fill-accent/15 stroke-accent'
                : 'fill-card stroke-current'
            }
            strokeWidth="1"
          />

          <path
            d={`M119 ${y}H219`}
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.42"
          />

          <path
            d={`M246 ${y}H292`}
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.28"
          />

          <rect
            x="315"
            y={y - 7}
            width="41"
            height="14"
            rx="7"
            className={
              index === 2
                ? 'fill-accent/15 stroke-accent'
                : 'fill-card stroke-current'
            }
            strokeWidth="1"
          />
        </g>
      ))}

      {/* Digital asset blocks */}
      <g className="transition duration-700 group-hover:-translate-y-1">
        <rect
          x="403"
          y="64"
          width="86"
          height="76"
          rx="17"
          className="fill-card/70 stroke-current"
          strokeWidth="1"
        />

        <rect
          x="426"
          y="87"
          width="40"
          height="30"
          rx="9"
          className="fill-accent/10 stroke-accent"
          strokeWidth="1.5"
        />

        <path
          d="M440 102H452"
          className="stroke-accent"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        <rect
          x="422"
          y="168"
          width="86"
          height="76"
          rx="17"
          className="fill-card/70 stroke-current"
          strokeWidth="1"
        />

        <path
          d="M445 190L465 180L485 190V211L465 222L445 211V190Z"
          className="fill-accent/10 stroke-accent"
          strokeWidth="1.3"
        />
      </g>

      {/* Transaction connection */}
      <path
        d="M378 111C402 111 410 102 426 102"
        className="stroke-accent"
        strokeWidth="1.5"
        strokeDasharray="4 6"
      />

      <path
        d="M378 196C404 196 410 205 445 205"
        className="stroke-accent"
        strokeWidth="1.5"
        strokeDasharray="4 6"
      />

      <circle cx="394" cy="111" r="3" className="fill-accent" />

      <circle cx="400" cy="196" r="3" className="fill-accent" />

      {/* Security verification */}
      <g transform="translate(335 53)">
        <circle
          cx="0"
          cy="0"
          r="18"
          className="fill-card stroke-accent"
          strokeWidth="1.5"
        />

        <path
          d="M-6 0L-2 5L7 -6"
          className="stroke-accent"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}