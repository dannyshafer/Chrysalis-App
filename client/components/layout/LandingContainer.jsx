var React = require('react')

var LandingContainer = React.createClass({
  getInitialState: function() {
    return {
      counter: 0,
    }
  },
  componentDidMount: function() {
    this.readUsersFromAPI();
  },
  readUsersFromAPI: function() {
    this.props.readFromAPI(this.props.origin + '/users', function(users){
      this.setState({counter: users});
    }.bind(this));
  },
  render: function(){
    return(
      <h1>{this.state.counter}</h1>
      );
  }
});

module.exports = LandingContainer