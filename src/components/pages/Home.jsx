import { useGetTopHeadlinesQuery } from '@/store/APIQueries.js';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setArticles } from '@/store/StorageQueries.js';

export const Home = () => {
  const dispatch = useDispatch();
  const [articlesList, setArticlesList] = useState([]);
  const { isSuccess, data } = useGetTopHeadlinesQuery();

  useEffect(() => {
    if (isSuccess && data) {
      dispatch(setArticles(data?.results));
      setArticlesList(data?.results);
    }
    console.log(JSON.stringify(data));
  }, [data, isSuccess]);

  return (
    <div className={'px-20'}>
      {articlesList?.map((item, index) => {
        return (
          <p
            key={index}
            className={
              'border-primary m-3 cursor-pointer rounded-sm border-2 p-3 shadow-2xl transition-all duration-300 hover:scale-110'
            }
          >
            {item.title}
          </p>
        );
      })}
    </div>
  );
};
