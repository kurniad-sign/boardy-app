'use client';

import Image from 'next/image';
import NextLink from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Button } from '@nextui-org/button';
import { Link } from '@nextui-org/link';
import { OrganizationSwitcher } from '@clerk/nextjs';
import { LayoutDashboard, Star } from 'lucide-react';

import { Text } from '../atom';

export function OrgSidebar() {
  const searchParams = useSearchParams();
  const favorites = searchParams.get('favorites');

  return (
    <div className="hidden w-[206px] flex-col space-y-6 px-5 pt-5 lg:flex">
      <Link href="/" className="text-current">
        <div className="flex items-center gap-x-2">
          <Image alt="Logo image" src={'/logo.svg'} height={60} width={60} />
          <Text component="span" size={'xlarge'} weight={'semibold'}>
            Boardy
          </Text>
        </div>
      </Link>
      <OrganizationSwitcher
        hidePersonal
        appearance={{
          elements: {
            rootBox: {
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
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
      <div className="w-full space-y-1">
        <NextLink href={'/'} passHref legacyBehavior>
          <Button
            fullWidth
            variant={!favorites ? 'solid' : 'light'}
            startContent={<LayoutDashboard size={16} />}
            className="justify-start"
          >
            Team Boards
          </Button>
        </NextLink>
        <NextLink
          href={{
            pathname: '/',
            query: { favorites: true },
          }}
          passHref
          legacyBehavior
        >
          <Button
            fullWidth
            variant={favorites ? 'solid' : 'light'}
            startContent={<Star size={16} />}
            className="justify-start"
          >
            Favorite Boards
          </Button>
        </NextLink>
      </div>
    </div>
  );
}
