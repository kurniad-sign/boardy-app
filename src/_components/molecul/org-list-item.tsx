'use client';

import Image from 'next/image';
import { Tooltip } from '@nextui-org/react';
import { useOrganization, useOrganizationList } from '@clerk/nextjs';

import { cn } from '@/_utils/helpers';

import { Text } from '../atom';

interface OrgListItemProps {
  id: string;
  name: string;
  imageUrl: string;
}

export function OrgListItem(props: OrgListItemProps) {
  const { id, name, imageUrl } = props;

  const { organization } = useOrganization();
  const { setActive } = useOrganizationList();

  const isActiveOrg = organization?.id === id;

  const onClickOrg = () => {
    if (!isActiveOrg) return null;
    setActive!({ organization: id });
  };

  return (
    <div className="relative aspect-square">
      <Tooltip placement="right" content={<Text size={'small'}>{name}</Text>}>
        <Image
          fill
          alt={name}
          src={imageUrl}
          className={cn(
            'cursor-pointer rounded-md opacity-75 transition hover:opacity-100',
            isActiveOrg && 'opacity-100'
          )}
          onClick={onClickOrg}
        />
      </Tooltip>
    </div>
  );
}
