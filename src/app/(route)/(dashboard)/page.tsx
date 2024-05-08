import { Organization } from './_components/organization';

interface DashboardPageProps {
  searchParams: {
    search?: string;
    favorites?: string;
  };
}

export default function DashboardPage(props: DashboardPageProps) {
  const { searchParams } = props;

  return (
    <div className="h-[calc(100%-4rem)]">
      <Organization params={searchParams} />
    </div>
  );
}
