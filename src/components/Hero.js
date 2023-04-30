import React from 'react';

const handleBtnHero = () => {
  
}

const Hero = () => {
  return (
      <>
        <div>
            <section className='hero' id='home'>
      <div className='hero-banner'>
        <h1>Hello Sleek Investor!</h1>
        <p>
          <br/>
          With SleeekInvest we put the power back in your hands by making sure that you take care of your future while doing your daily ordinary thing like shopping. 
        </p>
        <button onClick={handleBtnHero} className='btn hero-btn'>explore markets</button>
      </div>
    </section>

      </div>
      </>
    )
}

export default Hero
