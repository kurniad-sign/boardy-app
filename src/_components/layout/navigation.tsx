'use client';

import { Navbar, NavbarContent, NavbarItem } from '@nextui-org/react';
import { UserButton } from '@clerk/nextjs';

export function Navigation() {
  return (
    <Navbar maxWidth="full" className="bg-green-600">
      <NavbarContent className="!items-center !justify-between">
        <NavbarItem className="flex-1 bg-yellow-600">Search</NavbarItem>
        <NavbarItem className="leading-none">
          <UserButton />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
