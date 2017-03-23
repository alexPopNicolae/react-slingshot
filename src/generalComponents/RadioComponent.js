import React from 'react';

class RadioComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state ={};
    }

    render() {
        return (
        <div className="radio_button_component">
            <input name="fromprops" type="radio" /><label><label /></label>
            <span>Choose only one of these answers</span>
        </div>
        );
    }
}
RadioComponent.propTypes = {
    checked:React.PropTypes.bool,
    onChange:React.PropTypes.func
};
export default RadioComponent;