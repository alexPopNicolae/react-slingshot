import React from 'react';
import RadialProgressBar from '../generalComponents/RadialProgressBar';

const QuestionsPage = () => {
    return(
        <div className="questions_page">
            <div className="container_large">
                <div className="inner_container">
                    <h1>Care sunt primele lucruri pe care le face un javascripter?</h1>
                </div>
            </div>
            <div className="test_informations_area">
                <RadialProgressBar/>
            </div>
        </div>
    );
}
export default QuestionsPage;