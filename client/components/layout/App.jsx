var React = require('react');
var Reqwest = require('reqwest');
var LandingContainer = require('./LandingContainer.jsx');
var Menu = require('./Menu.jsx');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var App = React.createClass({
  getDefaultProps: function() {
    //changed this to prevent crazy reloading
    return {origin: 'http://localhost:3000'};
  },
  getInitialState: function() {
    return {showMenu: false};
  },
  handleMenuClick: function() {
    this.setState({showMenu: !this.state.showMenu});
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

  writeToAPI: function(method, url, successFunction) {
    Reqwest({
      url: url,
      type: 'json',
      method: method,
      contentType: 'application/json',
      headers: {'Authorization': sessionStorage.getItem('jwt')},
      success: successFunction,
      error: function(error) {
        console.error(url, error['response']);
        location = '/';
      }
    });
  },

  render: function () {
    var menu = this.state.showMenu ? 'show-menu' : 'hide-menu';
    return (
      <div id="app" className={menu}>
         <Menu sendMenuClick={this.handleMenuClick} />
         <div id="content">
           <RouteHandler origin={this.props.origin} readFromAPI={this.readFromAPI} addUserAPI={this.writeToAPI}/>
         </div>
       </div>
    );
  },
});

module.exports = App;