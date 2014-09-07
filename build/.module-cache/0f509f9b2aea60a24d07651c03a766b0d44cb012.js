/** @jsx React.DOM */
/**
 * This component is the header on the webpage and includes a 
 * horizontal rule below it
 */
var Header = React.createClass({displayName: 'Header',
  render: function() {
    var tweetometer = ['SWEAR-',React.DOM.span({className: "blue"}, "O"), '-METER'];
    return ( 
      React.DOM.span(null, React.DOM.h1({id: "title"}, tweetometer), " ", React.DOM.hr(null))
      );
  }
});



/**
 * Input form where the user can enter the data to submit to
 * the server
 */
var InputForm = React.createClass({displayName: 'InputForm',
  getSwearsFromServer: function(event) {
    var _this = this;
    var username    = this.refs.username.state.value;

    this.refs.spinner.showSpinner(true);
    this.setState({className: 'animated hinge'});

    $.getJSON('http://afternoon-citadel-9782.herokuapp.com/getSwearWords?username='+ username +'', function(obj) {
     // showTweetCycler(obj.tweets);
     _this.refs.spinner.showSpinner(false);
     _this.refs.result.fillInData(username, obj);
    });
  },
  getInitialState: function() {
    return {
      className: ''
    };
  },
  render: function() {
    var placeholder = '@username';
    var src = 'images/submit.gif';

    return(
      React.DOM.div(null, 
        React.DOM.div({id: "form", className: this.state.className}, 
          React.DOM.input({id: "username", ref: "username", type: "text", placeholder: placeholder}), 
          React.DOM.input({type: "image", id: "submit", onClick: this.getSwearsFromServer, src: src})
        ), 
        Spinner({ref: "spinner"}), 
        Result({ref: "result"})
      )
      )
  }
});


/**
 * Spinner component for display when loading data during the ajax call
 */
var Spinner = React.createClass({displayName: 'Spinner',
  getInitialState: function(){
    return {
      className: 'hide'
    }
  },
  showSpinner: function(show) {
    if(show) {
      this.setState({className: 'spinner'});
    }else {
      this.setState({className: 'hide'});
    }
  },
  render: function() {
    return (
       React.DOM.div({id: "spinner", className: this.state.className}, 
        React.DOM.div({id: "double-bounce1"}), 
        React.DOM.div({id: "double-bounce2"})
       )
    )
  }
});


/**
 * This component cycles through the tweets that contain the
 * swear words 
 */
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
  buildResultStrings: function(username, obj) {
    return {
      resultText      : 'Your twitter feed is <span>' + obj.count + '%</span> sweary!',
      twitterUsername : '<a href="http://twitter.com/'+ username + '"> @' + username +'</a>'
    }
  },
  fillInData: function(user, result) {
    var resultObj = this.buildResultStrings(user, result);
    this.setState({
      username: resultObj.twitterUsername,
      result: resultObj.resultText
    });
  },
  render: function() {
    return (
      React.DOM.div(null, 
        React.DOM.div({id: "user", dangerouslySetInnerHTML: {__html: this.state.username}}), 
        React.DOM.div({id: "result", dangerouslySetInnerHTML: {__html: this.state.result}})
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

