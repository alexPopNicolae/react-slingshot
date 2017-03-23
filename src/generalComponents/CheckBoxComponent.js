import React from 'react';

class CheckBoxComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            checked:false,
            questionText:'Scopul este o functie'
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick () {
       this.setState({
           checked:!this.state.checked
       });
    }

    render() {
        return (
             <div className="checkbox_component">
                     <input type="checkbox" checked={this.state.checked} /><label onClick={this.handleClick} />
                    <span>{this.state.questionText}</span>
            </div>     
        );
    }
}
export default CheckBoxComponent;