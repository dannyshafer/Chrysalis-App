var React = require('react');
var Reqwest = require('reqwest');
var Slider = require('rc-slider');

var ProfileContainer = React.createClass({
  getInitialState: function() {
    return {
      counter: 0,
    }
  },
  componentDidMount: function() {

  },

  render: function(){
    return(
      <div>
        <h1>Your Profile</h1>
        <h3>Update your personal information here</h3>
        
      </div>
      );
  }
});

module.exports = ProfileContainer