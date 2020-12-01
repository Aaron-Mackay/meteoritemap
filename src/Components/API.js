import Filters from './Filters';

export const fetchMeteorites = (filter, query, limit) => {
  const parsedQuery =
    filter === 'year' ? `'${query}-01-01T00:00:00.000'` : query;
  const qParams =
    filter && query ? `?${filter}=${parsedQuery}` : '?name=Aachen';
  const limitParams = limit ? `&$limit=${limit}` : '';

  const request = `https://data.nasa.gov/resource/gh4g-9sfh.json${qParams}${limitParams}`;

  return fetch(request)
    .then((res) => res.json())
    .then((data) => data);
};
