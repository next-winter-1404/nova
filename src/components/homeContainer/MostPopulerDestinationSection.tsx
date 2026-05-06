import BlureLightCircle from '../common/BlureLightCircle'
import Container from '../common/Container'
import GreenSectionTitle from '../common/GreenSectionTitle'
import ProductCard from '../common/productCard/ProductCard'

const MostPopulerDestinationSection = () => {
  return (
    <div className='relative padding-section'>
      <BlureLightCircle bgColor='#8CFF4552' />
      <Container >
        <div className='flex flex-col items-center gap-14'>
            <div className='flex flex-col items-center gap-6'>
            <GreenSectionTitle title="مقصد رویا ها"/>
            <h2 className='text-32-medium'>اجاره ویلا در محبوب ترین مقاصد این ماه</h2>
            <p className='text-[16px] text-center text-white'>! در اینجا می توانید محبوب ترین مقصد هارا از بین انتخاب کاربران مشاهده کنید و آن ها بررسی کنید</p>
            </div>
            <div className='flex xl:flex-nowrap flex-wrap justify-center items-center sm:gap-5 gap-2'>
                <ProductCard
                    title='اجاره ویلا در گیلان'
                    mode='col'
                    rate='4.5'
                 />
                 <ProductCard
                    title='اجاره ویلا در گیلان'
                    mode='col'
                    rate='4.5'
                 />
                 <ProductCard
                    title='اجاره ویلا در گیلان'
                    mode='col'
                    rate='4.5'
                 />
                 <ProductCard
                    title='اجاره ویلا در گیلان'
                    mode='col'
                    rate='4.5'
                 />
            </div>
        </div>
      </Container>
    </div>
  )
}

export default MostPopulerDestinationSection
