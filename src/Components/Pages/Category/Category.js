import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummary from '../CourseSummary/CourseSummary';
import LeftSideNav from '../LeftSideNav/LeftSidefNav';

const Category = () => {
    const categoryCourse = useLoaderData();
    return (
        <div>
            <LeftSideNav></LeftSideNav>
            <h2>Amount of courses: {categoryCourse.length}</h2>
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