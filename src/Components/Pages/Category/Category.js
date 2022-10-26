import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummary from '../CourseSummary/CourseSummary';

const Category = () => {
    const categoryCourse = useLoaderData();
    return (
        <div>
            <h2>This is Category has course: {categoryCourse.length}</h2>
            {
                
                categoryCourse.map(course =><CourseSummary
                    key={course._id}
                    course={course}
                ></CourseSummary>)
            }
        </div>
    );
};

export default Category;