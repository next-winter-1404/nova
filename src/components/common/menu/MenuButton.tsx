interface MenuButtonProps {
    children: React.ReactNode;
}

const MenuButton = ({children} : MenuButtonProps) => {
  return (
    <div className="cursor-pointer">
       {children} 
    </div>
  )
}

export default MenuButton;
