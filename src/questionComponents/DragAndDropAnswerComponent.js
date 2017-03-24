import React from 'react';

class DragAndDropComponent extends React.Component {
    constructor() {
        super();
        this.state={};
        this.handleDrag = this.handleDrag.bind(this);
    }

    handleDrag () {
     
    }

    render() {
        return(
            <div className="drag_and_drop_component">
                <h1 className="question">Trage raspunsurile in zona potrivita!</h1>
                <div draggable="true"  onDragStart={this.handleDrag} className="dragable_div">
                    <p>Asta e un div care poate fi tras</p>
                </div>
            </div>
        );
    }
}
export default DragAndDropComponent;