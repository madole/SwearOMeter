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

    return(
        React.DOM.span(null, React.DOM.input({type: "text", placeholder: placeholder}))
      )
  }
});


var App = React.createClass({displayName: 'App',
  render: function() {
    return(
      React.DOM.div(null, 
      Header(null), 
      InputForm(null)
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

