/** @jsx React.DOM */
// header

var UpTop = React.createClass({displayName: 'UpTop',
  render: function() {
    var tweetometer = 'TWEET-O-METER';

    return ( 
      React.DOM.p(null, tweetometer) 
      );
  }
});

React.renderComponent(
  UpTop(null), document.getElementById('content')
);

// input form

// username

// message

// tweets

// footer

