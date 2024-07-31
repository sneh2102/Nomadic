import React from 'react';

interface StarRatingProps {
    rating: number;
    onRatingChange: (newRating: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, onRatingChange }) => {
    const handleStarClick = (index: number) => {
        onRatingChange(index + 1);
    };

    return (
        <div className="flex space-x-1">
            {[...Array(5)].map((_, index) => (
                <svg
                    key={index}
                    className={`w-6 h-6 cursor-pointer ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    onClick={() => handleStarClick(index)}
                >
                    <path d="M9.049 2.927C9.231 2.392 9.769 2.392 9.951 2.927L12 8.177l5.316.77c.548.08.766.749.37 1.13l-3.845 3.75.908 5.289c.093.545-.478.959-.958.7L10 16.348l-4.795 2.518c-.48.258-1.051-.155-.958-.7l.908-5.289-3.845-3.75c-.396-.381-.178-1.05.37-1.13L8 8.176l2.049-5.249z" />
                </svg>
            ))}
        </div>
    );
};

export default StarRating;
