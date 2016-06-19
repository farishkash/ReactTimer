var React = require('react');
var Navigation = require('Navigation');
var Timer = require('Timer');
var Countdown = require('Countdown');

var Main = (props) => {
    return (
        <div>
      <Navigation />
                <div className="row">
                  <p> Main JSX Rendered </p>
                    {props.children}
                </div>
              </div>

    );
}

module.exports = Main;
