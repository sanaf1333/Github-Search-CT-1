const API_URL = process.env.REACT_APP_API_URL;
export default async function fetchDataFromAPI(
  searchKeyword,
  pageCount,
  pageNumber
) {
  const headers = { Accept: "application/vnd.github.text-match+json" };
  const res = await fetch(
    `${API_URL}${searchKeyword}&per_page=${pageCount}&page=${pageNumber}`,
    { headers }
  );
  const data = await res.json();
  return data;
}
