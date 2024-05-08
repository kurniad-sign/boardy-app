'use client';

import { Button } from '@nextui-org/react';

import { Empty } from '@/_components/molecul';

interface BoardListProps {
  orgId: string;
  query: {
    search?: string;
    favorites?: string;
  };
}

export function BoardList(props: BoardListProps) {
  const { orgId, query } = props;

  const data = [];

  if (!data?.length && query.search) {
    return (
      <Empty
        imageSrc="/empty-search.svg"
        title="No Results Found!"
        content="Try searching for something else"
        width={140}
        height={140}
      />
    );
  }

  if (!data?.length && query.favorites) {
    return (
      <Empty
        imageSrc="/empty-favorites.svg"
        title="No Favorite Boards!"
        content="Try favoriting board"
        width={140}
        height={140}
      />
    );
  }

  if (!data?.length) {
    return (
      <Empty
        imageSrc="/empty-boards.svg"
        title="Create your first board!"
        content="Start by creating board for your organization"
        width={140}
        height={140}
        additionalComponent={
          <Button color="primary" size="lg" className="mt-6">
            Create Board
          </Button>
        }
      />
    );
  }

  return <div>{JSON.stringify(query)}</div>;
}
