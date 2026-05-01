import Link from "next/link";

interface MenuItemProps {
    labelName: string;
    href: string;
    current?: boolean;
}


const MenuItem = ({labelName,href,current} : MenuItemProps) => {
  return (
    <Link href={href} className="menuItem">
      {labelName}
    </Link>
  )
}

export default MenuItem
