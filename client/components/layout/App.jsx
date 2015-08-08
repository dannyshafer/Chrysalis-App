var React = require('react');
var Reqwest = require('reqwest');
var LandingContainer = require('./LandingContainer.jsx')

var App = React.createClass({
  getDefaultProps: function() {
    //changed this to prevent crazy reloading
    return {origin: 'http://localhost:3000'};
  },
  readFromAPI: function(url, successFunction) {
    Reqwest({
      url: url,
      type: 'json',
      method: 'get',
      contentType: 'application/json',
      success: successFunction,
      error: function(error) {
        console.error(url, error['response']);
        location = '/';
      }
    });
  },
  render: function () {
    return (
      <div>
        <h1>Chrysalis: Prepare to make some money.</h1>
        <LandingContainer origin={this.props.origin} readFromAPI={this.readFromAPI}/>
      </div>
    );
  },
});

module.exports = App;