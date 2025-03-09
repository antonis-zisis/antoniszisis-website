export function Logo() {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="25"
        cy="25"
        r="20"
        className="fill-transparent stroke-red-800 dark:stroke-teal-300"
        strokeWidth="2"
      />
      <text
        x="50%"
        y="55%"
        textAnchor="middle"
        dominantBaseline="middle"
        className="fill-current text-lg font-normal text-red-800 dark:text-teal-300"
      >
        AZ
      </text>
    </svg>
  );
}
