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


var App = React.createClass({displayName: 'App',
  render: function() {
    return(
      Header(null)
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

