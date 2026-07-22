import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "./useAxiosPublic";
import useAxiosSecure from "./useAxiosSecure";
import { toast } from "react-toastify";

const useMutationClient = ({
  url,
  method = "post",
  isPrivate = false,
  invalidateKeys = [],
  successMessage = "Action successful!",
  redirectTo,
}) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const client = isPrivate ? useAxiosSecure() : useAxiosPublic();

  return useMutation({
    mutationFn: async ({ data, config }) => {
      if (method === "delete") {
        return await client.delete(url, config);
      }
      return await client[method](url, data, config);
    },

    onSuccess: (res) => {
      const responseData = res?.data;

      // 1. Global Success Feedback
      toast.success(responseData?.message || successMessage);

      // 2. Cache Invalidation
      invalidateKeys.forEach((key) => {
        queryClient.invalidateQueries({ queryKey: key });
      });

      // 3. Navigation
      if (redirectTo) navigate(redirectTo);
    },

    onError: (error) => {
      // Extract error message for the toast
      const msg = error?.response?.data?.message || error.message || "An error occurred";
      toast.error(msg);
    },
  });
};

export default useMutationClient;
