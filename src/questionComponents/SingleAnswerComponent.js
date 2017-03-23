import React from 'react';
import $ from 'jquery';

class SingleAnswerComponent extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick () {
        $()
    }

    render() {
        return (
        <div className="single_answer_component">
            <h1 className="question">Aici vine intrebarea?</h1>
        <div onClick={this.handleClick} className="radio_button_component">
            <input name="fromprops" type="radio" /><label><label /></label>
            <span>Choose only one of these answers</span>
        </div>
         <div className="radio_button_component">
            <input name="fromprops" type="radio" /><label><label /></label>
            <span>Choose only one of these answers</span>
        </div>
         <div className="radio_button_component">
            <input name="fromprops" type="radio" /><label><label /></label>
            <span>Choose only one of these answers</span>
        </div>
         <div className="radio_button_component">
            <input name="fromprops" type="radio" /><label><label /></label>
            <span>Choose only one of these answers</span>
        </div>
        </div>
        );
    }
}
export default SingleAnswerComponent;