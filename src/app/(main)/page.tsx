
import CardContainer from "@/src/components/common/card/page";
export default function Home() {

  return (
    <div className="relative flex-center">
   
    <CardContainer
    
      cavity="sharp"
      labelContent={<div className="h-[32px]"></div>}
      labelSize="lg"
      mainContent={
        <CardContainer
          cavity="round"
          labelBackground="bg-[#eee]"
          labelContent="eee"
          labelSize="lg"
          mainBackground="bg-[#eee]"
          mainContent={<div>salam</div>}
          width="w-full"
        />
      }
      width="w-full"
      labelBackground="bg-[#2D2D2D]"
      mainBackground="bg-[#2D2D2D]"
    />
  </div>
  );
}
