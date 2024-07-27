import React from 'react';

const CommentList = ({ comments }) => {
    return (
        <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Reviews and Comments</h2>
            {comments.map((comment, index) => (
                <div key={index} className="mb-4 p-4 shadow rounded-lg bg-white">
                    <div className="flex items-center space-x-4">
                        <img src={comment.photo} alt="Profile" className="w-10 h-10 rounded-full" />
                        <div>
                            <p className="text-sm font-medium">
                                {comment.name}{comment.isVerified && <span className="ml-2 text-blue-500">✔️</span>}
                            </p>
                            <p className="text-gray-600 text-sm">{comment.comment}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CommentList;
