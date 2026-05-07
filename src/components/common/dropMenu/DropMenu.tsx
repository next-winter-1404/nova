import { Menu, MenuWrapper, MenuItems, MenuItem, MenuButton } from "@/src/components/common/menu/index";

import { BsChevronDown } from "react-icons/bs";

interface Option {
    value: string;
    label: string;
}

interface DropMenuProps {
    options: Option[];
    value?: string;
    onChange?: (value:string) => void 
    placeholder?: string;
    dropDownLabel?: string
}


const DropMenu = ({options, onChange, value, placeholder="... انتخاب کنید ", dropDownLabel} : DropMenuProps) => {
  const selectedOption = options.find(opt => opt.value === value);
  
    return (
        <Menu>
            <MenuButton>
                <div className="dropMenu p-5 w-full ">
                    <span className="max-w-[91px] whitespace-nowrap absolute bg-dark-800 -top-4 right-4">{dropDownLabel}</span>
                    <BsChevronDown />
                    <span>{selectedOption?.label || placeholder}</span>
                </div>
            </MenuButton>
            <MenuWrapper>
                <MenuItems>
                    {options.map(option => (
                        <MenuItem 
                        key={option.value}
                        labelName={option.label}
                        onClick={() => {onChange(option.value)}} 
                        />
                    ))}
                </MenuItems>
            </MenuWrapper>
        </Menu>
  )
}

export default DropMenu;
