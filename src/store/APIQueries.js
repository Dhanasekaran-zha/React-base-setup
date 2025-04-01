import {apiBaseQuery} from "../services/NetworkServices.js";
import ApiConstants from "../constants/ApiConstants.js";

export const APIQueries = apiBaseQuery.injectEndpoints({
    endpoints: (build) => ({
        getTopHeadlines: build.query({
            query: () => ({
                url: ApiConstants.TOP_HEADLINES,
            }),
        }),
    })
})
export const {useGetTopHeadlinesQuery} = APIQueries
