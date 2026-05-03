import CardContainer from "@/src/components/common/card/page";
import ProductCardWrapper from "./ProductCardWrapper";
import Button from "../button/page";
import { FaStar } from 'react-icons/fa';

interface ProductCardProps {
    title: string;
    offer?: string;
    rate?: string;
    location: string;
    capacityAndRoom: string;
    price:string;
}

const ProductCard = ({
    title, capacityAndRoom, location, offer, price, rate
}:ProductCardProps) => {
  return (
    <div className="flex items-center">
      <ProductCardWrapper mode="col">
        <CardContainer 
            cavity="round"
            labelSize="md"
            labelBackground="bg-dark-700 hover:bg-[#8CFF45]"
            labelContent={
                <span className="flex-center gap-1 p-2 bg-white rounded-[10px]">
                    <FaStar />
                    <p>{rate}</p>
                </span>
            }
            labelExtraStyle={{padding:"12px 16px"}}
            mainBackground="bg-dark-700"
            width=""
            mainContent={
                <span>;jakljdl</span>
            }
        />
        <h3 className="text-20-medium">{title}</h3>
      </ProductCardWrapper>
    </div>
  )
}

export default ProductCard
