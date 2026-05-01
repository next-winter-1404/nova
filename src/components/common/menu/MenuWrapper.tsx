"use client"

import { useMenu } from './MenuContext';
import { motion, AnimatePresence } from 'framer-motion';

interface MenuWrapperProps {
    children: React.ReactNode;
}

const MenuWrapper = ({children} : MenuWrapperProps) => {
  const { isOpen, menuRef } = useMenu();
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={menuRef}
          role="menu"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="menu-wrapper"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default MenuWrapper;
