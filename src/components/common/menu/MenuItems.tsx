'use client';

import { ReactNode } from 'react';

interface MenuItemsProps {
  children: ReactNode;
}

export default function MenuItems({ children }: MenuItemsProps) {
  return <div className="flex flex-col justify-end">{children}</div>;
}