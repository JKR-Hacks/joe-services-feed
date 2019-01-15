/* eslint-disable consistent-return */
import React, { Component } from 'react';
import axios from 'axios';

import Feed from './components/Feed';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ramsFeed: [],
      view: 'main',
    };
  }

  componentDidMount() {
    // fetch schedule data
    axios.get('http://localhost:3005/espn/feeds', {
      method: 'GET',
      mode: 'no-cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        // eslint-disable-next-line prefer-destructuring
        const data = res.data;
        this.setState({
          ramsFeed: data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  renderView() {
    // const { schedule, ramsFeed, view } = this.state;
    const { ramsFeed, view } = this.state;
    if (view === 'main') {
      return (
        <div id="feed">
          <Feed
            ramsFeed={ramsFeed}
          />
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        {this.renderView()}
      </div>
    );
  }
}

export default App;
