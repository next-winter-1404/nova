import Container from '@/src/components/common/Container'
import GreenSectionTitle from '../common/GreenSectionTitle'
import CardContainer from '../common/card/page'

const CategorySection = () => {
  return (
    <div className='padding-section'>
      <Container>
        <div className='flex flex-col items-center gap-14'>
            <div className='flex flex-col items-center gap-6'>
            <GreenSectionTitle title='دسته بندی املاک دلتا'/>
            <h2 className='text-32-medium'>! هر ملکی بخوای اینجا پیدا میشه</h2>
            <p className='text-[16px] text-center text-white'>با کلیک به روی هر دسته بندی می توانید تمام آگهی مربوط آن را مشاهده کنید و به ملک مورد علاقه خود برسید</p>
            </div>
            <div>
                
            </div>
        </div>
      </Container>
    </div>
  )
}

export default CategorySection
