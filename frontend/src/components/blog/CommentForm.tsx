import React, { useState } from 'react';
import StarRating from './StarRating';
import { useComments } from '../../hooks/useComments';

const CommentForm: React.FC<{ blogPostId: string }> = ({ blogPostId }) => {
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const [rating, setRating] = useState(0);
    const { addComment } = useComments(blogPostId);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!blogPostId) {
            console.error("blogPostId is required");
            return;
        }
        const newComment = { blogPostId, name, comment };
        try {
            await addComment(newComment);
            setName('');
            setComment('');
            setRating(0);
        } catch (error) {
            console.error("Failed to add comment:", error);
        }
    };

    return (
        <form className="max-w-lg mx-auto bg-white p-6 shadow-md rounded-md" onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold mb-4">Leave a Comment</h2>
            <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label htmlFor="comment" className="block text-gray-700 font-bold mb-2">
                    Comment
                </label>
                <textarea
                    id="comment"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                ></textarea>
            </div>
            <div className="mb-4">
                <label htmlFor="rating" className="block text-gray-700 font-bold mb-2">
                    Rating
                </label>
                <StarRating rating={rating} onRatingChange={setRating} />
            </div>
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
                Submit
            </button>
        </form>
    );
};

export default CommentForm;
