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
        <div className ='flex flex-col w-[445px] border h-[470px] border-amber-50 items-center justify-center'>
          <CardContainer 
          color='bg-dark-700'
          cavity='round'
          labelSize='md'
          mainContent
          width='445px'
          labelContent ={<div className='h-6'></div>}
          > 
          </CardContainer>
        </div>
        <div className ='flex w-[445px] border h-[470px] border-amber-50 items-center justify-center'>
          <CardContainer 
            color='bg-dark-700'
            labelSize='md'
            cavity='round'
            mainContent = { <div><CardContainer 
              color='bg-blue-purple-500'
              labelSize='md'
              cavity='round'
              width='422px'
              mainContent={<div className='bg-blue-purple-500'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو د...</div>}
              labelContent= {<div className='h-2'></div>}
              >
                </CardContainer> </div>}
            width='445px'
            labelContent = {<div className='h-6'></div>}
            height='470px'
          >
          </CardContainer>
        </div>
        <div className ='flex w-[445px] border h-[470px] border-amber-50'></div>
      </div>
    </div>
  )
}

export default AboutUs