import SummaryClient from './SummaryClient';

export default function SummaryPage({ params }: { params: { id: string } }) {
  return <SummaryClient />;
}

// Generate static params for 50 PRs
export async function generateStaticParams() {
  return Array.from({ length: 50 }, (_, i) => ({
    id: String(i + 1),
  }));
}
