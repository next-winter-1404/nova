interface OldPriceProps {
  oldPrice: string | null | undefined;
}

const OldPriceComponent = ({ oldPrice }: OldPriceProps) => {
  return (
    <span className="flex-center gap-2 relative text-gray-300 text-16-semibold">
      <i>تومان</i>
      <span className="flex-center gap-1">
        <span className="absolute top-2 -right-1 -rotate-12 w-20 h-0.5 bg-gray-300"></span>
        {oldPrice}
      </span>
    </span>
  );
};

export default OldPriceComponent;
