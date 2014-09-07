/** @jsx React.DOM */
// header

var header = React.createClass({displayName: 'header',
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
      React.DOM.header(null)
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

