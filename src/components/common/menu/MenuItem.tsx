'use client';

import { useMenu } from './MenuContext';

interface MenuItemProps {
  labelName: string;
  href: string;
  current?: boolean;
}

export default function MenuItem({ labelName, href, current }: MenuItemProps) {
  const { close } = useMenu();
  return (
    <a
      href={href}
      role="menuitem"
      aria-current={current ? 'page' : undefined}
      onClick={close}
      className="px-4 py-2 hover:bg-gray-100"
    >
      {labelName}
    </a>
  );
}