import React, { useState } from 'react';

const CommentForm = ({ addComment }) => {
    const [commentData, setCommentData] = useState({ name: '', comment: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCommentData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (commentData.name && commentData.comment) {
            addComment(commentData);
            setCommentData({ name: '', comment: '' });  // Reset form after submission
        } else {
            alert('Please fill in both fields.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mt-6">
            <div className="mb-4">
                <input
                    type="text"
                    name="name"
                    value={commentData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    required
                    className="px-4 py-2 border rounded-md w-full focus:outline-none focus:border-blue-500"
                />
            </div>
            <div className="mb-4">
                <textarea
                    name="comment"
                    value={commentData.comment}
                    onChange={handleInputChange}
                    placeholder="Your Comment"
                    required
                    className="px-4 py-2 border rounded-md w-full focus:outline-none focus:border-blue-500"
                    rows="4"
                ></textarea>
            </div>
            <button type="submit" className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                Submit
            </button>
        </form>
    );
};

export default CommentForm;
