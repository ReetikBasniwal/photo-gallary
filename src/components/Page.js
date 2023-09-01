import React, { useCallback, useEffect, useState } from 'react'
import PageItem from './PageItem'
import Spinner from './Spinner'
import InfiniteScroll from 'react-infinite-scroll-component';

export default function Page() {
  const [page, setPage] = useState(1);
  const [articles, setArticles] = useState([]);

  const fetchArticles = useCallback(async () => {
    const url = `https://picsum.photos/v2/list?page=${page}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    if (parsedData && parsedData.length) {
      setArticles(parsedData);
      console.log(parsedData.length);
    };
  }, [page]);

  useEffect(() => {
    fetchArticles();
  }, [])
  
  const fetchMoreData = async () => {
    const nextPage = page + 1; // Increment the page value
    const url = `https://picsum.photos/v2/list?page=${nextPage}`;
    setPage(nextPage);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData));
    console.log(parsedData.length);
    console.log(parsedData);
  }

  return (
    <>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== 90}
        loader={<Spinner />}
      >
        {articles.length > 0 && articles.map((article) => {
          return <PageItem key={article.id} item={article} />
        })}
      </InfiniteScroll>
    </>
  )
}
