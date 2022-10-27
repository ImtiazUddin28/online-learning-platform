import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';


const CourseSummary = ({ course }) => {
    const { _id, title, details, image_url} = course;
    
    return (
        <>
        
        <Card className="mb-5">
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {
                        details.length > 250 ?
                            <>{details.slice(0, 250) + '...'} 
                            <Link to={`/course/${_id}`}>
                    <Button variant="primary">More Details</   Button>
                    </Link>
                 </>
                            :
                            details
                    }
                </Card.Text>
            </Card.Body>
            
        </Card>
    </>
    );
};

export default CourseSummary;
