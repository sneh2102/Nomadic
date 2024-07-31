import {getBlogById} from '../services/blogServie';
import {useQuery} from "@tanstack/react-query";

const useBlogDetail = (blogId: string) => {
    const blogDetailQuery = useQuery({
      queryKey: ['blog', blogId],
      queryFn: () => getBlogById(blogId),
    });
  
    return {
      blogDetail: blogDetailQuery.data,
      blogDetailLoading: blogDetailQuery.isLoading,
      blogDetailError: blogDetailQuery.error
    }
  };
  
  export default useBlogDetail;