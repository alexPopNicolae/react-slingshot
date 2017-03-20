import React from 'react';
import RadialProgressBar from '../generalComponents/RadialProgressBar';

const TestPage = () => {
    return (
        <div className="test_page">
            <h1>Test Page for the applications</h1>
            <div className="component_item">
                <h1>Progress Bar Component</h1>
                <RadialProgressBar />
            </div>
            <div className="component_item left">
                <p>This is another component</p>
                <div className="line"></div>
            </div>
        </div>
    );
};
export default TestPage;