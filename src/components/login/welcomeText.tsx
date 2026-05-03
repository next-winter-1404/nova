import React from 'react'

const WelcomeText = () => {
  return (
    <div className='flex flex-col gap-6 '>
    <div className="flex ">
      <h2 className='text-32-medium'>به خانواده دلتا،</h2>
      <h2 className='text-32-semibold'>خوش برگشتی!</h2>
    </div>
    <span className='sm:text-16-medium text-13-regular'>
      با وارد کردن اطلاعات خود به راحتی وارد پنل خودتون بشید و از پروژه
      هاتون خبر بگیرید !
    </span>
  </div>
  )
}

export default WelcomeText
