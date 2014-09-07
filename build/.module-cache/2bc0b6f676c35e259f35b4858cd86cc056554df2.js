/**
  * @jsx React.DOM
  */
// header

var header = React.createClass({displayName: 'header',
  render: function() {
    var _header = 'TWEET-O-METER';

    return ( React.DOM.h1({id: "header"}, _header) );
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

