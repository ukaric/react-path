import React from 'react'

const VideoItem = ({ video, onVideoSelect }) => {
  const imgUrl = video.snippet.thumbnails.default.url

  return (
    <li className="list-group-item" onClick={() => onVideoSelect(video)}>
      <div className="video-list-media">
        <div className="media-left">
          <img src={imgUrl} className="media-object" />
        </div>

        <div className="media-body">
          <div className="media-heading">
            {video.snippet.title}
          </div>
        </div>
      </div>
    </li>
  )
}

export default VideoItem
