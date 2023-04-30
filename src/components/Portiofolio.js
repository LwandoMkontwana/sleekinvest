import React from 'react'

export const Portiofolio = () => {
    return (
        <div style={{ backgroundColor: '#2caeba'}}>
                <section className='section' id='tours'>
      <div className='section-title'>
        <h2>Your <span style={{color:'whitesmoke'}}>portifolio</span></h2>
      </div>

      <div className='section-center featured-center'>
        <article className='tour-card'>
          <div className='tour-img-container'>
            <img src='./images/tour-1.jpeg' className='tour-img' alt='' />
            <p className='tour-date'>august 26th, 2020</p>
          </div>
          <div className='tour-info'>
            <div className='tour-title'>
              <h4>Tibet Adventure</h4>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.
            </p>
            <div className='tour-footer'>
              <p>
                <span><i className='fas fa-map'></i></span> china
              </p>
              <p>6 days</p>
              <p>from $2100</p>
            </div>
          </div>
            </article>
            <article className='tour-card'>
          <div className='tour-img-container'>
            <img src='./images/tour-1.jpeg' className='tour-img' alt='' />
            <p className='tour-date'>august 26th, 2020</p>
          </div>
          <div className='tour-info'>
            <div className='tour-title'>
              <h4>Tibet Adventure</h4>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.
            </p>
            <div className='tour-footer'>
              <p>
                <span><i className='fas fa-map'></i></span> china
              </p>
              <p>6 days</p>
              <p>from $2100</p>
            </div>
          </div>
        </article>

      </div>
    </section>
        </div>
    )
}
