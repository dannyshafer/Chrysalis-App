var React = require('react');
var Reqwest = require('reqwest');
var Slider = require('rc-slider');

function onChange(v){
  console.log(v);
}


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

  writeBlabToAPI: function() {
      this.props.addUserAPI('post', this.props.origin + '/users', function(data) {

        this.setState({counter: data});
      }.bind(this));
    },


  render: function(){
    return(
      <div>
        <button onClick={this.writeBlabToAPI}>Add User</button>
        <h1>{this.state.counter}</h1>
        <Slider onChange={onChange}/>
      </div>
      );
  }
});

module.exports = LandingContainer