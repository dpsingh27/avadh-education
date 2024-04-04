/* eslint-disable react/jsx-no-target-blank */
import React from "react"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container flexSB'>
          <div className='logo'>
            <h1>AWADH DEVELOPER</h1>
            <span>WEBSITE DEVELOPMENT & LEARNING</span>
          </div>

          <div className='social'>
            <a href="https://www.facebook.com/PratapDivyaSingh" target="_blank">
              <i className='fab fa-facebook-f icon'></i>
            </a>

<a href="https://www.instagram.com/pratap.divya.singh/" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-instagram icon"></i>
</a>

<a href="https://twitter.com/PratapDivyaSin1" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-twitter icon"></i>
</a>

<a href="https://www.youtube.com/channel/UCHNDXuBbCdLA2sfbbkmMJPw" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-youtube icon"></i>
</a>

          </div>
        </div>
      </section>
    </>
  )
}

export default Head
