/** @jsx React.DOM */
// header

var Header = React.createClass({displayName: 'Header',
  render: function() {
    var tweetometer = 'TWEET-O-METER';
    return ( 
      React.DOM.span(null, React.DOM.h1(null, tweetometer), " ", React.DOM.hr(null))
      );
  }
});

var InputForm = React.createClass({displayName: 'InputForm',
  render: function() {
    var placeholder = '@username';
    var buttonText = 'Submit';

    return(
        React.DOM.span(null, React.DOM.input({type: "text", placeholder: placeholder}), React.DOM.input({type: "button", value: buttonText}))
      )
  }
});

var Footer = React.createClass({displayName: 'Footer',
  render: function() {
    var myName = 'Andrew McDowell';
    var myGithub = 'http://github.com/madole';
    var myTwitter = 'http://twitter.com/madole';

    return (
      React.DOM.span(null, 
        React.DOM.a({href: myTwitter}, 
          React.DOM.img({src: "images/twitter.png", className: "twittericon", alt: "twitter"})
        ), 
        React.DOM.span(null, "Created by ", React.DOM.a({href: myGithub}, myName))
      )
    )
  }
});


var App = React.createClass({displayName: 'App',
  render: function() {
    return(
      React.DOM.div(null, 
      Header(null), 
      InputForm(null), 
      Footer(null)
      )
    )
  }
});

React.renderComponent(
  App(null), document.getElementById('content')
);

// input form

// username

// message

// tweets

// footer

