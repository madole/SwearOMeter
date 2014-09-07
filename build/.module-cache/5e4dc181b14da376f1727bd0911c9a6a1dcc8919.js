/**
  * @jsx React.DOM
  */
// header

var header = React.createClass({displayName: 'header',
  render: function() {
    var tweetometer = 'TWEET-O-METER';

    return ( React.DOM.div({id: "head"}, 'tweetometer') );
  }
});

React.renderComponent(
  React.DOM.header('ajdkjashdasjk'), document.getElementById('content')
);

// input form

// username

// message

// tweets

// footer

