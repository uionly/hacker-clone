const ROOT_URL = `http://hn.algolia.com/api/v1/search_by_date`;

export const FETCH_NEWS = "FETCH_NEWS";

export function fetchNews(pageNum) {
  const url = `${ROOT_URL}?page=${pageNum}`;
  let newsData = {};
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch.");
      }
      return response.json();
    })
    .then((news) => {
      console.log(news);
      newsData = news.data;
    })
    .catch((err) => {
      console.log(err);
    });

  return {
    type: FETCH_NEWS,
    payload: newsData,
  };
}
