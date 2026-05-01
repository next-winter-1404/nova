interface MenuItemsProps {
    children: React.ReactNode;
}


const MenuItems = ({children} : MenuItemsProps) => {
  return (
    <div className="flex flex-col justify-end">
      {children}
    </div>
  )
}

export default MenuItems
