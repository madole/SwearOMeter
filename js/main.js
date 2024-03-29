/** @jsx React.DOM */
/**
 * This component is the header on the webpage and includes a
 * horizontal rule below it
 */
var Header = React.createClass({
  getInitialState: function () {
    return {
      headerClassName: '',
      subTitleClassName: ''
    };
  },

  componentDidMount: function () {
    this.setState({headerClassName: 'animated bounceInRight'});
    this.setState({subTitleClassName: 'animated bounceInLeft'});
  },

  render: function () {
    var tweetometer = ['SWEAR-', <span className='blue'>O</span>, '-METER'];
    return (
      <span>
        <div className={this.state.headerClassName} id='title'>{tweetometer}</div>
        <div className={this.state.subTitleClassName} id='subTitle'>
        Have you ever wondered how much you swear on twitter?
        </div>
        <br />
        <hr />
        <br />
      </span>
    );
  }
});


/**
 * Input form where the user can enter the data to submit to
 * the server
 */
var InputForm = React.createClass({
  getInitialState: function () {
    return {
      formClassName: '',
      usernameClassName: '',
      arrowClassName: 'hide'
    };
  },

  componentDidMount: function () {
    this.setState({formClassName: 'animated bounceInDown'});
    setTimeout(this.setState.bind(this, {arrowClassName: 'animated bounceInLeft'}), 2000);
  },

  getSwearsFromServer: function (event) {
    var _this = this;
    var username = this.refs.username.state.value;
    if (!username) {
      this.setState({usernameClassName: 'animated bounce'});
      setTimeout(function () {
        _this.setState({usernameClassName: ''});
      }, 1000);
      return;
    }
    this.refs.spinner.showSpinner(true);
    this.setState({formClassName: 'animated hinge'});

    $.getJSON('http://afternoon-citadel-9782.herokuapp.com/getSwearWords?username=' + username + '', function (obj) {
      // showTweetCycler(obj.tweets);
      _this.refs.spinner.showSpinner(false);
      _this.refs.result.fillInData(username, obj);
      _this.refs.tweetCycler.startCycling(obj.swearTweets)
    });
  },

  handleKey: function (event) {
    if (event.which === 13) {
      this.getSwearsFromServer();
    }
  },

  render: function () {
    var placeholder = '@username';
    var src = 'images/submit.gif';

    return(
      <div>
        <div id='form' className={this.state.formClassName}>
          <img src='images/arrow.png' className={this.state.arrowClassName} />
          <input id='username' ref='username' onKeyPress={this.handleKey} className={this.state.usernameClassName} type='text' placeholder={placeholder} />
          <button id='submit' onClick={this.getSwearsFromServer}>Submit</button>
        </div>
        <Spinner ref='spinner'/>
        <TweetCycler ref='tweetCycler'/>
        <Result ref='result' />
      </div>
    );
  }
});


/**
 * Spinner component for display when loading data during the ajax call
 */
var Spinner = React.createClass({
  getInitialState: function () {
    return {
      className: 'hide'
    }
  },

  showSpinner: function (show) {
    if (show) {
      this.setState({className: 'spinner'});
    } else {
      this.setState({className: 'hide'});
    }
  },

  render: function () {
    return (
      <div id='spinner' className={this.state.className}>
        <div id='double-bounce1'></div>
        <div id='double-bounce2'></div>
      </div>
    );
  }
});


/**
 * This component cycles through the tweets that contain the
 * swear words
 */
var TweetCycler = React.createClass({
  getInitialState: function () {
    return {
      cycleClassName: 'hide'
    }
  },

  getRandomTweet: function (tweets) {
      return tweets[Math.floor(Math.random() * tweets.length)];
  },

  startCycling: function (tweets) {
    var _this = this, tweet;
    setInterval(function () {
      tweet = _this.getRandomTweet(tweets);
      _this.setState({
        tweet: tweet,
        cycleClassName: 'animated bounceInLeft'
      });
      setTimeout(function() {
        _this.setState({
          cycleClassName: 'animated bounceOutRight'
        });
      }, 3000)
    }, 5000);
  },

  render: function () {
    return (
      <div id='cyclerContainer' className={this.state.cycleClassName}>
        <div id="cycler" dangerouslySetInnerHTML={{__html: this.state.tweet}}></div>
      </div>
    );
  }
});


/**
 * This component will display the data returned from the twitter api
 * on the server
 */
var Result = React.createClass({
  getInitialState: function () {
    return {
      username: '',
      result: '',
      resultClassName: ''
    };
  },

  buildResultStrings: function (username, obj) {
    return {
      resultText: 'Your twitter feed is <span>' + obj.count + '%</span> sweary!',
      twitterUsername: '<a href="http://twitter.com/' + username + '"> @' + username + '</a>'
    }
  },

  fillInData: function (user, result) {
    var resultObj = this.buildResultStrings(user, result);
    this.setState({
      username: resultObj.twitterUsername,
      result:   resultObj.resultText,
      resultClassName: 'animated fadeIn'
    });
    this.refs.resetButton.showResetButton();
  },

  render: function () {
    return (
      <div>
        <div className={this.state.resultClassName}>
          <div id="user"   dangerouslySetInnerHTML={{__html: this.state.username}}></div>
          <div id="result" dangerouslySetInnerHTML={{__html: this.state.result}}></div>
          <TweetCycler />
        </div>
        <br />
        <ResetButton ref='resetButton' />
      </div>
    );
  }
});

/**
 * This component will display the footer with a link to my
 * github and my twitter feed
 */
var Footer = React.createClass({
  getInitialState: function () {
    return {
      footerClassName: ''
    }
  },

  componentDidMount: function () {
    this.setState({footerClassName: 'animated bounceInUp'});
  },

  render: function () {
    var myName = 'Andrew McDowell';
    var myGithub = 'http://github.com/madole';
    var myTwitter = 'http://twitter.com/madole';

    return (
      <footer id='footer'>
        <div className={this.state.footerClassName}>
          <a href={myTwitter} >
            <img src='images/twitter.png' id='twittericon' alt='twitter' />
          </a>
          <br />
          <span>Created by
            <a href={myGithub}>{myName}</a>
          </span>
        </div>
      </footer>
    );
  }
});

var ResetButton = React.createClass({
  getInitialState: function () {
    return {
      resetButtonClassName: 'hide'
    }
  },

  handleClick: function () {
    //TODO: just reset all the components
    location.reload();
  },

  showResetButton: function () {
    this.setState({resetButtonClassName: 'reset animated bounceInLeft'});
  },

  render: function () {
    return (
      <button className={this.state.resetButtonClassName} onClick={this.handleClick}>Reset</button>
    );
  }
})

/**
 * This component will display the custom react componenets that
 * are needed to display the app
 */
var App = React.createClass({
  render: function () {
    return(
      <div>
        <Header />
        <InputForm />
        <Footer />
      </div>
    );
  }
});

React.renderComponent(
  <App />, document.getElementById('content')
);


