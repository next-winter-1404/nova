import Container from '@/src/components/common/Container'
import GreenSectionTitle from '../common/GreenSectionTitle'
import CardContainer from '../common/card/page'

import villa from "@/public/icons/villa.svg"
import cottage from "@/public/icons/cottage.svg"
import woodenHouse from "@/public/icons/wooden-house.svg"
import house from "@/public/icons/house.svg"
import apartment from "@/public/icons/apartment.svg"
import Image from 'next/image'
import BlureLightCircle from '../common/BlureLightCircle'


const stateCategories = [
    {label:"ملک ویلایی", icon: villa},
    {label:"ملک کلبه", icon: cottage},
    {label:"بومگردی", icon: woodenHouse},
    {label:"استخردار", icon: house},
    {label:"ملک ساحلی", icon: cottage},
    {label:"آپارتمان", icon: apartment},
]

const CategorySection = () => {
  return (
    <div className='relative padding-section'>
      <BlureLightCircle bgColor='#8CFF4552'/>
      <Container>
        <div className='flex flex-col items-center gap-14'>
            <div className='flex flex-col items-center gap-6'>
            <GreenSectionTitle title='دسته بندی املاک دلتا'/>
            <h2 className='text-32-medium'>! هر ملکی بخوای اینجا پیدا میشه</h2>
            <p className='text-[16px] text-center text-white'>با کلیک به روی هر دسته بندی می توانید تمام آگهی مربوط آن را مشاهده کنید و به ملک مورد علاقه خود برسید</p>
            </div>
            <div className='flex xl:flex-nowrap flex-wrap justify-center items-center sm:gap-5 gap-2'>
                {stateCategories.map(category => (
                    <div key= {category.label}>
                        <CardContainer
                            cavity='round' 
                            labelBackground='bg-dark-860 hover:bg-[#8CFF45]' 
                            labelContent={
                                <span className='w-14 rounded-2xl p-2.5'>
                                    <Image src={category.icon} alt='icon' width={32} height={32} />
                                </span>
                            }
                            labelSize='md'
                            mainBackground='bg-dark-860 hover:bg-[#8CFF45]'
                            mainContent={
                                <span className='flex-center justify-between gap-3 whitespace-nowrap'>
                                    <span className=" text-white-pure sm:text-[20px] text-[12px]">
                                        ✦                    
                                    </span>
                                    <p className='text-20-medium'>{category.label}</p>
                                    <span className=" text-white-pure sm:text-[20px] text-[12px]">
                                        ✦                    
                                    </span>
                                </span>
                            }
                            width='w-[200px]'
                            labelExtraStyle={{height:"48px"}}
                            mainExtraStyle={{height:"89px"}}
                    />
                    </div>
                ))}
            </div>
        </div>
      </Container>
    </div>
  )
}

export default CategorySection
