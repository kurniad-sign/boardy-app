import Image from 'next/image';
import React from 'react';

import { Heading, Text } from '../atom';

interface EmptyProps {
  imageSrc: string;
  title?: string;
  content?: string;
  width?: number;
  height?: number;
  additionalComponent?: React.ReactNode;
}

export function Empty(props: EmptyProps) {
  const { additionalComponent, content, imageSrc, title, width, height } =
    props;
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <Image
        src={imageSrc}
        width={width}
        height={height}
        alt="Empty state Image"
      />
      {title && (
        <Heading component="h2" variant={'title-4'} className="mt-2">
          {title}
        </Heading>
      )}
      {content && (
        <Text className="mt-2 text-foreground-500" size={'small'}>
          {content}
        </Text>
      )}
      {additionalComponent && additionalComponent}
    </div>
  );
}
