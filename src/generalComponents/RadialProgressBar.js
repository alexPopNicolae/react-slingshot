import React from 'react';
import 'jquery-circle-progress';
import $ from 'jquery';
 

class RadialProgressBar extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            progress: 53
        };

        this.sus = this.sus.bind(this);
        this.jos = this.jos.bind(this);
    }

    componentDidMount() {
        $('#circle').circleProgress({
             value: this.state.progress/100,
             fill:{color:'white'},
             size: 200,
             animation:false
        });
    }

    sus () {
        let self = this;
        this.setState({
            progress:self.state.progress+1
        });

          $('#circle').circleProgress({
             value: this.state.progress/100});
    }

    jos () {
        let self = this;
        this.setState({
            progress:self.state.progress-1
        });

         $('#circle').circleProgress({
             value: this.state.progress/100});
    }

    render () {
        return (
            <div className="progress_bar">
                <div className="progress_container">
                    <div id="circle" className="circle"/>
                    <div className="value">{this.state.progress}%</div>
                </div>
            </div>
        );
    }
}
export default RadialProgressBar;