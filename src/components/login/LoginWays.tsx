import React from 'react'
import Button from '../common/button/page'
import Image from 'next/image'
import google from "../../assets/icons/googleIcon.svg"
import apple from "../../assets/icons/appleLogo.svg"

const LoginWays = () => {
  return (
    <div className="flex gap-8">
    <Button
      text={"ورود با حساب گوگل"}
      buttonStyle={{
        width: "50%",
        background: "var(--color-unSelectedButton)",
        cursor: "pointer",
        display: "flex",
        gap: 10,
        color:"var(--color-white-pure)"
      }}
      icon={<Image src={google} alt="google" />}
    />
    <Button
      text={"ورود با حساب اپل"}
      buttonStyle={{
        width: "50%",
        background: "var(--color-unSelectedButton)",
        cursor: "pointer",
        display: "flex",
        gap: 10,
        color:"var(--color-white-pure)"
      }}
      icon={<Image src={apple} alt="apple" />}
    />
  </div>
  )
}

export default LoginWays
