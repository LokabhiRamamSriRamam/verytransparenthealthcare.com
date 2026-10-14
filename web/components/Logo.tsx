type LogoProps = {
  /** "light" for cream/white backgrounds, "dark" for #191919 or purple backgrounds */
  variant?: "light" | "dark";
  width?: number;
  className?: string;
};

/** Full lockup: translucent care petals around the patient, plus wordmark. */
export default function Logo({ variant = "light", width = 210, className }: LogoProps) {
  const dark = variant === "dark";
  const gradientId = `vth-logo-g-${variant}`;

  return (
    <svg
      viewBox="0 0 300 64"
      width={width}
      height={(width * 64) / 300}
      className={className}
      role="img"
      aria-label="Very Transparent Healthcare"
      style={{ fontFamily: "var(--font-sans)", display: "block" }}
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#914BFA" />
          <stop offset="1" stopColor="#5C3FD0" />
        </linearGradient>
      </defs>
      <g fill={dark ? "#FFFFFF" : `url(#${gradientId})`} fillOpacity={dark ? 0.32 : 0.42}>
        <circle cx="32" cy="17" r="15" />
        <circle cx="47" cy="32" r="15" />
        <circle cx="32" cy="47" r="15" />
        <circle cx="17" cy="32" r="15" />
      </g>
      <circle
        cx="32"
        cy="32"
        r="8.5"
        fill={dark ? "#FFFFFF" : "#5C3FD0"}
        stroke={dark ? "#914BFA" : "#FFFFFF"}
        strokeWidth="3"
      />
      <text x="76" y="31" fontSize="24" fontWeight="800" letterSpacing="-0.5" fill={dark ? "#FFFFFF" : "#191919"}>
        Very<tspan fill={dark ? "#D8C8FF" : "#5C3FD0"}>Transparent</tspan>
      </text>
      <text x="77" y="50" fontSize="11" fontWeight="700" letterSpacing="4.2" fill={dark ? "#F8F6F2" : "#2F2F2F"}>
        HEALTHCARE
      </text>
    </svg>
  );
}
