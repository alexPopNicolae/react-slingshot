import React from 'react';
import RadialProgressBar from '../generalComponents/RadialProgressBar';
import MultipleAnswerComponent from '../generalComponents/MultipleAnswerComponent';

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
                <MultipleAnswerComponent />
            </div>
        </div>
    );
};
export default TestPage;