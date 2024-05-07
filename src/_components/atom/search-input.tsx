'use client';

import { useRouter } from 'next/navigation';
import { ChangeEvent, useEffect, useState } from 'react';
import { Input } from '@nextui-org/input';
import { SearchIcon } from 'lucide-react';
import qs from 'query-string';
import { useDebounceValue } from 'usehooks-ts';

export function SearchInput() {
  const router = useRouter();
  const [value, setValue] = useState('');
  const debounceValue = useDebounceValue(value, 500);

  const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    const url = qs.stringifyUrl(
      {
        url: '/',
        query: {
          search: debounceValue[0] || undefined,
        },
      },
      { skipEmptyString: true, skipNull: true }
    );

    router.push(url);
  }, [debounceValue, router]);

  return (
    <Input
      placeholder="Search boards"
      className="max-w-[516px]"
      size="sm"
      startContent={<SearchIcon size={16} />}
      value={value}
      onChange={handleChangeSearch}
    />
  );
}
