import { useSelector } from 'react-redux';

export const useApiLoading = () => {
  return useSelector((state) => {
    const apiState = state.APIQueries;

    if (!apiState) return false;

    const isPendingQuery = Object.values(apiState.queries || {}).some(
      (query) => query?.status === 'pending',
    );

    const isPendingMutation = Object.values(apiState.mutations || {}).some(
      (mutation) => mutation?.status === 'pending',
    );

    return isPendingQuery || isPendingMutation;
  });
};
