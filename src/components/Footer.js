import React from 'react'

import Logo from '../assets/images/svg/logo.svg'
import './Footer.css'

export default function Footer() {
  return (
    <section className='as_footer_wrapper as_padderTop80'>
      <div className='container'>
        <div className='row'>
          <div className='as_newsletter_wrapper as_verticle_center as_padderBottom60'>
            <div className='col-lg-5 col-md-6 col-sm-12'>
              <h1 className='as_heading'>Our Newsletter</h1>
              <p>
                Get Your Daily Horoscope, Daily Lovescope and Daily
                <br /> Tarot Directly In Your Inbox
              </p>
            </div>
            <div className='col-lg-7 col-md-6 col-sm-12'>
              <div className='as_newsletter_box'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Enter your Email Here...'
                />
                <a href='/' className='as_btn'>
                  subscribe now
                </a>
              </div>
            </div>
          </div>
          
          <div className='as_footer_inner as_padderTop50 as_padderBottom80'>
            <div className='col-lg-3 col-md-6 col-sm-12'>
              <div className='as_footer_widget'>
                <div className='as_footer_logo'>
                  <a href='index.html'>
                    <img src={Logo} alt='' />
                  </a>
                </div>
                <p>
                  Consectetur adipiscing elited doesde eiusmod tempor incididunt
                  ust labore et dolore magna aliqua.
                </p>
                <div className='as_share_box'>
                  <p>Follow Us</p>
                  <ul>
                    <li>
                      <a href='/'>
                        <img src='assets/images/svg/facebook.svg' alt='' />
                      </a>
                    </li>
                    <li>
                      <a href='/'>
                        <img src='assets/images/svg/twitter.svg' alt='' />
                      </a>
                    </li>
                    <li>
                      <a href='/'>
                        <img src='assets/images/svg/google.svg' alt='' />
                      </a>
                    </li>
                    <li>
                      <a href='/'>
                        <img src='assets/images/svg/youtube.svg' alt='' />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12'>
              <div className='as_footer_widget'>
                <h3 className='as_footer_heading'>Our Services</h3>
                <ul>
                  <li>
                    <a href='service_detail.html'>
                      <span>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          xmlnsXlink='http://www.w3.org/1999/xlink'
                          preserveAspectRatio='xMidYMid'
                          width={8}
                          height={12}
                          viewBox='0 0 8 12'
                        >
                          <path
                            d='M8.000,5.998 L-0.002,11.997 L1.292,5.998 L-0.002,-0.001 L8.000,5.998 ZM1.265,9.924 L6.502,5.998 L1.265,2.071 L2.112,5.998 L1.265,9.924 ZM5.451,5.998 L2.496,8.213 L2.974,5.998 L2.496,3.783 L5.451,5.998 Z'
                            className='cls-1'
                          />
                        </svg>
                      </span>{' '}
                      Horoscopes
                    </a>
                  </li>
                  <li>
                    <a href='service_detail.html'>
                      <span>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          xmlnsXlink='http://www.w3.org/1999/xlink'
                          preserveAspectRatio='xMidYMid'
                          width={8}
                          height={12}
                          viewBox='0 0 8 12'
                        >
                          <path
                            d='M8.000,5.998 L-0.002,11.997 L1.292,5.998 L-0.002,-0.001 L8.000,5.998 ZM1.265,9.924 L6.502,5.998 L1.265,2.071 L2.112,5.998 L1.265,9.924 ZM5.451,5.998 L2.496,8.213 L2.974,5.998 L2.496,3.783 L5.451,5.998 Z'
                            className='cls-1'
                          />
                        </svg>
                      </span>{' '}
                      Gemstones
                    </a>
                  </li>
                  <li>
                    <a href='service_detail.html'>
                      <span>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          xmlnsXlink='http://www.w3.org/1999/xlink'
                          preserveAspectRatio='xMidYMid'
                          width={8}
                          height={12}
                          viewBox='0 0 8 12'
                        >
                          <path
                            d='M8.000,5.998 L-0.002,11.997 L1.292,5.998 L-0.002,-0.001 L8.000,5.998 ZM1.265,9.924 L6.502,5.998 L1.265,2.071 L2.112,5.998 L1.265,9.924 ZM5.451,5.998 L2.496,8.213 L2.974,5.998 L2.496,3.783 L5.451,5.998 Z'
                            className='cls-1'
                          />
                        </svg>
                      </span>{' '}
                      Numerology
                    </a>
                  </li>
                  <li>
                    <a href='service_detail.html'>
                      <span>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          xmlnsXlink='http://www.w3.org/1999/xlink'
                          preserveAspectRatio='xMidYMid'
                          width={8}
                          height={12}
                          viewBox='0 0 8 12'
                        >
                          <path
                            d='M8.000,5.998 L-0.002,11.997 L1.292,5.998 L-0.002,-0.001 L8.000,5.998 ZM1.265,9.924 L6.502,5.998 L1.265,2.071 L2.112,5.998 L1.265,9.924 ZM5.451,5.998 L2.496,8.213 L2.974,5.998 L2.496,3.783 L5.451,5.998 Z'
                            className='cls-1'
                          />
                        </svg>
                      </span>{' '}
                      Tarot Cards
                    </a>
                  </li>
                  <li>
                    <a href='service_detail.html'>
                      <span>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          xmlnsXlink='http://www.w3.org/1999/xlink'
                          preserveAspectRatio='xMidYMid'
                          width={8}
                          height={12}
                          viewBox='0 0 8 12'
                        >
                          <path
                            d='M8.000,5.998 L-0.002,11.997 L1.292,5.998 L-0.002,-0.001 L8.000,5.998 ZM1.265,9.924 L6.502,5.998 L1.265,2.071 L2.112,5.998 L1.265,9.924 ZM5.451,5.998 L2.496,8.213 L2.974,5.998 L2.496,3.783 L5.451,5.998 Z'
                            className='cls-1'
                          />
                        </svg>
                      </span>{' '}
                      Birth Journal
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12'>
              <div className='as_footer_widget'>
                <h3 className='as_footer_heading'>Quick Links</h3>
                <ul>
                  <li>
                    <a href='/'>
                      <span>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          xmlnsXlink='http://www.w3.org/1999/xlink'
                          preserveAspectRatio='xMidYMid'
                          width={8}
                          height={12}
                          viewBox='0 0 8 12'
                        >
                          <path
                            d='M8.000,5.998 L-0.002,11.997 L1.292,5.998 L-0.002,-0.001 L8.000,5.998 ZM1.265,9.924 L6.502,5.998 L1.265,2.071 L2.112,5.998 L1.265,9.924 ZM5.451,5.998 L2.496,8.213 L2.974,5.998 L2.496,3.783 L5.451,5.998 Z'
                            className='cls-1'
                          />
                        </svg>
                      </span>{' '}
                      Home
                    </a>
                  </li>
                  <li>
                    <a href='about.html'>
                      <span>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          xmlnsXlink='http://www.w3.org/1999/xlink'
                          preserveAspectRatio='xMidYMid'
                          width={8}
                          height={12}
                          viewBox='0 0 8 12'
                        >
                          <path
                            d='M8.000,5.998 L-0.002,11.997 L1.292,5.998 L-0.002,-0.001 L8.000,5.998 ZM1.265,9.924 L6.502,5.998 L1.265,2.071 L2.112,5.998 L1.265,9.924 ZM5.451,5.998 L2.496,8.213 L2.974,5.998 L2.496,3.783 L5.451,5.998 Z'
                            className='cls-1'
                          />
                        </svg>
                      </span>{' '}
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href='blog.html'>
                      <span>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          xmlnsXlink='http://www.w3.org/1999/xlink'
                          preserveAspectRatio='xMidYMid'
                          width={8}
                          height={12}
                          viewBox='0 0 8 12'
                        >
                          <path
                            d='M8.000,5.998 L-0.002,11.997 L1.292,5.998 L-0.002,-0.001 L8.000,5.998 ZM1.265,9.924 L6.502,5.998 L1.265,2.071 L2.112,5.998 L1.265,9.924 ZM5.451,5.998 L2.496,8.213 L2.974,5.998 L2.496,3.783 L5.451,5.998 Z'
                            className='cls-1'
                          />
                        </svg>
                      </span>{' '}
                      Services
                    </a>
                  </li>
                  <li>
                    <a href='appointment.html'>
                      <span>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          xmlnsXlink='http://www.w3.org/1999/xlink'
                          preserveAspectRatio='xMidYMid'
                          width={8}
                          height={12}
                          viewBox='0 0 8 12'
                        >
                          <path
                            d='M8.000,5.998 L-0.002,11.997 L1.292,5.998 L-0.002,-0.001 L8.000,5.998 ZM1.265,9.924 L6.502,5.998 L1.265,2.071 L2.112,5.998 L1.265,9.924 ZM5.451,5.998 L2.496,8.213 L2.974,5.998 L2.496,3.783 L5.451,5.998 Z'
                            className='cls-1'
                          />
                        </svg>
                      </span>{' '}
                      Appointment
                    </a>
                  </li>
                  <li>
                    <a href='contact.html'>
                      <span>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          xmlnsXlink='http://www.w3.org/1999/xlink'
                          preserveAspectRatio='xMidYMid'
                          width={8}
                          height={12}
                          viewBox='0 0 8 12'
                        >
                          <path
                            d='M8.000,5.998 L-0.002,11.997 L1.292,5.998 L-0.002,-0.001 L8.000,5.998 ZM1.265,9.924 L6.502,5.998 L1.265,2.071 L2.112,5.998 L1.265,9.924 ZM5.451,5.998 L2.496,8.213 L2.974,5.998 L2.496,3.783 L5.451,5.998 Z'
                            className='cls-1'
                          />
                        </svg>
                      </span>{' '}
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12'>
              <div className='as_footer_widget'>
                <h3 className='as_footer_heading'>Contact Us</h3>
                <ul className='as_contact_list'>
                  <li>
                    <img src='assets/images/svg/map.svg' alt='' />
                    <p>
                      Gotham Hall, 1356 Brodway squore, NY 10018, California,
                      USA
                    </p>
                  </li>
                  <li>
                    <img src='assets/images/svg/address.svg' alt='' />
                    <p>
                      <a href='mailto: harigurus@gmail.com' rel='noreferrer' target='_blank'>harigurus@gmail.com</a>
                      <a href='mailto: care@harigurus.com' rel='noreferrer' target='_blank'> care@harigurus.com</a>
                    </p>
                  </li>
                  <li>
                    <img src='assets/images/svg/call.svg' alt='' />
                    <p>
                      <a href='tel: +91 8079687199'>+91 8079687199</a>
                      <br />
                      <a href='tel: +91 8867709482'>+91 8867709482</a>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
