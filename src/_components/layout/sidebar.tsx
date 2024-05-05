import { OrgButton, OrgList } from '../molecul';

export function Sidebar() {
  return (
    <aside className="z-1 fixed left-0 flex h-full min-w-16 flex-col gap-4 bg-blue-950 p-3 text-white">
      <OrgList />
      <OrgButton />
    </aside>
  );
}
