import Link from "next/link";

interface NavbarTabProps {
    label: string;
    href: string;
    icon?: React.ReactNode;
}

const NavbarTab = ({label,href,icon} : NavbarTabProps) => {
  return (
    <span className="flex items-center gap-3 nav-tab">
        {icon && <span className="flex items-center relative top-0.5 ">{icon}</span>}
        <Link href={href}>
        {label}
        </Link>
    </span>
  )
}

export default NavbarTab
