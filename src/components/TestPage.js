import React from 'react';
import RadialProgressBar from '../generalComponents/RadialProgressBar';
import MultipleAnswerComponent from '../questionComponents/MultipleAnswerComponent';
import SingleAnswerComponent from '../questionComponents/SingleAnswerComponent';
import TextAreaAnswerComponent from '../questionComponents/TextAreaAnswerComponent';
import DragAndDropComponent from '../questionComponents/DragAndDropAnswerComponent';

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
              <div className="component_item left">
                  <h1>Text Area Component</h1>
                  <p>Component used for a single answer with writing a text.</p>
                  <TextAreaAnswerComponent />
              </div>

                <div className="component_item">
                  <h1>Drag And Drop Component</h1>
                  <p>Component used for dragging right answer to the right places.</p>
                  <DragAndDropComponent />
              </div>
        </div>
    );
};
export default TestPage;