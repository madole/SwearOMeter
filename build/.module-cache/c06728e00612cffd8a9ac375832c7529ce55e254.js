/**
  * @jsx React.DOM
  */
// header

var header = React.createClass({displayName: 'header',
  render: function() {
    var header = 'TWEET-O-METER';

    return ( React.DOM.h1(null, header) );
  }
});

React.renderComponent(
  React.DOM.header(null), document.getElementById('content')
);

// input form

// username

// message

// tweets

// footer

