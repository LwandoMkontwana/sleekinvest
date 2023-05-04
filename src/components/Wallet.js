import React from 'react'

const Wallet = () => {
    return (
        <div>
            
    <section className='section services' id='services'>
      <div className='section-title'>
        <h2> <span className='service-icon'><i className='fas fa-wallet fa-fw'></i></span> Sleek <span>wallet</span></h2>
      </div>
      <div className='section-center services-center'>
        <article className='service'>
          <span className='service-icon'><i className='fas fa-wallet fa-fw'></i></span>
          <div className='service-info'>
            <h4 className='service-title'>saving money</h4>
            <p className='service-text'>
             Are you saving money the right way? Don't just leave you money your money have it work for you.
            </p>
          </div>
        </article>

        <article className='service'>
          <span className='service-icon'><i className='fas fa-tree fa-fw'></i></span>
          <div className='service-info'>
            <h4 className='service-title'>widrawals</h4>
            <p className='service-text'>
              Withdraw your earnings and reap the fruits of your labour. You deserve it!
            </p>
          </div>
        </article>

        <article className='service'>
          <span className='service-icon'><i className='fas fa-socks fa-fw'></i></span>
          <div className='service-info'>
            <h4 className='service-title'>deposits</h4>
            <p className='service-text'>
             Expand and diversify your stock portifolio by depositing cash and buying more stocks!
            </p>
          </div>
        </article>
      </div>
    </section>
        </div>
    )
}
export default Wallet
