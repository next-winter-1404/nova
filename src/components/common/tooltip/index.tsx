import * as Tooltip from '@radix-ui/react-tooltip';
import { ReactNode, FC } from "react";

interface ITooltipProp {
    mainContent: ReactNode;
    tooltipText?: string; 
    twClassname?:string //you can add any extra tailwind class you want
}

export const ToolTip: FC<ITooltipProp> = ({ mainContent, tooltipText,twClassname=" bg-gray-800 text-white"}) => {
    return (
        <Tooltip.Provider delayDuration={200}>
            <Tooltip.Root>
                <Tooltip.Trigger className='cursor-pointer' asChild>
                    {mainContent}
                </Tooltip.Trigger>
                <Tooltip.Portal>
                    <Tooltip.Content
                        className={`w-fit p-1.5 rounded-xl text-sm shadow-lg ${twClassname}`}
                     
                    >
                        <p>{tooltipText}</p>
                        <Tooltip.Arrow className="fill-gray-800" />
                    </Tooltip.Content>
                </Tooltip.Portal>
            </Tooltip.Root>
        </Tooltip.Provider>
    );
}

export default ToolTip;