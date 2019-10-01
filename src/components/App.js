import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
  onSearchSubmit(term) {
    axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID 1f7f32156eceee66104579f7337e33df7238117ab2bf9da85e5b4384ae9ee717'
      }
    });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={ this.onSearchSubmit }/>
      </div>
    );
  }
};

export default App;
