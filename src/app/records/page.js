import Records from './Records';
import { RECORDS_PAGE_SIZE } from '../../constants';

export default async function RecordsPage({ searchParams }) {
  const { page, search } = await searchParams;
  let api_url = '';
  let data = [];
  let totalCount = 0;
  if (search) {
    api_url = `https://api.openbrewerydb.org/v1/breweries/search?query=${search}`;
    const response = await fetch(`${api_url}&page=${page}&per_page=${RECORDS_PAGE_SIZE}`);
    data = await response.json();
    const totalCountResponse = await fetch(api_url);
    const totalCountData = await totalCountResponse.json();
    totalCount = totalCountData.length;
  } else {
    api_url = `https://api.openbrewerydb.org/v1/breweries/?page=${page}&per_page=${RECORDS_PAGE_SIZE}`;
    const response = await fetch(`${api_url}&page=${page}&per_page=${RECORDS_PAGE_SIZE}`);
    data = await response.json();
    const totalCountResponse = await fetch('https://api.openbrewerydb.org/v1/breweries/meta');
    const totalCountData = await totalCountResponse.json();
    totalCount = totalCountData.total;
  }
  return <Records data={data} page={page} total={totalCount} />;
}
