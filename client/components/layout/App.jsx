var React = require('react');
var Reqwest = require('reqwest');
var Menu = require('./Menu.jsx');
var Router = require('react-router');
var Uri = require('jsuri');
var RouteHandler = Router.RouteHandler;

var App = React.createClass({
  getDefaultProps: function() {
      return {origin: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : ''};
    },
  getInitialState: function() {
    return {
      showMenu: false,
      signedIn: false, 
      currentUser: {handle: ''},
    };
  },
  componentWillMount: function() {
      var jwt = new Uri(location.search).getQueryParamValue('jwt');
      if (!!jwt) {sessionStorage.setItem('jwt', jwt);}
  },
  componentDidMount: function() {
      if (!!sessionStorage.getItem('jwt')) {this.currentUserFromAPI();}
  },
  currentUserFromAPI: function() {
      this.readFromAPI(this.props.origin + '/current_user', function(user) {
        this.setState({signedIn: true, currentUser: user});
      }.bind(this));
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
      headers: {'Authorization': sessionStorage.getItem('jwt')},
      success: successFunction,
      error: function(error) {
        console.error(url, error['response']);
        location = '/';
      }
    });
  },

  writeToAPI: function(method, data, url, successFunction) {
    Reqwest({
      url: url,
      type: 'json',
      data: data,
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
         <Menu origin={this.props.origin} sendMenuClick={this.handleMenuClick} signedIn={this.state.signedIn} currentUser={this.state.currentUser}/>
         <div id="content">
           <RouteHandler origin={this.props.origin} readFromAPI={this.readFromAPI} updateProfileAPI={this.writeToAPI} signedIn={this.state.signedIn} currentUser={this.state.currentUser}/>
         </div>
       </div>
    );
  },
});

module.exports = App;