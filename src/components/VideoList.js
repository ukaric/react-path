import React from 'react'
import VideoItem from './VideoItem'

const VideoList = props => {
  const videoItems = props.videos.map(video => {
    return (
      <VideoItem
        video={video}
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
      />
    )
  })
  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  )
}

export default VideoList
