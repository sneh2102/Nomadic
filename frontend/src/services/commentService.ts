import axios from 'axios';

export const fetchComments = async (blogPostId: string) => {
    const response = await axios.get(`/api/v1/posts/${blogPostId}/comments`);
    return response.data;
};

export const postComment = async (comment: { blogPostId: string; name: string; comment: string }) => {
    const response = await axios.post(`/api/v1/comments/`, comment);
    return response.data;
};
