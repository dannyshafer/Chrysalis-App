var React = require('react');
var Router = require('react-router');
var App = require('../components/layout/App.jsx');
var ProfileContainer = require('../components/layout/Profile/ProfileContainer.jsx');
var About = require('../components/static/About.jsx');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

module.exports = (
  <Route name="app" path="/" handler={App}>
    <DefaultRoute name="about" handler={About} />
    <Route name="users" handler={ProfileContainer} />
  </Route>
);