import React from 'react'

import SunLogoDark from '../assets/images/svg/sun-logo-dark.svg'
import './HeroSection.css'

const HeroSection = () => (
  <section className='as_banner_wrapper'>
    <div className='container-fluid'>
      <div className='row as_verticle_center'>
        <div className='col-lg-6 col-md-6 col-sm-6'>
          <div className='as_banner_slider'>
            <div className='as_banner_detail'>
              <h5 className='as_orange'>What’s your Event?</h5>
              <h1>
                Read Your Daily <br /> Horoscope Today
              </h1>
              <p>
                Scroll through our events and book an appointment with
                astrologer, purohit and cook
              </p>
              <a href='/' className='as_btn'>
                read more
              </a>
            </div>
            <div className='as_banner_detail'>
              <h5 className='as_orange'>What’s your Event?</h5>
              <h1>
                Read Your Daily <br /> Horoscope Today
              </h1>
              <p>
                Scroll through our events and book an appointment with our
                reputed and well known Purohits.
              </p>
              <a href='/' className='as_btn'>
                read more
              </a>
            </div>
            <div className='as_banner_detail'>
              <h5 className='as_orange'>What’s your Event?</h5>
              <h1>
                Read Your Daily <br /> Horoscope Today
              </h1>
              <p>
                Scroll through our events and book an appointment with our
                reputed and well known Cooks.
              </p>
              <a href='/' className='as_btn'>
                read more
              </a>
            </div>
          </div>
        </div>
        <div className='col-lg-6 col-md-6 col-sm-6'>
          <div className='as_banner_img text-center'>
            <img
              src='assets/images/banner_image.png'
              alt=''
              className='img-responsive'
            />
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default HeroSection
