import React, { FC } from "react";

interface IItem {
  items: string[];
  colsNumber: number;
  twClassName?: string;
}

const ItemNavbar: FC<IItem> = ({
  items,
  colsNumber,
  twClassName = "",
}) => {
  return (
    <div
      style={{
        gridTemplateColumns: `repeat(${colsNumber}, minmax(0, 1fr))`,
      }}
      className={`
        bg-gray-500
        w-full
        grid
        rounded-xl
        p-4
        text-white
        items-center
        text-center
        gap-4
        ${twClassName}
      `}
    >
      {items.map((item) => (
        <div key={item} className="font-semibold">
          {item}
        </div>
      ))}
    </div>
  );
};

export default ItemNavbar;