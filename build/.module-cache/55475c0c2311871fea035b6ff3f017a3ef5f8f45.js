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
  getSwearsFromServer: function() {

    console.log('----------FECK');
  //   // var result      = document.getElementById('result');
  //   // var user        = document.getElementById('user');
  //   // var username    = document.getElementById("username").innerText();
  //   // var form        = document.getElementById('form')
  //   // form.className  = 'animated hinge';
  //   // $('.spinner').show();

  //   // $.getJSON('http://afternoon-citadel-9782.herokuapp.com/getFucks?username='+ username +'', function(obj) {
  //   //   var resultText = 'In the last <span>100</span> tweets, you have<br> given <span>'+obj.count+'</span> fucks!';
  //   //   user.html('<a href="http://twitter.com/'+ username + '"> @' + username +'</a>');
  //   //   $('.spinner').hide();
  //   //   result.html(resultText);
  //   //   result.addClass('animated fadeIn');
  //   //   showTweetCycler(obj.tweets);

  //   //   console.log('-------------')
  //   //   console.log(obj);
  //   //   console.log('-------------')
  //   // });
  },

  render: function() {
    var placeholder = '@username';
    var src = 'images/submit.gif';

    return(
        React.DOM.div({id: "form"}, 
          React.DOM.input({id: "username", type: "text", placeholder: placeholder}), 
          React.DOM.input({type: "image", id: "submit", onClick: "this.getSwearsFromServer()", src: src})
        )
      )
  }
});

var Spinner = React.createClass({displayName: 'Spinner',
  render: function() {
    return (
       React.DOM.div({id: "spinner"}, 
        React.DOM.div({id: "double-bounce1"}), 
        React.DOM.div({id: "double-bounce2"})
       )
    )
  }
});

var TweetCycler = React.createClass({displayName: 'TweetCycler',
  render: function() {
    return (
      React.DOM.div({id: "cyclerContainer"}, 
        React.DOM.div({id: "cycler"}), 
        React.DOM.div({id: "cycler2"})
      )
    )
  }
});

var Result = React.createClass({displayName: 'Result',
  getInitialState: function() {
    return {
      username: '',
      result: ''
    };
  },
  render: function() {
    return (
      React.DOM.div(null, 
        React.DOM.div({id: "user"}), 
        React.DOM.div({id: "result"})
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
      React.DOM.footer({id: "footer"}, 
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
        React.DOM.div({className: "page-wrap"}, 
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

