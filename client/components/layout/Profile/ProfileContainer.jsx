var React = require('react');
var Reqwest = require('reqwest');
var Slider = require('rc-slider');
var App = require('../../App/profile.js')

var ProfileContainer = React.createClass({
  getInitialState: function() {
    return {
      risk_preference: 0,
      age: 0,
      message: null,
    }
  },
  componentDidMount: function() {
    this.readProfileInfoFromAPI();
  },

  readProfileInfoFromAPI: function () {
    this.props.readFromAPI(this.props.origin + '/users/profile', function(data){
      this.setState({
        risk_preference: data.risk_preference,
        age: data.age,
      });
    }.bind(this));
  },

  handleRiskSliderMove: function (value) {
    this.setState({
      risk_preference: value
    });
  },

  handleAgeSliderMove: function (value) {
    this.setState({
      age: value
    });
  },

  updateProfileAPI: function(e) {
    e.preventDefault();
    var data = {
      info: {
        risk_preference: this.state.risk_preference,
        age: this.state.age
      }
    };
    alert('Updating your profile...')
    this.props.updateProfileAPI('put', JSON.stringify(data), this.props.origin + '/users/profile', function(data) {
      this.setState({
        message: "Profile Updated!"
      })
    }.bind(this));
  },

  render: function(){
    if (this.state.age != 0) {
      return (
        <div>
          <h1>Your Profile</h1>
          <div className="pure-form pure-form-stacked">
            <form onSubmit={this.updateProfileAPI}>
              <fieldset>
                <legend>Update your profile here</legend>
                {this.state.message}
                <br />
                <label for="risk_preference">Risk Preference: {this.state.risk_preference}</label>
                <br />
                <Slider defaultValue={this.state.risk_preference} min={0} max={100} onChange={this.handleRiskSliderMove} />
                <br />
                <label for="age">Age: {this.state.age}</label>
                <br />
                <Slider defaultValue={this.state.age} min={18} max={100} onChange={this.handleAgeSliderMove} />
                <br />
                <button type="submit" className="pure-button pure-button-primary">Update Profile</button>
              </fieldset>
            </form>
          </div>
        </div>
      );
    }
    return (
      <div>
        <h1>Your Profile</h1>
        <h3>Loading...</h3>
      </div>
    );
  },
});

module.exports = ProfileContainer