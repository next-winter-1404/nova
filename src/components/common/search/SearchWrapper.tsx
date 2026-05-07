"use client"

import { useState } from 'react'
import DropMenu from '@/src/components/common/dropMenu/DropMenu';
import { FaSearch } from 'react-icons/fa';


const SearchWrapper = () => {

  const [city, setCity] = useState('nyc');
  const [checkInDate, setCheckInDate] = useState('nyc');
  const [checkOutDate, setCheckOutDate] = useState('nyc');

  const cities = [
    { value: 'nyc', label: 'New York' },
    { value: 'la', label: 'Los Angeles' },
    { value: 'chi', label: 'Chicago' },
  ];
  return (
    <div className='container flex-2 flex-wrap bg-dark-800 border-2 border-dark-650 shadow-000-16 inset-shadow-fff-8 rounded-4xl px-6 py-5'>
      
      <div className='flex-center gap-6'>
        <div className='serach-button'>
        <span>جستوجو کنید</span>
        <FaSearch />
        </div>
        <div className='flex-1'>
          <DropMenu
          options={cities}
          value={checkOutDate}
          onChange={setCheckOutDate}
          placeholder="وارد کنید ..."
          dropDownLabel=":  تاریخ خروج"
        />
        </div>
        <div className='flex-1'>
          <DropMenu
          options={cities}
          value={checkInDate}
          onChange={setCheckInDate}
          placeholder="وارد کنید ..."
          dropDownLabel=": تاریخ ورود "
        />
        </div>
        <div className='flex-2'>
          <DropMenu
          options={cities}
          value={city}
          onChange={setCity}
          placeholder="Choose a city"
          dropDownLabel=": انتخاب مقصد "
        />
        </div>
        </div>

    </div>
  )
}

export default SearchWrapper
