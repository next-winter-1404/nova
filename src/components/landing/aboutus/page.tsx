import React from 'react'
import Triangle from '../../common/triangle/page'
import CardContainer from '../../common/card/page'

const AboutUs = () => {
  return (
    <div className='flex flex-col w-full items-center gap-6 h-[800px] bg-dark-900 rounded-br-[64px] rounded-bl-[64px] text-white-pure'>
      <Triangle 
        text='درباره ما'
      />
      <span className =' text-[32px]'>!دلتا رو بیشتر بشناس </span>
      <h2 className='text-[16px]'>.تیم دلتا با ارائه بهترین نیرو های خدماتی و سرویس های املاکی سعی دارد تا بتواند در تمام لحظات کنار شما باشد</h2>
      <div className ='flex w-full border items-center justify-center gap-5 h-[500px] border-amber-50'>
        <div className ='flex flex-col w-[445px] border h-[470px] border-amber-50 '>
          <CardContainer
            cavity='sharp'
            labelSize='lg'
            labelContent = {<div ></div>}
            mainContent ={<div className='h-[180px] w-[421px] '>
              <CardContainer
                cavity='sharp'
                labelSize='lg'
                labelContent = {<div></div>}
                mainContent ={<div className='h-[150px]'>hfjh;iith</div>}
                mainBackground='bg-dark-900'
                labelBackground='bg-dark-900'
              />
            </div>}
            mainBackground='bg-dark-700'
            labelBackground='bg-dark-700'
          />
        </div>
        <div className ='flex w-[445px] border h-[470px] border-amber-50 items-center justify-center'>
         
        </div>
        <div className ='flex flex-col justify-center items-center w-[445px] border h-[470px] border-amber-50'></div>
      </div>
    </div>
  )
}

export default AboutUs