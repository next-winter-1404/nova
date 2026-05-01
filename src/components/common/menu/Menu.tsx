import { MenuProvider } from "./MenuContext";

interface MenuProps {
    children: React.ReactNode;
}

const Menu = ({children} : MenuProps) => {
  return (
    <div className="relative">
       <MenuProvider>
        {children} 
       </MenuProvider>
    </div>
  )
}

export default Menu;
