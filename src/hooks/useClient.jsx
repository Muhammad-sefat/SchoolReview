import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAxiosSecure from "./useAxiosSecure";

const useClient = ({
  queryKey,
  url,
  isPrivate = false,
  params,
  enabled = true,
}) => {
  const axiosClient = isPrivate ? useAxiosSecure() : useAxiosPublic();

  const { data, isLoading, isFetching, isError, error, refetch } = useQuery({
    queryKey: [...queryKey, params],
    enabled,
    retry: 1,

    queryFn: async () => {
      const res = await axiosClient.get(url, { params });
      return res.data;
    },
  });

  return {
    data,
    isLoading,
    isFetching,
    isError,
    error,
    refetch,
  };
};

export default useClient;
