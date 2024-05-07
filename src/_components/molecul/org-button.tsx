'use client';

import { Button } from '@nextui-org/button';
import { Modal, ModalContent } from '@nextui-org/modal';
import { Tooltip } from '@nextui-org/tooltip';
import { useDisclosure } from '@nextui-org/use-disclosure';
import { CreateOrganization } from '@clerk/nextjs';
import { Plus } from 'lucide-react';

import { Text } from '@/_components/atom';

export function OrgButton() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <Tooltip
        placement="right"
        content={<Text size={'small'}>Create Organization</Text>}
      >
        <Button isIconOnly onPress={onOpen} radius="sm" color="primary">
          <Plus size={16} color="#FFFFFF" />
        </Button>
      </Tooltip>
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
    </>
  );
}
