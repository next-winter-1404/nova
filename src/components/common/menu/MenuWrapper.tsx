interface MenuWrapperProps {
    children: React.ReactNode;
}

const MenuWrapper = ({children} : MenuWrapperProps) => {
  return (
    <div className="menu-wrapper">
      {children}
    </div>
  )
}

export default MenuWrapper;
