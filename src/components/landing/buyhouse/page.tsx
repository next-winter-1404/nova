import Image from 'next/image'
import React from 'react'
import Button from '../../common/button/page'
import CardContainer from '../../common/card/page'
import LeftTriangle from "@/src/assets/images/LeftTriangle.svg"
import smallLeftArrowWhite from "@/src/assets/icons/smallLeftArrowWhite.svg"
import leftArrow from "@/src/assets/icons/leftArrow.svg"
const BuyHouse = () => {
    return (
        <div className ='bg-dark-850 w-full h-[1600px] rounded-bl-[64px] rounded-br-[64px] gap- flex-col items-center justify-center flex '>
            <div className =' w-[1440px] gap-12 flex flex-col text-right'>
                <div className='flex gap-6 flex-col'>
                    <div className='flex justify-end gap-4'>
                    <Image src={LeftTriangle} alt='.'/>
                    <h2 className='text-primary-accent-green text-[16px]' >!خونه از خودت میخوای </h2>
                    </div>
                    <div className='flex justify-between'>
                        <Button 
                            text=" مشاهده همه" width='w-[137px]' height='h-[36px]' buttonStyle={{display: "flex", justifyContent:"space-between",paddingLeft:"20px", paddingRight:"20px",fontSize :"16px" , backgroundColor : "dark-700",border: "2px solid #FFF"}} 
                            icon={<Image src={smallLeftArrowWhite} alt='smallLeftArrow'/>}></Button>
                        <span className='text-[32px] text-white-pure'>خرید و فروش ملک در دلتا</span>
                    </div>
                </div>
                <div className ='w-[1440px] flex h-[450px] items-center justify-between'>                    
                    <div className='relative h-[430px] text-white-pure flex flex-col gap-4 mt-[-39px]'>                   
                        <div className='w-[45px] absolute  flex justify-center rounded-[8px] h-[22px] bg-dark-700'>
                            {/* <Image src={leftArrow} alt='leftArrow' className=' '/> */}
                        </div>
                        <CardContainer
                            cavity="sharp"
                            labelContent={<div className='w-[67px] h-[30px] mt-[5px] bg-white-pure rounded-[8px] '></div>}
                            labelSize="md"
                            mainContent={<div className='w-[297px] h-[156px] bg-dark-600 rounded-2xl'>gfkfponkxf gkhkhl.k vil</div>
                                
                            }                            
                            labelBackground="bg-[#393939]"
                            mainBackground="bg-[#393939]"
                            labelExtraStyle={{height:'40px'}}
                        />
                        <span className='text-[20px]'>آپارتمان لوکس زعفرانیه</span>
                        <div><h2 className='text-[16px] text-gray-300'>گیلان ، رشت</h2></div>
                        <div className='w-full h-[16px] flex items-center justify-end text-gray-300 gap-0.5'>
                            <div className=' w-[70px] text-[13px]'> حیاط</div>                            
                            <div className='border-l border-gray-300 w-[70px] text-[13px]'>2 حمام </div>
                            <div className='border-l border-gray-300 w-[70px] text-[13px]'> 1 پارکینگ</div>
                            <div className='border-l border-gray-300 w-[70px] text-[13px]'> خوابه 4</div>                           
                        </div>
                        <div className='w-full h-[36px] bg-dark-600 rounded-[12px] flex items-center justify-between pl-3 pr-3'>                            
                            <h2 className='text-[16px]'>ت 5.000.000 </h2>
                            <h2 className='text-gray-300 text-[16px]'>:قیمت خرید </h2>
                        </div>
                    </div>
                    <div className=' h-[430px] text-white-pure flex flex-col gap-4'>
                    <CardContainer
                            cavity="sharp"
                            labelContent={<div className='w-[67px] h-[30px] mt-[5px] bg-white-pure rounded-[8px] '></div>}
                            labelSize="md"
                            mainContent={<div className='w-[297px] h-[156px] bg-dark-600 rounded-2xl'>gfkfponkxf gkhkhl.k vil</div>
                                
                            }                            
                            labelBackground="bg-[#393939]"
                            mainBackground="bg-[#393939]"
                            labelExtraStyle={{height:'40px'}}
                        />
                        <span className='text-[20px]'>آپارتمان لوکس زعفرانیه</span>
                        <div><h2 className='text-[16px] text-gray-300'>گیلان ، رشت</h2></div>
                        <div className='w-full h-[16px] flex items-center justify-end text-gray-300 gap-0.5'>
                            <div className=' w-[70px] text-[13px]'> حیاط</div>                            
                            <div className='border-l border-gray-300 w-[70px] text-[13px]'>2 حمام </div>
                            <div className='border-l border-gray-300 w-[70px] text-[13px]'> 1 پارکینگ</div>
                            <div className='border-l border-gray-300 w-[70px] text-[13px]'> خوابه 4</div>                           
                        </div>
                        <div className='w-full h-[36px] bg-dark-600 rounded-[12px] flex items-center justify-between pl-3 pr-3'>                            
                            <h2 className='text-[16px]'>ت 5.000.000 </h2>
                            <h2 className='text-gray-300 text-[16px]'>:قیمت خرید </h2>
                        </div>
                    </div>
                    <div className=' h-[430px] text-white-pure flex flex-col gap-4'>
                    <CardContainer
                            cavity="sharp"
                            labelContent={<div className='w-[67px] h-[30px] mt-[5px] bg-white-pure rounded-[8px] '></div>}
                            labelSize="md"
                            mainContent={<div className='w-[297px] h-[156px] bg-dark-600 rounded-2xl'>gfkfponkxf gkhkhl.k vil</div>
                                
                            }                            
                            labelBackground="bg-[#393939]"
                            mainBackground="bg-[#393939]"
                            labelExtraStyle={{height:'40px'}}
                        />
                        <span className='text-[20px]'>آپارتمان لوکس زعفرانیه</span>
                        <div><h2 className='text-[16px] text-gray-300'>گیلان ، رشت</h2></div>
                        <div className='w-full h-[16px] flex items-center justify-end text-gray-300 gap-0.5'>
                            <div className=' w-[70px] text-[13px]'> حیاط</div>                            
                            <div className='border-l border-gray-300 w-[70px] text-[13px]'>2 حمام </div>
                            <div className='border-l border-gray-300 w-[70px] text-[13px]'> 1 پارکینگ</div>
                            <div className='border-l border-gray-300 w-[70px] text-[13px]'> خوابه 4</div>                           
                        </div>
                        <div className='w-full h-[36px] bg-dark-600 rounded-[12px] flex items-center justify-between pl-3 pr-3'>                            
                            <h2 className='text-[16px]'>ت 5.000.000 </h2>
                            <h2 className='text-gray-300 text-[16px]'>:قیمت خرید </h2>
                        </div>
                    </div>
                    <div className=' h-[430px] text-white-pure flex flex-col gap-4'>
                    <CardContainer
                            cavity="sharp"
                            labelContent={<div className='w-[67px] h-[30px] mt-[5px] bg-white-pure rounded-[8px] '></div>}
                            labelSize="md"
                            mainContent={<div className='w-[297px] h-[156px] bg-dark-600 rounded-2xl'>gfkfponkxf gkhkhl.k vil</div>
                                
                            }                            
                            labelBackground="bg-[#393939]"
                            mainBackground="bg-[#393939]"
                            labelExtraStyle={{height:'40px'}}
                        />
                        <span className='text-[20px]'>آپارتمان لوکس زعفرانیه</span>
                        <div><h2 className='text-[16px] text-gray-300'>گیلان ، رشت</h2></div>
                        <div className='w-full h-[16px] flex items-center justify-end text-gray-300 gap-0.5'>
                            <div className=' w-[70px] text-[13px]'> حیاط</div>                            
                            <div className='border-l border-gray-300 w-[70px] text-[13px]'>2 حمام </div>
                            <div className='border-l border-gray-300 w-[70px] text-[13px]'> 1 پارکینگ</div>
                            <div className='border-l border-gray-300 w-[70px] text-[13px]'> خوابه 4</div>                           
                        </div>
                        <div className='w-full h-[36px] bg-dark-600 rounded-[12px] flex items-center justify-between pl-3 pr-3'>                            
                            <h2 className='text-[16px]'>ت 5.000.000 </h2>
                            <h2 className='text-gray-300 text-[16px]'>:قیمت خرید </h2>
                        </div>
                    </div>                   
                </div>                      
            </div>  
            <div className='mt-28 border border-amber-50 w-[1440px] h-[551px]'>
                <CardContainer
                    cavity='sharp'
                    labelContent={<div className='h-[2px]'></div>}
                    labelSize='lg'
                    mainContent={<div className='flex gap-12 flex-col border border-amber-50 w-[1376px] h-[487px]'>
                        <div className='flex gap-6 flex-col'>
                            <div className='flex justify-end gap-4'>
                                <Image src={LeftTriangle} alt='LeftTriangle'/>
                                <h2 className='text-[16px] text-primary-accent-green'>جدید ترین نقاط</h2>
                            </div>
                            <div className='flex justify-between'>
                                <Button text=" مشاهده همه" width='w-[137px]' height='h-[36px]' buttonStyle={{backgroundColor : "dark-700",
                                    border: "2px solid #FFF"
                                }}></Button>
                                <span className='text-[32px] text-white-pure'> جدید ترین مناقط تفریحی</span>
                            </div>
                        </div>
                        <div className ='w-full flex h-[282px] items-center justify-between'>
                        <div className='h-[232px] flex flex-col gap-6'>
                            <CardContainer
                                cavity="sharp"
                                labelContent={<div className='w-[67px] h-[30px] mt-[5px] bg-white-pure rounded-[8px] '></div>}
                                labelSize="md"
                                mainContent={<div className='w-[274px] h-[156px] bg-dark-600 rounded-2xl'>gfkfponkxf gkhkhl.k vil</div>
                                    
                                }                            
                                labelBackground="bg-[#393939]"
                                mainBackground="bg-[#393939]"
                                labelExtraStyle={{height:'40px'}}
                                width='w-[306px]'
                            />
                            <div className='flex'>
                                <h2 className='text-[16px] text-gray-300' > ( 11.000 نفر بازدید کننده )</h2>
                                <span className='text-[20px] text-white-pure'>اقمتگاه دال در قشم</span>
                            </div>
                        </div>
                        <div className='h-[232px] flex flex-col gap-6'>
                            <CardContainer
                                cavity="sharp"
                                labelContent={<div className='w-[67px] h-[30px] mt-[5px] bg-white-pure rounded-[8px] '></div>}
                                labelSize="md"
                                mainContent={<div className='w-[274px] h-[156px] bg-dark-600 rounded-2xl'>gfkfponkxf gkhkhl.k vil</div>
                                    
                                }                            
                                labelBackground="bg-[#393939]"
                                mainBackground="bg-[#393939]"
                                labelExtraStyle={{height:'40px'}}
                                width='w-[306px]'
                            />
                            <div className='flex'>
                                <h2 className='text-[16px] text-gray-300' > ( 11.000 نفر بازدید کننده )</h2>
                                <span className='text-[20px] text-white-pure'>اقمتگاه دال در قشم</span>
                            </div>
                        </div>
                        <div className='h-[232px] flex flex-col gap-6'>
                            <CardContainer
                                cavity="sharp"
                                labelContent={<div className='w-[67px] h-[30px] mt-[5px] bg-white-pure rounded-[8px] '></div>}
                                labelSize="md"
                                mainContent={<div className='w-[274px] h-[156px] bg-dark-600 rounded-2xl'>gfkfponkxf gkhkhl.k vil</div>
                                    
                                }                            
                                labelBackground="bg-[#393939]"
                                mainBackground="bg-[#393939]"
                                labelExtraStyle={{height:'40px'}}
                                width='w-[306px]'
                            />
                            <div className='flex'>
                                <h2 className='text-[16px] text-gray-300' > ( 11.000 نفر بازدید کننده )</h2>
                                <span className='text-[20px] text-white-pure'>اقمتگاه دال در قشم</span>
                            </div>
                        </div>
                        <div className='h-[232px] flex flex-col gap-6'>
                            <CardContainer
                                cavity="sharp"
                                labelContent={<div className='w-[67px] h-[30px] mt-[5px] bg-white-pure rounded-[8px] '></div>}
                                labelSize="md"
                                mainContent={<div className='w-[274px] h-[156px] bg-dark-600 rounded-2xl'>gfkfponkxf gkhkhl.k vil</div>
                                    
                                }                            
                                labelBackground="bg-[#393939]"
                                mainBackground="bg-[#393939]"
                                labelExtraStyle={{height:'40px'}}
                                width='w-[306px]'
                            />
                            <div className='flex'>
                                <h2 className='text-[16px] text-gray-300' > ( 11.000 نفر بازدید کننده )</h2>
                                <span className='text-[20px] text-white-pure'>اقمتگاه دال در قشم</span>
                            </div>
                        </div>
                        
                        </div>
                    </div>}
                    mainBackground = "bg-[#232323]"
                    labelBackground='bg-[#232323]'                
                />
            </div>
        </div>
    )
}

export default BuyHouse