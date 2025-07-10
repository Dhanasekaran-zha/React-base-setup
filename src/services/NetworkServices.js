import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import ApiConstants from '../constants/ApiConstants';
import { toast } from 'react-toastify';

const baseQuery = fetchBaseQuery({
  baseUrl: ApiConstants.BASE_URL,
  prepareHeaders: (headers) => {
    let token = localStorage.getItem('token');
    headers.set('content-type', 'application/json');
    if (token) {
      headers.set('x-access-token', `JWT ${token}`);
    }
  },
});

const baseQueryWithTransform = async (arg, api, extraOptions) => {
  try {
    const result = await baseQuery(arg, api, extraOptions);
    if (result.error) {
      let errorMessage = 'Something went wrong!';
      if (result.error?.data?.message) {
        errorMessage = result.error.data.message; // Custom API error message
      } else if (result.error?.status === 401) {
        errorMessage = 'Unauthorized! Please log in again.';
      } else if (result.error?.status === 403) {
        errorMessage = 'Forbidden! You don’t have permission.';
      } else if (result.error?.status === 500) {
        errorMessage = 'Server error! Please try again later.';
      }
      toast.error(errorMessage, { position: 'bottom-right' });
      return { error: result.error };
    }
    return { data: result.data };
  } catch (e) {
    console.log(e);
    toast.error(e.message, { position: 'bottom-right' });
  }
};

export const apiBaseQuery = createApi({
  reducerPath: 'APIQueries',
  baseQuery: baseQueryWithTransform,
  refetchOnMountOrArgChange: true,
  keepUnusedDataFor: 0,
  endpoints: () => ({}),
});
