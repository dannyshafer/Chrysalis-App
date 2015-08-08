var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Menu = React.createClass({
  render: function() {
    return (
      <div id="menu">
        <span id="menu-link" onClick={this.props.sendMenuClick}><span></span></span>
        <div id="menu-list">
          <div className="pure-menu pure-menu-open">
            <span className="pure-menu-heading">Chrysalis</span>
            <ul>
              <li><Link to="users">Users</Link></li>
              <li><Link to="about">About</Link></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Menu;