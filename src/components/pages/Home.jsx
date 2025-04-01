import {useGetTopHeadlinesQuery} from "@/store/APIQueries.js";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {setArticles} from "@/store/StorageQueries.js";

export const Home = () => {

    const dispatch = useDispatch();
    const [articlesList, setArticlesList] = useState([]);
    const {isSuccess, data} = useGetTopHeadlinesQuery();

    useEffect(() => {
        if (isSuccess && data) {
            dispatch(setArticles(data?.results))
            setArticlesList(data?.results)
        }
        console.log(JSON.stringify(data))
    }, [data, isSuccess])

    return (
        <div className={'px-20'}>
            {
                articlesList?.map((item, index) => {
                    return (
                        <p key={index}
                           className={'p-3 border-2 m-3 border-primary cursor-pointer rounded-sm shadow-2xl hover:scale-110 transition-all duration-300'}>{item.title}</p>
                    )
                })
            }
        </div>
    )
}
