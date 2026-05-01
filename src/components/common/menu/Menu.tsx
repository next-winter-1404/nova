interface MenuProps {
    children: React.ReactNode;
}

const Menu = ({children} : MenuProps) => {
  return (
    <div className="relative">
       {children} 
    </div>
  )
}

export default Menu;
