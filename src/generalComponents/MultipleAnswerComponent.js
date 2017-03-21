import React from 'react';

class MultipleAnswerComponent extends React.Component {
    
    constructor (props) {
        super (props);
    }

    render () {
        return(
            <div className="multiple_answer_component">
                <div className="posible_answer">
                    <input type="checkbox" />
                     <label>poate sa-si instaleze un browser</label>
                 </div>
                 <div className="posible_answer">
                    <input type="checkbox" />
                     <label>poate sa citeasca o carte de javascript</label>
                 </div>
                 <div className="posible_answer">
                    <input type="checkbox" />
                     <label>poate sa se duca cu oile</label>
                 </div>
                 <div className="posible_answer">
                    <input type="checkbox" />
                     <label>poate sa asculte o manea</label>
                 </div>
            </div>
        );
    }


}

export default MultipleAnswerComponent;