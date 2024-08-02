// Author: Heli Desai
import {getBlogById} from '../services/blogServie';
import {useMutation, useQuery} from "@tanstack/react-query";
import { postComment } from '../services/commentService';

const useBlogDetail = (blogId: string) => {
    const blogDetailQuery = useQuery({
      queryKey: ['blog', blogId],
      queryFn: () => getBlogById(blogId),
    });

    const addCommentMutation = useMutation({
      mutationFn: async (newComment: { name: string; comment: string; ratings: number }) => {
        return await postComment({ blogPostId: blogId, ...newComment });
      }, 
      onSettled: () => {
        blogDetailQuery.refetch();
      }
    });
  
    return {
      blogDetail: blogDetailQuery.data,
      blogDetailLoading: blogDetailQuery.isLoading,
      blogDetailError: blogDetailQuery.error,
      addCommentMutation
    }
  };
  
  export default useBlogDetail;