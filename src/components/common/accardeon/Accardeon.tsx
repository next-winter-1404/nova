import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { FC, ReactNode } from "react";

interface IAccordion {
  accordionContent?: ReactNode;
  accordionTitle?: string;
  twHeaderClassName?: string;
  twContentClassName?: string;
  twTitleClassName?: string;
}
const AccordionComponent: FC<IAccordion> = ({
  accordionContent,
  accordionTitle,
  twHeaderClassName,
  twTitleClassName,
  twContentClassName,
}) => {
  return (
    <Accordion.Root type="single" collapsible>
      <Accordion.Item value="item-1">
        <Accordion.Header>
          <Accordion.Trigger
            className={`group flex w-full items-center justify-between ${twHeaderClassName}`}
          >
          <div className="w-full flex items-center gap-0.5">
          <span className={`${twTitleClassName}`}> {accordionTitle}</span>
          <div  className="w-full bg-gray-300 h-px"/>
            <ChevronDownIcon className="h-4 w-4 text-white transition-transform duration-300 group-data-[state=open]:rotate-180" />
          </div>
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className={`${twContentClassName}`}>
          {accordionContent}
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};

export default AccordionComponent;
