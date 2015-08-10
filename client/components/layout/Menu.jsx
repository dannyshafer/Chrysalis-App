var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Menu = React.createClass({
  handleSignOutLink: function() {
    sessionStorage.setItem('jwt','');
    location = '/';
  },

  render: function() {
    if (this.props.signedIn) {
      var signingLink = <li><span onClick={this.handleSignOutLink}>Sign Out</span></li>;
      var userProfileLink = <li><Link to="users">{this.props.currentUser}</Link></li>;
      var userStrategyLink = <li><Link to="strategy">Strategy</Link></li>;
    } else {
      var signingLink = <li><a href={this.props.origin + '/request_token'}>Sign In</a></li>;
    }

    return (
      <div id="menu">
        <span id="menu-link" onClick={this.props.sendMenuClick}><span></span></span>
        <div id="menu-list">
          <div className="pure-menu pure-menu-open">
            <span className="pure-menu-heading">Chrysalis</span>
            <ul>
              {userProfileLink}
              {userStrategyLink}
              <li><Link to="about">About</Link></li>
              {signingLink}
            </ul>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Menu;