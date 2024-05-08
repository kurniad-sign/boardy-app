'use client';

import { useOrganization } from '@clerk/nextjs';

import { EmptyOrg } from '@/_components/molecul';

import { BoardList } from './boardlist';

export function Organization({
  params,
}: {
  params: { search?: string; favorites?: string };
}) {
  const { organization } = useOrganization();
  return (
    <>
      {!organization ? (
        <EmptyOrg />
      ) : (
        <BoardList orgId={organization.id} query={params} />
      )}
    </>
  );
}
