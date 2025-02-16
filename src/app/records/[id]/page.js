import Record from './Record';

export default async function RecordsPage({ params }) {
  const { id } = await params;
  const api_url = `https://api.openbrewerydb.org/v1/breweries/${id}`;
  const response = await fetch(`${api_url}`);
  const data = await response.json();
  return <Record data={data} />;
}
