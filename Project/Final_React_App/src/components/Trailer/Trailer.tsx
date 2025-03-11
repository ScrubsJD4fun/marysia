import type { FC } from 'react'
import './Trailer.css'

export interface TrailerId {
    videoId: string
}

export const Trailer: FC<TrailerId> = ({videoId}) => {
  return (
    <div className="youtube-trailer">
      <iframe
      className='youtube-frame'
        
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&muted=true`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  )
}
