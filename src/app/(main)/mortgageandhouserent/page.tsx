"use client"
import { Breadcrumb } from '@/src/components/common/breadCrumbs'
import Button from '@/src/components/common/button/page';
import Container from '@/src/components/common/Container'
import Input from '@/src/components/common/input/Input';
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { BsChevronDown } from "react-icons/bs";

import megaPhone from "@/src/assets/icons/megaphone.svg";
import Image from 'next/image';
import RowProductCard from '@/src/components/common/productCard/RowProductCard';
import CardContainer from '@/src/components/common/card/page';

const MortgageAndHouseRent = () => {
  return (
    <div className='flex-col-center gap-49 bg-dark-900 mt-28'>
      <Container>
        {/* <Breadcrumb items={{}} /> */}
        <div className="flex-col-center gap-10">
          <div className=' flex-col-center justify-end gap-15'>
            <div className="px-4 py-5 bg-unSelectedButton flex-center gap-4 rounded-[24px]">
            <Button
              text={`تعداد اگهی : ${33}`}
              backgroundColor="transparent"
              buttonStyle={{ background: "transparent", border: "1px solid white" }}
              icon={<Image alt="megaphone" src={megaPhone} />}
            />
           <div className='flex-1'>
            <Input
            labelText="جستجو"
            InputHeight="h-[50px]"
            tagBgStyle={{ background: "var(--color-dark-800)",color:"white" }}
            borderColor="border-white border"
            textColor="text-white"
            placeHolder="... نام هتل مورد نظر"
            parentWidth=""
            />
           </div>
           <div className='flex-1'>
                <DropdownMenu.Root>
                    <DropdownMenu.Trigger asChild>
                            <button className="IconButton dropMenu p-5 w-full relative" aria-label="Customise options">
                              <span className="bg-dark-700 absolute -top-3.5 right-3.5 whitespace-nowrap">نوع معامله</span>
                              <BsChevronDown className="w-3 h-3"/>
                              <i className='whitespace-nowrap'>رهن و اجاره</i> 
                            </button>
                    </DropdownMenu.Trigger>
                
                    <DropdownMenu.Portal>
                            <DropdownMenu.Content className="DropdownMenuContent w-full p-4 rounded rounded-xl z-100 bg-dark-800" sideOffset={5}>
                              
                              <DropdownMenu.Item className="DropdownMenuItem" onSelect={() => console.log("New Tab")}>
                              <div className="RightSlot">
                                
                                </div>
                              </DropdownMenu.Item>
                              <DropdownMenu.Separator className="DropdownMenuSeparator" />
                
                            </DropdownMenu.Content>
                    </DropdownMenu.Portal>
                </DropdownMenu.Root>
            </div>
           <div className='flex-1'>
                <DropdownMenu.Root>
                    <DropdownMenu.Trigger asChild>
                            <button className="IconButton dropMenu p-5 w-full relative" aria-label="Customise options">
                              <span className="bg-dark-700 absolute -top-3.5 right-3.5">نوع ملک</span>
                              <BsChevronDown className="w-3 h-3"/>
                              <i>آپارتمان</i> 
                            </button>
                    </DropdownMenu.Trigger>
                
                    <DropdownMenu.Portal>
                            <DropdownMenu.Content className="DropdownMenuContent w-full p-4 rounded rounded-xl z-100 bg-dark-800" sideOffset={5}>
                              
                              <DropdownMenu.Item className="DropdownMenuItem" onSelect={() => console.log("New Tab")}>
                              <div className="RightSlot">
                                
                                </div>
                              </DropdownMenu.Item>
                              <DropdownMenu.Separator className="DropdownMenuSeparator" />
                
                            </DropdownMenu.Content>
                    </DropdownMenu.Portal>
                </DropdownMenu.Root>
            </div>
            <div className='flex-1'>
                <DropdownMenu.Root>
                    <DropdownMenu.Trigger asChild>
                            <button className="IconButton dropMenu p-5 w-full relative" aria-label="Customise options">
                              <span className="bg-dark-700 absolute -top-3.5 right-3.5">مرتب سازی براساس</span>
                              <BsChevronDown className="w-3 h-3"/>
                              <i>جدیدترین</i> 
                            </button>
                    </DropdownMenu.Trigger>
                
                    <DropdownMenu.Portal>
                            <DropdownMenu.Content className="DropdownMenuContent w-full p-4 rounded rounded-xl z-100 bg-dark-800" sideOffset={5}>
                              
                              <DropdownMenu.Item className="DropdownMenuItem" onSelect={() => console.log("New Tab")}>
                              <div className="RightSlot">
                                
                                </div>
                              </DropdownMenu.Item>
                              <DropdownMenu.Separator className="DropdownMenuSeparator" />
                
                            </DropdownMenu.Content>
                    </DropdownMenu.Portal>
                </DropdownMenu.Root>
            </div>
            <div className='flex-1'>
                <DropdownMenu.Root>
                    <DropdownMenu.Trigger asChild>
                            <button className="IconButton dropMenu p-5 w-full relative" aria-label="Customise options">
                              <span className="bg-dark-700 absolute -top-3.5 right-3.5">محل مورد نظر</span>
                              <BsChevronDown className="w-3 h-3"/>
                              <i>... استان،شهر</i> 
                            </button>
                    </DropdownMenu.Trigger>
                
                    <DropdownMenu.Portal>
                            <DropdownMenu.Content className="DropdownMenuContent w-full p-4 rounded rounded-xl z-100 bg-dark-800" sideOffset={5}>
                              
                              <DropdownMenu.Item className="DropdownMenuItem" onSelect={() => console.log("New Tab")}>
                              <div className="RightSlot">
                                
                                </div>
                              </DropdownMenu.Item>
                              <DropdownMenu.Separator className="DropdownMenuSeparator" />
                
                            </DropdownMenu.Content>
                    </DropdownMenu.Portal>
                </DropdownMenu.Root>
            </div>
            
          </div>
        <div className='flex-col-center items-end gap-6'>
          <div className='flex-center justify-end gap-4 max-w-[700px]'>
             <div className="flex-center gap-4">
              <div className='flex-1'>
              <Input
              labelText="حداکثر متراژ"
              
              InputHeight="h-[50px]"
              tagBgStyle={{ background: "var(--color-dark-900)",color:"white" }}
              borderColor="border-white border"
              textColor="text-white"
              placeHolder="متر"
              parentWidth="w-[126px]"
              />
              </div>
              <div className='flex-1'>
                <Input
                labelText="حداقل متراژ"
                
                InputHeight="h-[50px]"
                tagBgStyle={{ background: "var(--color-dark-900)",color:"white" }}
                borderColor="border-white border"
                textColor="text-white"
                placeHolder="متر"
                parentWidth="w-[126px]"
                />
              </div>
              <div className="h-[24px] w-[2px] bg-[#AAAAAA]"></div>
             </div>
             
             <div className="flex-center gap-4">
              <div className='flex-1'>
              <Input
              labelText="حداکثر اجاره"
              
              InputHeight="h-[50px]"
              tagBgStyle={{ background: "var(--color-dark-900)",color:"white" }}
              borderColor="border-white border"
              textColor="text-white"
              placeHolder="تومان"
              parentWidth="w-[126px]"
              />
              </div>
              <div className='flex-1'>
                <Input
                labelText="حداقل اجاره"
                
                InputHeight="h-[50px]"
                tagBgStyle={{ background: "var(--color-dark-900)",color:"white" }}
                borderColor="border-white border"
                textColor="text-white"
                placeHolder="تومان"
                parentWidth="w-[126px]"
                />
              </div>
              <div className="h-[24px] w-[2px] bg-[#AAAAAA]"></div>
             </div>
            <div className="flex-center gap-4">
              <div className='flex-1'>
                <Input
                labelText="حداقل رهن"
                
                InputHeight="h-[50px]"
                tagBgStyle={{ background: "var(--color-dark-900)",color:"white" }}
                borderColor="border-white border"
                textColor="text-white"
                placeHolder="تومان"
                parentWidth="w-[126px]"
                />
              </div>
              <div className='flex-1'>
                <Input
                labelText="حداقل رهن"
                
                InputHeight="h-[50px]"
                tagBgStyle={{ background: "var(--color-dark-900)",color:"white" }}
                borderColor="border-white border"
                textColor="text-white"
                placeHolder="تومان"
                parentWidth="w-[126px]"
                />
              </div>
            </div>
          </div>
          <div className="w-full h-0.5 mx-auto bg-dark-620"></div>
        </div>
          </div>
          <div className="sm:flex-center sm:justify-end flex-wrap gap-4">
              <div className="group">
                <CardContainer 
                parentExtraStyle={{width:"600px"}}
                curveColor='#393939'
                cavity="round"
                labelContent={
                    <div className='w-[67px] h-[10px] flex items-center  text-dark-800 justify-center gap-1 '>
                    {/* <Image src={Star} alt='star'/>  */}
                    {/* {rate} */}
                    </div>
                }
                labelSize="lg"
                mainContent={
                <div className="mx-auto flex flex-col items-center">
                  <RowProductCard />
                </div>}                            
                labelBackground="bg-[#393939]"
                labelExtraStyle={{minHeight:'10px'}}
                mainExtraStyle="bg-dark-700"
                
           />   
              </div> 
              <div className="group">
                <CardContainer 
                parentExtraStyle={{width:"600px"}}
                curveColor='#393939'
                cavity="round"
                labelContent={
                    <div className='w-[67px] h-[10px] flex items-center  text-dark-800 justify-center gap-1 '>
                    {/* <Image src={Star} alt='star'/>  */}
                    {/* {rate} */}
                    </div>
                }
                labelSize="lg"
                mainContent={
                <div className="mx-auto flex flex-col items-center">
                  <RowProductCard />
                </div>}                            
                labelBackground="bg-[#393939]"
                labelExtraStyle={{minHeight:'25px'}}
                mainExtraStyle="bg-dark-700"
                
           />   
              </div> 
              <div className="group">
                <CardContainer 
                parentExtraStyle={{width:"600px"}}
                curveColor='#393939'
                cavity="round"
                labelContent={
                    <div className='w-[67px] h-[10px] flex items-center  text-dark-800 justify-center gap-1 '>
                    {/* <Image src={Star} alt='star'/>  */}
                    {/* {rate} */}
                    </div>
                }
                labelSize="lg"
                mainContent={
                <div className="mx-auto h-[198px] flex flex-col items-center px-3">
                  <RowProductCard />
                </div>}                            
                labelBackground="bg-[#393939]"
                labelExtraStyle={{minHeight:'25px'}}
                mainExtraStyle="bg-dark-700"
                
           />   
              </div>
              <div className="group">
                <CardContainer 
                parentExtraStyle={{width:"600px"}}
                curveColor='#393939'
                cavity="round"
                labelContent={
                    <div className='w-[67px] h-[10px] flex items-center  text-dark-800 justify-center gap-1 '>
                    {/* <Image src={Star} alt='star'/>  */}
                    {/* {rate} */}
                    </div>
                }
                labelSize="lg"
                mainContent={
                <div className="mx-auto h-[198px] flex flex-col items-center px-3">
                  <RowProductCard />
                </div>}                            
                labelBackground="bg-[#393939]"
                labelExtraStyle={{minHeight:'25px'}}
                mainExtraStyle="bg-dark-700"
                
           />   
              </div>    
              <div className="group">
                <CardContainer 
                parentExtraStyle={{width:"600px"}}
                curveColor='#393939'
                cavity="round"
                labelContent={
                    <div className='w-[67px] h-[10px] flex items-center  text-dark-800 justify-center gap-1 '>
                    {/* <Image src={Star} alt='star'/>  */}
                    {/* {rate} */}
                    </div>
                }
                labelSize="lg"
                mainContent={
                <div className="mx-auto h-[198px] flex flex-col items-center px-3">
                  <RowProductCard />
                </div>}                            
                labelBackground="bg-[#393939]"
                labelExtraStyle={{minHeight:'25px'}}
                mainExtraStyle="bg-dark-700"
                
           />   
              </div>  
              <div className="group">
                <CardContainer 
                parentExtraStyle={{width:"600px"}}
                curveColor='#393939'
                cavity="round"
                labelContent={
                    <div className='w-[67px] h-[10px] flex items-center  text-dark-800 justify-center gap-1 '>
                    {/* <Image src={Star} alt='star'/>  */}
                    {/* {rate} */}
                    </div>
                }
                labelSize="lg"
                mainContent={
                <div className="mx-auto h-[198px] flex flex-col items-center px-3">
                  <RowProductCard />
                </div>}                            
                labelBackground="bg-[#393939]"
                labelExtraStyle={{minHeight:'25px'}}
                mainExtraStyle="bg-dark-700"
                
           />   
              </div>  
              <div className="group">
                <CardContainer 
                parentExtraStyle={{width:"600px"}}
                curveColor='#393939'
                cavity="round"
                labelContent={
                    <div className='w-[67px] h-[10px] flex items-center  text-dark-800 justify-center gap-1 '>
                    {/* <Image src={Star} alt='star'/>  */}
                    {/* {rate} */}
                    </div>
                }
                labelSize="lg"
                mainContent={
                <div className="mx-auto h-[198px] flex flex-col items-center px-3">
                  <RowProductCard />
                </div>}                            
                labelBackground="bg-[#393939]"
                labelExtraStyle={{minHeight:'25px'}}
                mainExtraStyle="bg-dark-700"
                
           />   
              </div>  
              <div className="group">
                <CardContainer 
                parentExtraStyle={{width:"600px"}}
                curveColor='#393939'
                cavity="round"
                labelContent={
                    <div className='w-[67px] h-[10px] flex items-center  text-dark-800 justify-center gap-1 '>
                    {/* <Image src={Star} alt='star'/>  */}
                    {/* {rate} */}
                    </div>
                }
                labelSize="lg"
                mainContent={
                <div className="mx-auto h-[198px] flex flex-col items-center px-3">
                  <RowProductCard />
                </div>}                            
                labelBackground="bg-[#393939]"
                labelExtraStyle={{minHeight:'25px'}}
                mainExtraStyle="bg-dark-700"
                
           />   
              </div>  
              <div className="group">
                <CardContainer 
                parentExtraStyle={{width:"600px"}}
                curveColor='#393939'
                cavity="round"
                labelContent={
                    <div className='w-[67px] h-[10px] flex items-center  text-dark-800 justify-center gap-1 '>
                    {/* <Image src={Star} alt='star'/>  */}
                    {/* {rate} */}
                    </div>
                }
                labelSize="lg"
                mainContent={
                <div className="mx-auto h-[198px] flex flex-col items-center px-3">
                  <RowProductCard />
                </div>}                            
                labelBackground="bg-[#393939]"
                labelExtraStyle={{minHeight:'25px'}}
                mainExtraStyle="bg-dark-700"
                
           />   
              </div>  
          </div>
        </div>
      </Container>
    </div>
  )
}

export default MortgageAndHouseRent
