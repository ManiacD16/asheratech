type IndustryCardGraphicProps = {
  variant: string;
};

export function IndustryCardGraphic({
  variant,
}: IndustryCardGraphicProps) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Shared ambient treatment */}
      <div className="grid-lines absolute inset-0 opacity-[0.06] [mask-image:linear-gradient(to_bottom,black,transparent_76%)] dark:opacity-[0.1]" />

      <div className="absolute right-[4%] top-[5%] h-64 w-64 rounded-full bg-accent/[0.035] blur-[80px] transition duration-700 group-hover:bg-accent/[0.11]" />

      <div className="absolute right-0 top-10 h-[58%] w-[82%] origin-center text-border/75 opacity-80 transition duration-700 ease-out group-hover:scale-[1.025] group-hover:text-border">
        {variant === 'FIN' && <FintechIndustryGraphic />}

        {variant === 'WEB3' && <Web3IndustryGraphic />}

        {variant === 'ENT' && <EnterpriseIndustryGraphic />}

        {variant === 'MOB' && <MobileIndustryGraphic />}
      </div>

      {/* Keep title and body highly readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/5 to-card/95 transition duration-700 group-hover:from-transparent group-hover:via-navy-900/5 group-hover:to-navy-900/95" />
    </div>
  );
}

function FintechIndustryGraphic() {
  return (
    <svg
      viewBox="0 0 620 330"
      className="h-full w-full overflow-visible"
      fill="none"
    >
      {/* Payment flow paths */}
      <g
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.65"
      >
        <path d="M78 76C157 75 196 130 283 141" />

        <path d="M81 235C168 230 198 171 283 155" />

        <path d="M527 78C449 82 413 127 329 141" />

        <path d="M529 233C443 228 410 171 329 155" />

        <path
          d="M150 118C208 122 232 143 283 146"
          strokeDasharray="4 7"
        />

        <path
          d="M460 112C401 120 376 139 329 146"
          strokeDasharray="4 7"
        />
      </g>

      {/* Central transaction hub */}
      <g className="transition duration-700 group-hover:-translate-y-1">
        <rect
          x="278"
          y="111"
          width="58"
          height="74"
          rx="17"
          className="fill-card/70 stroke-accent"
          strokeWidth="1.5"
        />

        <circle
          cx="307"
          cy="136"
          r="12"
          className="fill-accent/15 stroke-accent"
          strokeWidth="1"
        />

        <path
          d="M307 129V143M301 135H313"
          className="stroke-accent"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        <path
          d="M292 164H322"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.35"
        />
      </g>

      {/* Payment nodes */}
      {[
        [78, 76, 'CARD'],
        [81, 235, 'BANK'],
        [527, 78, 'KYC'],
        [529, 233, 'LEDGER'],
      ].map(([x, y, label], index) => (
        <g key={String(label)}>
          <rect
            x={Number(x) - 42}
            y={Number(y) - 22}
            width="84"
            height="44"
            rx="13"
            className="fill-card/45 stroke-current"
            strokeWidth="1"
          />

          <circle
            cx={Number(x) - 22}
            cy={Number(y)}
            r="5"
            className={index === 2 ? 'fill-accent' : 'fill-current'}
            opacity={index === 2 ? 1 : 0.3}
          />

          <path
            d={`M${Number(x) - 10} ${Number(y)}H${Number(x) + 24}`}
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.3"
          />
        </g>
      ))}

      {/* Moving transaction signal */}
      <circle
        cx="386"
        cy="126"
        r="6"
        className="fill-card stroke-accent"
        strokeWidth="1.5"
      />

      <circle
        cx="386"
        cy="126"
        r="14"
        className="stroke-accent"
        strokeWidth="1"
        strokeDasharray="3 5"
        opacity="0.45"
      />

      {/* Confidence badge */}
      <g transform="translate(410 186)">
        <rect
          x="0"
          y="0"
          width="103"
          height="45"
          rx="13"
          className="fill-card/70 stroke-current"
          strokeWidth="1"
        />

        <circle
          cx="21"
          cy="22"
          r="8"
          className="fill-accent/15 stroke-accent"
        />

        <path
          d="M17 22L20 25L25 19"
          className="stroke-accent"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M37 18H86"
          stroke="currentColor"
          opacity="0.34"
        />

        <path
          d="M37 27H69"
          stroke="currentColor"
          opacity="0.22"
        />
      </g>
    </svg>
  );
}

function Web3IndustryGraphic() {
  return (
    <svg
      viewBox="0 0 620 330"
      className="h-full w-full overflow-visible"
      fill="none"
    >
      {/* Blockchain connections */}
      <g
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.62"
      >
        <path d="M94 85L210 128L310 75L421 125L526 86" />

        <path d="M210 128L208 235L318 275L421 218L421 125" />

        <path d="M310 75L318 275" strokeDasharray="4 7" />

        <path d="M94 85L208 235" strokeDasharray="4 7" />

        <path d="M526 86L421 218" strokeDasharray="4 7" />
      </g>

      {/* Central token block */}
      <g className="transition duration-700 group-hover:-translate-y-1">
        <path
          d="M267 116L313 91L359 116V167L313 193L267 167V116Z"
          className="fill-card/65 stroke-accent"
          strokeWidth="1.5"
        />

        <path
          d="M267 116L313 142L359 116"
          className="stroke-accent"
          strokeWidth="1"
        />

        <path
          d="M313 142V193"
          className="stroke-accent"
          strokeWidth="1"
        />

        <circle
          cx="313"
          cy="140"
          r="12"
          className="fill-accent/15 stroke-accent"
        />

        <path
          d="M307 140H319M313 134V146"
          className="stroke-accent"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </g>

      {/* Chain nodes */}
      {[
        [94, 85],
        [210, 128],
        [310, 75],
        [421, 125],
        [526, 86],
        [208, 235],
        [318, 275],
        [421, 218],
      ].map(([x, y], index) => (
        <g key={`${x}-${y}`}>
          <circle
            cx={x}
            cy={y}
            r={index === 3 ? 13 : 9}
            className={
              index === 3
                ? 'fill-accent/15 stroke-accent'
                : 'fill-card stroke-current'
            }
            strokeWidth={index === 3 ? 1.5 : 1}
          />

          <circle
            cx={x}
            cy={y}
            r="2.5"
            className={index === 3 ? 'fill-accent' : 'fill-current'}
            opacity={index === 3 ? 1 : 0.3}
          />
        </g>
      ))}

      {/* Wallet card */}
      <g transform="translate(406 165)">
        <rect
          width="119"
          height="63"
          rx="16"
          className="fill-card/75 stroke-current"
          strokeWidth="1"
        />

        <rect
          x="73"
          y="20"
          width="33"
          height="23"
          rx="8"
          className="fill-accent/10 stroke-accent"
        />

        <circle cx="87" cy="31.5" r="3" className="fill-accent" />

        <path
          d="M18 21H58"
          stroke="currentColor"
          opacity="0.35"
        />

        <path
          d="M18 34H47"
          stroke="currentColor"
          opacity="0.22"
        />
      </g>

      {/* Smart-contract verification */}
      <g transform="translate(115 170)">
        <rect
          width="92"
          height="51"
          rx="14"
          className="fill-card/65 stroke-current"
        />

        <path
          d="M18 17L26 25L18 33"
          className="stroke-accent"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M37 18H72M37 27H62M37 36H68"
          stroke="currentColor"
          opacity="0.28"
        />
      </g>
    </svg>
  );
}

function EnterpriseIndustryGraphic() {
  return (
    <svg
      viewBox="0 0 620 330"
      className="h-full w-full overflow-visible"
      fill="none"
    >
      {/* Workflow paths */}
      <g
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.62"
      >
        <path d="M104 81H238" />

        <path d="M348 81H491" />

        <path d="M293 112V203" />

        <path d="M164 112V165H88V238" />

        <path d="M425 112V165H510V238" />

        <path d="M164 112C165 164 223 175 258 207" />

        <path d="M425 112C424 164 366 177 329 207" />
      </g>

      {/* Central operational platform */}
      <g className="transition duration-700 group-hover:-translate-y-1">
        <rect
          x="238"
          y="48"
          width="110"
          height="65"
          rx="17"
          className="fill-card/70 stroke-accent"
          strokeWidth="1.5"
        />

        <circle
          cx="261"
          cy="71"
          r="7"
          className="fill-accent/15 stroke-accent"
        />

        <path
          d="M276 67H325M276 77H312M256 94H330"
          stroke="currentColor"
          opacity="0.3"
        />
      </g>

      {/* Connected departments */}
      {[
        [60, 49, 104, 63],
        [425, 49, 104, 63],
        [36, 216, 104, 58],
        [241, 203, 104, 65],
        [478, 216, 104, 58],
      ].map(([x, y, width, height], index) => (
        <g key={`${x}-${y}`}>
          <rect
            x={x}
            y={y}
            width={width}
            height={height}
            rx="15"
            className="fill-card/40 stroke-current"
            strokeWidth="1"
          />

          <circle
            cx={x + 20}
            cy={y + 20}
            r="5"
            className={index === 3 ? 'fill-accent' : 'fill-current'}
            opacity={index === 3 ? 1 : 0.28}
          />

          <path
            d={`M${x + 34} ${y + 18}H${x + width - 14}`}
            stroke="currentColor"
            opacity="0.34"
          />

          <path
            d={`M${x + 17} ${y + 37}H${x + width - 28}`}
            stroke="currentColor"
            opacity="0.22"
          />
        </g>
      ))}

      {/* Operational pulse */}
      <g className="text-accent">
        <circle cx="293" cy="155" r="5" fill="currentColor" />

        <circle
          cx="293"
          cy="155"
          r="17"
          stroke="currentColor"
          opacity="0.45"
        />

        <circle
          cx="293"
          cy="155"
          r="29"
          stroke="currentColor"
          strokeDasharray="3 6"
          opacity="0.26"
        />
      </g>

      {/* Visibility indicator */}
      <g transform="translate(383 190)">
        <rect
          width="92"
          height="52"
          rx="14"
          className="fill-card/70 stroke-current"
        />

        {[18, 29, 40].map((y, index) => (
          <rect
            key={y}
            x="16"
            y={y}
            width={index === 1 ? 54 : 40}
            height="4"
            rx="2"
            className={index === 1 ? 'fill-accent' : 'fill-current'}
            opacity={index === 1 ? 1 : 0.22}
          />
        ))}
      </g>
    </svg>
  );
}

function MobileIndustryGraphic() {
  return (
    <svg
      viewBox="0 0 620 330"
      className="h-full w-full overflow-visible"
      fill="none"
    >
      {/* Device one */}
      <g className="transition duration-700 group-hover:-translate-y-1">
        <rect
          x="105"
          y="45"
          width="144"
          height="235"
          rx="30"
          className="fill-card/60 stroke-current"
          strokeWidth="1.2"
        />

        <rect
          x="119"
          y="69"
          width="116"
          height="185"
          rx="19"
          className="fill-card/25 stroke-current"
          strokeWidth="1"
          opacity="0.8"
        />

        <rect
          x="158"
          y="56"
          width="39"
          height="5"
          rx="2.5"
          fill="currentColor"
          opacity="0.2"
        />

        <circle
          cx="177"
          cy="265"
          r="6"
          className="fill-card stroke-current"
        />
      </g>

      {/* Device two */}
      <g className="transition duration-700 group-hover:translate-y-1">
        <rect
          x="365"
          y="63"
          width="140"
          height="222"
          rx="29"
          className="fill-card/65 stroke-accent"
          strokeWidth="1.4"
        />

        <rect
          x="379"
          y="87"
          width="112"
          height="173"
          rx="18"
          className="fill-card/30 stroke-current"
          strokeWidth="1"
        />

        <rect
          x="417"
          y="74"
          width="36"
          height="5"
          rx="2.5"
          className="fill-accent"
        />
      </g>

      {/* Mobile interface cards */}
      <g>
        <rect
          x="136"
          y="97"
          width="82"
          height="49"
          rx="12"
          className="fill-accent/10 stroke-accent"
        />

        <circle cx="153" cy="113" r="6" className="fill-accent" />

        <path
          d="M166 110H204M166 120H193"
          stroke="currentColor"
          opacity="0.28"
        />

        <rect
          x="136"
          y="159"
          width="82"
          height="72"
          rx="12"
          className="fill-card/50 stroke-current"
        />

        {[177, 193, 209].map((y, index) => (
          <path
            key={y}
            d={`M150 ${y}H${index === 1 ? 202 : 190}`}
            stroke="currentColor"
            opacity={index === 1 ? 0.34 : 0.22}
          />
        ))}
      </g>

      <g>
        <rect
          x="396"
          y="113"
          width="78"
          height="38"
          rx="11"
          className="fill-card/55 stroke-current"
        />

        <path
          d="M410 128H459"
          stroke="currentColor"
          opacity="0.28"
        />

        <rect
          x="396"
          y="164"
          width="78"
          height="72"
          rx="13"
          className="fill-accent/10 stroke-accent"
        />

        <circle
          cx="435"
          cy="190"
          r="13"
          className="fill-card stroke-accent"
        />

        <path
          d="M428 190L433 195L442 184"
          className="stroke-accent"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M413 220H457"
          stroke="currentColor"
          opacity="0.25"
        />
      </g>

      {/* Cross-platform connection */}
      <path
        d="M249 148C292 125 326 128 365 151"
        className="stroke-accent"
        strokeWidth="1.5"
        strokeDasharray="5 7"
      />

      <path
        d="M249 210C291 233 326 230 365 207"
        className="stroke-accent"
        strokeWidth="1.5"
        strokeDasharray="5 7"
      />

      {[278, 310, 340].map((x, index) => (
        <circle
          key={x}
          cx={x}
          cy={index === 1 ? 130 : 138 + index * 7}
          r="3"
          className="fill-accent"
        />
      ))}

      {/* Touch gesture */}
      <g transform="translate(298 174)">
        <circle
          cx="0"
          cy="0"
          r="18"
          className="fill-card stroke-accent"
          strokeWidth="1.2"
        />

        <circle cx="0" cy="0" r="5" className="fill-accent" />

        <circle
          cx="0"
          cy="0"
          r="29"
          className="stroke-accent"
          strokeWidth="1"
          strokeDasharray="3 6"
          opacity="0.4"
        />
      </g>
    </svg>
  );
}