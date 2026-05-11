import React from "react";

const HouseItemsComponent = () => {
  const items = [
    { title: "سن بنا", status: "نوساز" },
    { title: "سن بنا", status: "نوساز" },
    { title: "سن بنا", status: "نوساز" },
    { title: "سن بنا", status: "نوساز" },
    { title: "سن بنا", status: "نوساز" },
    { title: "سن بنا", status: "نوساز" },
    { title: "سن بنا", status: "نوساز" },
    { title: "سن بنا", status: "نوساز" },
    { title: "سن بنا", status: "نوساز" },
    { title: "سن بنا", status: "نوساز" },
    { title: "سن بنا", status: "نوساز" },
    { title: "سن بنا", status: "نوساز" },
    { title: "سن بنا", status: "نوساز" },
    { title: "سن بنا", status: "نوساز" },
    { title: "سن بنا", status: "نوساز" },
    { title: "سن بنا", status: "نوساز" },
    { title: "سن بنا", status: "نوساز" },
    { title: "سن بنا", status: "نوساز" },
    { title: "سن بنا", status: "نوساز" },
    { title: "سن بنا", status: "نوساز" },
    { title: "سن بنا", status: "نوساز" },
  ];
  return (
    <div className="w-full flex justify-end items-center gap-4 flex-wrap">
      {items.map((item) => (
        <div className="w-[127px] h-[94px] bg-dark-700 rounded-2xl p-2 flex-col flex-center gap-3 text-semibold-20">
          <span>{item.title}</span>
          <div className="w-full rounded-[10px] h-[37px] bg-blue-purple-500 flex-center">
            {item.status}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HouseItemsComponent;
