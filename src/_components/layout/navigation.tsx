'use client';

import { Navbar, NavbarContent, NavbarItem } from '@nextui-org/react';
import {
  OrganizationSwitcher,
  useOrganization,
  UserButton,
} from '@clerk/nextjs';

import { SearchInput } from '../atom';
import { InviteButton } from '../molecul';

export function Navigation() {
  const { organization } = useOrganization();

  return (
    <Navbar maxWidth="full">
      <NavbarContent className="!items-center !justify-between">
        <NavbarItem className="hidden lg:flex lg:flex-1">
          <SearchInput />
        </NavbarItem>
        <NavbarItem className="block flex-1 lg:hidden">
          <OrganizationSwitcher
            hidePersonal
            appearance={{
              elements: {
                rootBox: {
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                  maxWidth: '376px',
                },
                organizationSwitcherTrigger: {
                  padding: 6,
                  width: '100%',
                  borderRadius: 8,
                  border: '1px solid #E5E7EB',
                  justifyContent: 'space-between',
                  backgroundColor: 'white',
                },
              },
            }}
          />
        </NavbarItem>
        <NavbarItem className="flex items-center gap-4 leading-none">
          {organization && <InviteButton />}
          <UserButton />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
