var React = require('react');

About = React.createClass({
  render: function() {
    return (
      <div id="about-view">
        <h1>About</h1>
        <p>Making you richer everyday, dollar by dollar.</p>
        <div className = "header-container">
        <div className = "video-container">
          <video preload = "true" autoplay = "autoplay" loop = "loop" muted>
            <source src = "./../videos/landing.mp4" type = "video/mp4" />
              <source src = "./../videos/landing.webm" type = "video/webm" />
                <source src = "./../videos/landing.ogv" type = "video/ogv" />
          </video>

        </div>
        </div>
      </div>
    );
  }
});

module.exports = About;