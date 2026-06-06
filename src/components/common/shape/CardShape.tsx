interface CardShapeProps {
  primaryColor?: string;
  hoverColor?: string;
}
// the parent div that you put this component on it must have width and height at the same time
// it recieve two props with this syntax: dark-700 or primary-accent-green not bg-dark-700 or #2D2D2D
const CardShape = () => {
  return (
    <svg
      className={`absolute inset-0 w-full h-full text-dark-700 group-hover:text-primary-accent-green`}
      width="306"
      height="232"
      viewBox="0 0 306 232"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter
          colorInterpolationFilters="sRGB"
          x="-304"
          y="-230"
          width="306"
          height="232"
          id="filter_1"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix_1" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix_1"
            result="CardShape_2"
          />

          <feOffset dx="0" dy="8" />
          <feGaussianBlur stdDeviation="12" />
          <feComposite operator="arithmetic" k2="-1" k3="1" in2="HardAlpha_3" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.549 0 0 0 0 1 0 0 0 0 0.267 0 0 0 0.118 0"
          />
          <feBlend mode="normal" in2="CardShape_2" result="InnerShadow_4" />
        </filter>
      </defs>
      <path
        d="M184.403 31.5C193.888 31.5 202.482 25.91 206.335 17.25C206.335 17.25 207.665 14.25 207.665 14.25C211.518 5.58997 211.997 7.19409 215.221 4.78345C219.289 1.74036 220.112 0 229.597 0C229.597 0 282 0 282 0C295.25 0 306 10.75 306 24C306 24 306 208 306 208C306 221.25 295.25 232 282 232C282 232 24 232 24 232C10.745 232 0 221.25 0 208C0 208 0 55.5 0 55.5C0 42.25 10.745 31.5 24 31.5C24 31.5 184.403 31.5 184.403 31.5Z"
        fill="currentColor"
        filter="url(#filter_1)"
      />
    </svg>
  );
};

export default CardShape;
