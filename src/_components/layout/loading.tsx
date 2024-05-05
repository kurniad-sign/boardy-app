import Image from 'next/image';

export function LoadingAuth() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <Image
        src="/logo.svg"
        alt="Loading indicator"
        width={120}
        height={120}
        className="animate-pulse duration-700"
      />
    </div>
  );
}
