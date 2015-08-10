var React = require('react');
var Router = require('react-router');
var App = require('../components/layout/App.jsx');
var ProfileContainer = require('../components/layout/Profile/ProfileContainer.jsx');
var About = require('../components/static/About.jsx');
var Strategy = require('../components/layout/Strategy.jsx')
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var Routes = Router.Routes;



module.exports = (
	  <Route name="app" path="/" handler={App}>
	    <DefaultRoute name="about" handler={About} />
	    <Route name="users" path="users" handler={ProfileContainer} />
	    <Route name="strategy" path="strategy" handler={Strategy} />


	  </Route>
);