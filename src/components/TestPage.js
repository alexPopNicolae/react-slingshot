import React from 'react';
import RadialProgressBar from '../generalComponents/RadialProgressBar';
import MultipleAnswerComponent from '../questionComponents/MultipleAnswerComponent';
import SingleAnswerComponent from '../questionComponents/SingleAnswerComponent';

const TestPage = () => {
    return (
        <div className="test_page">
            <h1>Test Page for the applications</h1>
            <div className="component_item">
                <h1>Progress Bar Component</h1>
                <RadialProgressBar />
            </div>
            <div className="component_item left">
                <h1>Multiple answer question component</h1>
                <p>This is a a component used for multiple answers</p>
                <MultipleAnswerComponent
                questionContent = {{}}
                />
            </div>
            <div className="component_item">
                <h1>Single Answer Component</h1>
                <p>This is a component used for single asnwers</p>
                <SingleAnswerComponent />
            </div>
        </div>
    );
};
export default TestPage;