interface CourseCardInfoProps {
    id: string;
    title: string;
    description: string;
    skills: string[] | undefined;
}

export const CourseCardInfo = ({ id, title, description, skills }: CourseCardInfoProps) => {
    return (
        <>
            <div className='px-6 py-4'>
                <div className='font-bold text-xl mb-2'>{title}</div>
                <p className='text-gray-700 text-base'>{description}</p>
            </div>
            <div className='px-6 pt-4 pb-2'>
                {skills?.map((skill) => (
                    <span
                        key={`${id}-${skill}`}
                        className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'
                    >
                        {skill.trim()}
                    </span>
                ))}
            </div>
        </>
    );
};
