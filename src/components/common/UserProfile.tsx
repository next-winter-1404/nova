"use client"
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion';


interface UserProfileProps {
    imageSrc: string;
}

const UserProfile = ({imageSrc}: UserProfileProps) => {
  return (
    <motion.div className='rounded-full border-2 border-gray-400' whileHover={{ y: -10 }}
      transition={{
      type: "tween",
      duration: 0.4, 
      ease: "easeOut",
      delay: 0 
    }}
    >
      <Image src={imageSrc}
       className='sm:w-8 sm:h-8 w-6 h-6'
       alt='user profile' 
       />
    </motion.div>
  )
}

export default UserProfile
