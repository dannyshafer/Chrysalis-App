var React = require('react');
var Reqwest = require('reqwest');
var Slider = require('rc-slider');

var ProfileContainer = React.createClass({
  getInitialState: function() {
    return {
      risk_preference: 0,
      age: 18,
    }
  },
  componentDidMount: function() {
    
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

  updateProfileAPI: function() {
      var data = {
        info: {
          risk_preference: this.state.risk_preference,
          age: this.state.age
        }
      };
      alert('ajaxing')
      this.props.updateProfileAPI('put', JSON.stringify(data), this.props.origin + '/users/profile', function(data) {
        console.log(data)
      }.bind(this));
    },



  render: function(){
    return (
      <div>
        <h1>Your Profile</h1>
        <div className="pure-form pure-form-stacked">
          <form onSubmit={this.updateProfileAPI}>
            <fieldset>
              <legend>Update your profile here</legend>
              <br />
              <label for="risk_preference">Risk Preference: {this.state.risk_preference}</label>
              <br />
              <Slider onChange={this.handleRiskSliderMove} />
              <br />
              <label for="age">Age: {this.state.age}</label>
              <br />
              <Slider min={18} max={100} onChange={this.handleAgeSliderMove} />
              <br />
              <button type="submit" className="pure-button pure-button-primary">Update Profile</button>
            </fieldset>
          </form>
        </div>
      </div>
      );
  }
});

module.exports = ProfileContainer