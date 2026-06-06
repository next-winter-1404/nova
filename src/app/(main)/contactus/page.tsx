'use client'
import Image from 'next/image'
import LeftTriangle from "@/src/assets/images/LeftTriangle.svg"
import at from "@/src/assets/icons/at.svg"
import phoneGray from "@/src/assets/icons/phoneGray.svg"
import Location from "@/src/assets/icons/Location.svg"
import LoginButton from '@/src/components/login/button/LoginButton'
import Input from '@/src/components/common/input/Input'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import { postCommentsLand } from '@/src/utils/sevices/api/contactus/postCommentLand'
import { Breadcrumb } from '@/src/components/common/breadCrumbs'





const ContactUsPage = () => {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState({
      title: "",
      message: ""
    });
    const items = [
      { label: "ارتباط با ما"},
    ];

  const checkAuth = async (): Promise<boolean> => {
    try {
      const response = await fetch("/api/auth/check");
      const data = await response.json();
      console.log("Auth check response:", data); 
      setIsAuthenticated(data.isAuthenticated);
      return data.isAuthenticated;
    } catch (error) {
      console.log("Error checking auth:", error);
      return false;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);


const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const isAuth = await checkAuth();
    
    if (!isAuth) {
      sessionStorage.setItem("redirectAfterLogin", window.location.pathname);
      toast.error("ابتدا وارد حساب کاربری شوید");
      router.push("/login");
      return;
    }
    
    try {
      await postCommentsLand({
        title: formData.title,
        message: formData.message
      });
      toast.success("! پیام شما با موفقیت ارسال شد ");
      setFormData({ title: "", message: "" });
    } catch (error) {
      toast.error("متاسفانه خطایی رخ داده لطفا دوباره تلاش کنید.");
    }
  };

  const handleChange = (e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;
    setFormData((prev) => ({
      ...prev,
      [name] : value
    }));
  };
  return (
    <div className=' md:w-full w-[390px] md:h-[850px] h-[350px] md:items-center flex-col justify-center flex' dir='rtl'>
      <div className=' md:w-11/12  w-[390px] md:gap-12 gap-7 flex flex-col text-right'>
      <Breadcrumb items={items} />
        <div className='md:w-full   w-[389px] flex gap-6 flex-col'>
          <div className='flex gap-4'>
              <h2 className='text-primary-accent-green md:text-[16px] text-[14px]' >ارتباط با ما</h2>
              <Image src={LeftTriangle} alt='.'/>
          </div>
        </div>
        <div className='w-full   flex gap-16 h-[400px]'>
          <div className='w-1/2   gap-9 justify-center flex flex-col'>
            <span className='text-[16px] text-white-pure'>هر ساعت از شبانه روز که باشه تیم پیشتیبانی دلتا پاسخگوی سوالات و انتقادات شما هستند تا در اسرع وقت مشکلتان را حل کنیم !</span>
            <div className='flex flex-col gap-6'>
              <div className='w-[320px] rounded-2xl bg-unSelectedButton justify-center items-center text-gray-300 h-[50px] flex gap-2.5'><Image src={phoneGray} alt='phoneGray'/> 09229167194 - 098541612310</div>
              <div className='w-[235px] rounded-2xl bg-unSelectedButton justify-center items-center text-gray-300 h-[50px] flex gap-2.5'><Image src={at} alt='at'/>Delta@gmail.com</div>
              <div className='w-[410px] rounded-2xl bg-unSelectedButton justify-center items-center text-gray-300 h-[50px] flex gap-2.5'><Image src={Location} alt='Location'/> گیلان ، رشت ، میدان آزادی ، جنب چهار راه عظیمی زاده</div>
            </div>
          </div>
          <div className='w-1/2   flex items-center justify-center flex-col'>
            <div className='w-[388px] relative h-[366px] rounded-4xl bg-[#3B3B3B]'>
              <div className='absolute top-3 -right-12 w-[479px] h-[340px] rounded-4xl bg-dark-850'>
                <div className='w-[575px] h-[315px] flex items-center justify-center rounded-4xl bg-dark-500 absolute top-3 -right-12'>
                  <form className='md:h-[345px] h-[315px] md:w-[527px] w-[330px] flex flex-col items-center justify-center md:gap-[34px] gap-6'  onSubmit={handleSubmit}> 
                  <div className='flex md:w-full w-[330px] gap-6'>     
                    <Input
                        labelText={'عنوان :'} 
                        id={'title'} 
                        InputHeight={'h-[50px]'}
                        htmlFor={'title'}
                        type={'text'}
                        labelTextColor='text-gray-300'
                        placeHolder={'وارد کنید ....'}
                        parentWidth='md:w-full w-[150px]'
                        borderColor='border-selectedButtonText'               
                        labelTextSize='md:text-[16px] text-[12px] '
                        textSize='md:text-[20px] text-[16px] text-gray-300'
                        tagBgStyle={{background:"var(--color-dark-500)"}}
                        value={formData.title}
                        onChange={handleChange}
                        name='title'
                        dir='rtl'
                      />            
                  </div>
                  <div className='md:w-full w-[330px]' >
                  <Input
                        labelText={'پیام شما :'} 
                        id={'message'} 
                        InputHeight={'h-[109px]'}
                        htmlFor={'message'}
                        type={'message'}   
                        labelTextColor='text-gray-300'
                        placeHolder='وارد کنید ...'                   
                        parentWidth='md:w-full w-[322px]'
                        borderColor='border-selectedButtonText'               
                        labelTextSize='md:text-[16px] text-[12px]'
                        textSize='md:text-[20px] text-[16px] text-gray-300'
                        tagBgStyle={{background:"var(--color-dark-500)"}}
                        value={formData.message}
                        name='message'
                        onChange={handleChange}
                        dir='rtl'
                      />
                  </div>
                  <LoginButton
                    type='submit'
                    buttonText='ارسال درخواست'
                    width='w-full'
                    buttonStyle="bg-primary-accent-green text-dark-800"
                    loadingText='درحال ارسال پیام'
                    
                  />
                </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>      
    </div>
  )
}

export default ContactUsPage
