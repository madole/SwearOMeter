/** @jsx React.DOM */
/**
 * This component is the header on the webpage and includes a 
 * horizontal rule below it
 */
var Header = React.createClass({
  render: function() {
    var tweetometer = ['SWEAR-',<span className='blue'>O</span>, '-METER'];
    return ( 
      <span><h1 id='title'>{tweetometer}</h1> <hr /></span>
      );
  }
});



/**
 * Input form where the user can enter the data to submit to
 * the server
 */
var InputForm = React.createClass({
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
      <div>
        <div id='form' className={this.state.className}>
          <input id='username' ref='username' type='text' placeholder={placeholder} />
          <input type='image' id='submit' onClick={this.getSwearsFromServer} src={src} />
        </div>
        <Spinner ref='spinner'/>
        <Result ref='result' />
      </div>
      )
  }
});


/**
 * Spinner component for display when loading data during the ajax call
 */
var Spinner = React.createClass({
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
       <div id='spinner' className={this.state.className}>
        <div id='double-bounce1'></div>
        <div id='double-bounce2'></div>
       </div>
    )
  }
});


/**
 * This component cycles through the tweets that contain the
 * swear words 
 */
var TweetCycler = React.createClass({
  render: function() {
    return (
      <div id='cyclerContainer'>
        <div id="cycler"></div>
        <div id="cycler2"></div>
      </div>
    )
  }
});


/**
 * This component will display the data returned from the twitter api 
 * on the server
 */
var Result = React.createClass({
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
      <div>
        <div id="user" dangerouslySetInnerHTML={{__html: this.state.username}}></div>
        <div id="result" dangerouslySetInnerHTML={{__html: this.state.result}}></div>
      </div>
    )
  }
});

/**
 * This component will display the footer with a link to my
 * github and my twitter feed
 */
var Footer = React.createClass({
  render: function() {
    var myName = 'Andrew McDowell';
    var myGithub = 'http://github.com/madole';
    var myTwitter = 'http://twitter.com/madole';

    return (
      <footer id='footer'>  
        <a href={myTwitter}>
          <img src='images/twitter.png' id='twittericon' alt='twitter' /> 
        </a>
        <span>Created by <a href={myGithub}>{myName}</a></span> 
      </footer>
    )
  }
});


/**
 * This component will display the custom react componenets that
 * are needed to display the app
 */
var App = React.createClass({
  render: function() {
    return(
      <div>
        <div className='page-wrap'>
          <Header />
          <InputForm />
        </div>
        <Footer />
       </div>
    )
  }
});

React.renderComponent(
  <App />, document.getElementById('content')
);


