import React, {PropTypes} from 'react';
import CheckBox from '../generalComponents/CheckBoxComponent';
/**
 * This is now a simple component which wili be modified in the future
 * so that it will map the checkbox base on the object received from the 
 * backend.
 */
class MultipleAnswerComponent extends React.Component {
    
    constructor (props) {
        super (props);
    }

    render () {
        return(
            <div className="multiple_answer_component">
                <h1 className="question">Ce este scopul atunci cand vine vorba de Javascript?</h1>
                <CheckBox />
                <CheckBox />
                <CheckBox />
                <CheckBox />
                <CheckBox />
            </div>
        );
    }


}
MultipleAnswerComponent.propTypes = {
    questionContent: PropTypes.object.isRequired
};

export default MultipleAnswerComponent;