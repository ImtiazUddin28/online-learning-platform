import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummary from '../CourseSummary/CourseSummary';
import LeftSideNav from '../LeftSideNav/LeftSidefNav';

const Category = () => {
    const categoryCourse = useLoaderData();
    return (
        <div className='row'>
            <div className='col-4 m-5'>
                <LeftSideNav></LeftSideNav>
            </div>
            <div className='col'>
            <h2>Number of courses: {categoryCourse.length}</h2>
            {
                
                categoryCourse.map(course =><CourseSummary
                    key={course._id}
                    course={course}
                ></CourseSummary>)
            }
            </div>
        </div>
    );
};

export default Category;