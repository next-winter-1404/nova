import Input from '@/src/components/common/input/Input'
import LoginButton from '@/src/components/login/button/LoginButton'
import LoginWrapper from '@/src/components/login/wrapper/page'
import React from 'react'

const SignUpPage = () => {
  return (
   <LoginWrapper  ButtonSection={<LoginButton buttonText='ارسال کد تایید' width='w-full'/>}content={
   <Input labelText='ایمیل شما* : ' InputHeight='43px' htmlFor='' parentWidth='w-full' placeHolder='example@gmail.com' type='submit' />
   }/>
  )
}

export default SignUpPage
