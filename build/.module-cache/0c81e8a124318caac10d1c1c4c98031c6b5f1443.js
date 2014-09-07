/** @jsx React.DOM */
// header

var Header = React.createClass({displayName: 'Header',
  render: function() {
    var tweetometer = ['TWEET-',React.DOM.span({className: "blue"}, "O"), '-METER'];
    return ( 
      React.DOM.span(null, React.DOM.h1({id: "title"}, tweetometer), " ", React.DOM.hr(null))
      );
  }
});

var InputForm = React.createClass({displayName: 'InputForm',
  render: function() {
    var placeholder = '@username';
    var src = 'images/submit.gif';

    return(
        React.DOM.div({id: "form"}, 
          React.DOM.input({id: "username", type: "text", placeholder: placeholder}), 
          React.DOM.input({type: "image", id: "submit", src: src})
        )
      )
  }
});


var Footer = React.createClass({displayName: 'Footer',
  render: function() {
    var myName = 'Andrew McDowell';
    var myGithub = 'http://github.com/madole';
    var myTwitter = 'http://twitter.com/madole';

    return (
      React.DOM.div({id: "footer"}, 
        React.DOM.a({href: myTwitter}, 
          React.DOM.img({src: "images/twitter.png", id: "twittericon", alt: "twitter"})
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
        React.DOM.div({className: "pageWrap"}, 
          Header(null), 
          InputForm(null)
        ), 
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

