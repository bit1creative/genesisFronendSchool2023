const generateRatingStars = (rating: number) => {
    const ratingStars = [];
    const maxRating = 5;
    const fullStarCount = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStarCount; i++) {
        ratingStars.push(
            <svg
                key={i}
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5 text-yellow-400'
                viewBox='0 0 20 20'
                fill='currentColor'
            >
                <path
                    fillRule='evenodd'
                    d='M10 15.585L4.511 19.94l1.356-7.898L.547 7.315l7.527-1.095L10 0l2.926 6.22 7.527 1.095-5.32 5.727 1.356 7.898z'
                    clipRule='evenodd'
                />
            </svg>
        );
    }

    if (hasHalfStar) {
        ratingStars.push(
            <svg
                key='half-star'
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5 text-yellow-400'
                viewBox='0 0 20 20'
                fill='currentColor'
            >
                <path
                    fillRule='evenodd'
                    d='M10 15.585L4.511 19.94l1.356-7.898L.547 7.315l7.527-1.095L10 0l2.926 6.22 7.527 1.095-5.32 5.727 1.356 7.898z'
                    clipRule='evenodd'
                />
            </svg>
        );
    }

    const emptyStarCount = maxRating - rating;
    for (let i = 0; i < emptyStarCount; i++) {
        ratingStars.push(
            <svg
                key={`empty-star-${i}`}
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5 text-gray-400'
                viewBox='0 0 20 20'
                fill='currentColor'
            >
                <path
                    fillRule='evenodd'
                    d='M10 15.585L4.511 19.94l1.356-7.898L.547 7.315l7.527-1.095L10 0l2.926 6.22 7.527 1.095-5.32 5.727 1.356 7.898z'
                    clipRule='evenodd'
                />
            </svg>
        );
    }

    return ratingStars;
};

export const RatingStars = ({ rating }: { rating: number }) => {
    return <div className='flex items-center space-x-2'>{generateRatingStars(rating)}</div>;
};
