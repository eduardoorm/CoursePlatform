import React from 'react'

export const ReproductorVideo = () => {
    return (
        <div className="reproductor-video">
          <div className="main">
              <div className="video-box">
                  <div className="video">
                      <video width="400" controls >
                          <source src="/assets/videos/video1.mp4" type="video/mp4" />
                      </video>
                  </div>
              </div>
            </div>
        </div> 
    )
}
