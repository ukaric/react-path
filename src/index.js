import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/SearchBar'
import YTSearch from 'youtube-api-search'
import VideoList from './components/VideoList'
import VideoDetails from './components/VideoDetails'
import _ from 'lodash'
const API_KEY = 'AIzaSyAmZQwKmWLGQpYqf-2ZxqWV3OflNJQND3s'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      videos: [],
      selectedVideo: null,
    }
    this.videoSearch('Are you with me')
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, videos =>
      this.setState({
        videos: videos,
        selectedVideo: videos[0],
      })
    )
  }

  render() {
    const videoSearch = _.debounce(term => {
      this.videoSearch(term)
    }, 500)
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetails video={this.state.selectedVideo} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'))
