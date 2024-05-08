'use client';

import Image from 'next/image';
import { Button } from '@nextui-org/button';
import { Modal, ModalContent, useDisclosure } from '@nextui-org/modal';
import { CreateOrganization } from '@clerk/nextjs';

import { Heading, Text } from '../atom';

export function EmptyOrg() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="flex h-full flex-col items-center justify-center">
      <Image
        src={'/elements.svg'}
        alt="Empty organization"
        width={200}
        height={200}
      />
      <Heading component="h2" variant={'title-4'} className="mt-6">
        Welcome Board
      </Heading>
      <Text className="mt-2 text-foreground-500" size={'small'}>
        Create an organization to get started
      </Text>
      <div className="mt-6">
        <Button onPress={onOpen} radius="sm" color="primary">
          Create organization
        </Button>
      </div>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        classNames={{
          base: 'w-fit',
          closeButton: 'z-[99] top-[2%] right-[2%]',
        }}
      >
        <ModalContent>
          {() => <CreateOrganization routing="hash" />}
        </ModalContent>
      </Modal>
    </div>
  );
}
