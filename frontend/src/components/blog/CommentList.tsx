import React from 'react';
import { format } from 'date-fns';
import { useComments } from '../../hooks/useComments';

const CommentList: React.FC<{ blogPostId: string }> = ({ blogPostId }) => {
    const { data: comments = [], isLoading, error } = useComments(blogPostId);

    if (isLoading) return <p>Loading comments...</p>;
    if (error) return <p>Error loading comments: {error.message}</p>;

    return (
        <div className="mt-8 mx-20 mx-auto">
            <h2 className="text-2xl font-bold mb-6">Reviews and Comments</h2>
            {comments.length === 0 ? (
                <p className="text-gray-500">No comments yet. Be the first to comment!</p>
            ) : (
                comments.map((comment, index) => (
                    <div key={index} className="mb-6 p-4 shadow-lg rounded-lg bg-white">
                        <div className="flex items-center space-x-4 mb-2">
                            <div>
                                <p className="text-lg font-semibold">
                                    {comment.name || 'Anonymous'}
                                </p>
                                <p className="text-gray-400 text-sm">
                                    {format(new Date(comment.createdAt), 'PPP')}
                                </p>
                            </div>
                        </div>
                        <p className="text-gray-800">{comment.comment}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default CommentList;
