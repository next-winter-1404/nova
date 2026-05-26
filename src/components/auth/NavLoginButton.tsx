"use client"
import { useRouter } from "next/navigation";

interface NavLoginButtonProps {
    children: React.ReactNode;
    mode?: "modal" | "redirect";
    asChild?: boolean;
}


const NavLoginButton = ({
    children,
    mode,
    asChild
} : NavLoginButtonProps) => {
   const router = useRouter()

    const onClick = () => {
        router.push('/login')
    }

    if(mode === "modal") {
        return (
            <span>
                TODO: Implement modal 
            </span>
        )
    }

  return (
    <span className="cursor-pointer" onClick={onClick}>
        {children}
    </span>
  )
}

export default NavLoginButton
