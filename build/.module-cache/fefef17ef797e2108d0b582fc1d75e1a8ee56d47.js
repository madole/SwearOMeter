/** @jsx React.DOM */
// header

var Header = React.createClass({displayName: 'Header',
  render: function() {
    var tweetometer = 'TWEET-O-METER';

    return ( 
      React.DOM.p(null, tweetometer) 
      );
  }
});

React.renderComponent(
  Header(null), document.getElementById('content')
);

// input form

// username

// message

// tweets

// footer

