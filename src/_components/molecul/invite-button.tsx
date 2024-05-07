'use client';

import { Button } from '@nextui-org/button';
import { Modal, ModalContent } from '@nextui-org/modal';
import { useDisclosure } from '@nextui-org/use-disclosure';
import { OrganizationProfile } from '@clerk/nextjs';
import { Plus } from 'lucide-react';

export function InviteButton() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      {/* <Tooltip
        placement="bottom"
        content={<Text size={'small'}>Invite member</Text>}
      > */}
      <Button
        onPress={onOpen}
        radius="sm"
        size="sm"
        color="primary"
        startContent={<Plus size={16} color="#FFFFFF" />}
      >
        Invite Member
      </Button>
      {/* </Tooltip> */}
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        classNames={{
          closeButton: 'z-[99] top-[2%] right-[2%]',
        }}
      >
        <ModalContent className="max-h-[600px] max-w-[880px]">
          {() => <OrganizationProfile routing="hash" />}
        </ModalContent>
      </Modal>
    </>
  );
}
