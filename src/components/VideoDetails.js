import React from 'react'

const VideoDetails = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>
  }

  const videoID = video.id.videoId
  const url = `https://www.youtube.com/embed/${videoID}`
  return (
    <div className="videoDetail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          src={url}
          className="embed-responsive-item"
          allowFullScreen="allowFullScreen"
          frameBorder="0"
        />
      </div>
      <div className="details">
        <div>
          {video.snippet.title}
        </div>
        <div>
          {video.snippet.description}
        </div>
      </div>
    </div>
  )
}

export default VideoDetails
