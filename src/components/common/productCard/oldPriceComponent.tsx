interface oldPriceProp {
  oldPriceAmount: string;
}

const oldPriceComponent = ({oldPriceAmount}: oldPriceProp) => {
  return (
      <span className="absolute top-2 -right-2 -rotate-12 w-20 h-0.5 bg-gray-300">{oldPriceAmount}</span>
  )
}

export default oldPriceComponent
