'use client';

import { useMenu } from './MenuContext';

interface MenuItemProps {
  labelName: string;
  href?: string;
  current?: boolean;
  onClick?: () => void;
}

export default function MenuItem({ labelName, href, current, onClick }: MenuItemProps) {
  const { close } = useMenu();
  const handleOnclick = () => {
    if(onClick) onClick();
    close()
  }
  return (
    <a
      href={href}
      role="menuitem"
      aria-current={current ? 'page' : undefined}
      onClick={handleOnclick}
      className="px-4 py-2 hover:bg-gray-100"
    >
      {labelName}
    </a>
  );
}