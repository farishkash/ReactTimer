var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');
var CountdownForm = require('CountdownForm');

var Timer = React.createClass({
getInitialState: function(){
  return {count:0, timerStatus: 'stopped'}
},
componentDidUpdate: function(prevProps, prevState) {
    if (this.state.timerStatus !== prevState.timerStatus) {
        switch (this.state.timerStatus) {
            case 'started':
                this.startTimer();
                break;
                case 'stopped':
                this.setState({count: 0});
                case 'paused':
                clearInterval(this.timer)
                this.timer = undefined;
                break;
        }
    }
},
startTimer: function() {
    this.timer = setInterval(() => {

        this.setState({
            count: this.state.count + 1
        });

    }, 1000);
},
componentWillUnmount: function(){
  clearInterval(this.timer);
},
handleSetTimer: function(seconds) {
      this.setState({count: seconds, timerStatus: 'started'});
  },
  handleStatusChange: function(newTimerStatus){
    this.setState({timerStatus: newTimerStatus});
  },

  render: function(){
    var {count, timerStatus} = this.state;
    var renderControlArea = () => {

            return <Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange}/>

    };
  return (
    <div>
      <h1 className="page-title">Timer</h1>
        <Clock totalSeconds={count}/> {renderControlArea()}
    </div>
  );
}
});


module.exports = Timer;
