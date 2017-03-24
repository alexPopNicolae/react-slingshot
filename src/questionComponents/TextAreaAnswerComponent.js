import React from 'react';

class TextAreaAnswerComponent extends React.Component {
    constructor() {
        super();

        this.state = {
            answer:''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
      this.setState({
          answer: e.target.value
      });
    }

    render() {
        return (
            <div className="text_area_answer">
                <h1 className="question">Numeste cinci metode care pot fi folosite pe un array in Javascript</h1>
                <textarea onChange={this.handleChange} className='textarea' />
            </div>
        );
    }
}

export default TextAreaAnswerComponent;