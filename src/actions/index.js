const ROOT_URL = `https://hn.algolia.com/api/v1/search_by_date`;

export const FETCH_NEWS = "FETCH_NEWS";
export function fetchNewsSuccess(news) {
  return {
    type: FETCH_NEWS,
    payload: news,
  };
}
export function fetchNewsFailure(news) {
  return {
    type: FETCH_NEWS,
    payload: news,
  };
}
export function fetchNews(pageNum) {
  return (dispatch) => {
    const url = `${ROOT_URL}?tags=story&page=${pageNum}`;
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch.");
        }
        return response.json();
      })
      .then((news) => {
        dispatch(fetchNewsSuccess(news));
      })
      .catch((err) => {
        dispatch(fetchNewsFailure());
      });
  };
}
