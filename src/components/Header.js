import React from 'react'

import Logo from '../assets/images/svg/logo.svg'
import ShortLogo from '../assets/images/svg/short-logo.svg'
import './Header.css'

const Header = () => (
  <section className='as_header_wrapper'>
    <div className='as_logo'>
      <a href='/'>
        <img src={Logo} alt="logo" />
      </a>
    </div>
    <div className='as_header_detail'>
      <div className='as_info_detail'>
        <ul>
          <li>
            <a href='tel: +91 8079687199'>
              <div className='as_infobox'>
                <span className='as_infoicon'>
                  <img src='assets/images/svg/headphone.svg' alt='' />
                </span>
                <span className='as_orange'>Pandit:</span>
                +91 8079687199
              </div>
            </a>
          </li>
          <li>
            <a href='tel: +91 8867709482'>
              <div className='as_infobox'>
                <span className='as_infoicon'>
                  <img src='assets/images/svg/headphone.svg' alt='' />
                </span>
                <span className='as_orange'>Astrologer:</span>
                +91 8867709482
              </div>
            </a>
          </li>
        </ul>
        <div className='as_right_info'>
          <a href='/'>
            <div
              className='as_infobox'
              data-toggle='modal'
              data-target='#as_login'
            >
              <span className='as_infoicon'>
                <img src='assets/images/svg/login.svg' alt='' />
              </span>
              <span className='as_logintext'>Log in / Register</span>
            </div>
          </a>
          <div className='as_cart'>
            <div className='as_cart_wrapper'>
              <span>
                <img src='assets/images/svg/cart.svg' alt='' />
                <span className='as_cartnumber'>02</span>
              </span>
              $512
            </div>
            <div className='as_cart_box'>
              <div className='as_cart_list'>
                <ul>
                  <li>
                    <div className='as_cart_img'>
                      <img
                        src='http://via.placeholder.com/70X70/031d2e'
                        className='img-responsive'
                      />
                    </div>
                    <div className='as_cart_info'>
                      <a href='#'>Yellow Sapphire</a>
                      <p>1 X $20.00</p>
                      <a href='/;' className='as_cart_remove'>
                        <i className='fa fa-trash' />
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className='as_cart_img'>
                      <img
                        src='http://via.placeholder.com/70X70/031d2e'
                        className='img-responsive'
                      />
                    </div>
                    <div className='as_cart_info'>
                      <a href='#'>yantra</a>
                      <p>1 X $10.00</p>
                      <a href='/;' className='as_cart_remove'>
                        <i className='fa fa-trash' />
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
              <div className='as_cart_total'>
                <p>
                  total<span>$30.00</span>
                </p>
              </div>
              <div className='as_cart_btn'>
                <button type='button' className='as_btn'>
                  view cart
                </button>
                <button type='button' className='as_btn'>
                  checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='as_menu_wrapper'>
        <span className='as_toggle'>
          <img src='assets/images/svg/menu.svg' alt='' />
        </span>
        <div className='as_menu'>
          <ul>
            <li>
              <a href='index.html' className='active'>
                home
              </a>
            </li>
            <li>
              <a href='about.html'>about</a>
            </li>
            <li>
              <a href='service.html'>services</a>
            </li>
            <li className='nav-blog'>
              <a href='/'>blog</a>
              <ul className='as_submenu'>
                <li>
                  <a href='blog.html'>blog</a>
                </li>
                <li>
                  <a href='/'>blog single</a>
                  <ul className='as_submenu'>
                    <li>
                      <a href='blog_left_detail.html'>left sidebar</a>
                    </li>
                    <li>
                      <a href='blog_detail.html'>right sidebar</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href='appointment.html'>appointment</a>
            </li>
            <li className='nav-shop'>
              <a href='/'>shop</a>
              <ul className='as_submenu'>
                <li>
                  <a href='shop.html'>Shop</a>
                </li>
                <li>
                  <a href='shop_single.html'>Shop Single</a>
                </li>
                <li>
                  <a href='cart.html'>Cart</a>
                </li>
                <li>
                  <a href='checkout.html'>Checkout</a>
                </li>
              </ul>
            </li>
            <li className='nav-pages'>
              <a href='/'>pages</a>
              <ul className='as_submenu'>
                <li>
                  <a href='astrologer.html'>Astrologer</a>
                </li>
                <li>
                  <a href='privacy_policy.html'>Privacy Policy</a>
                </li>
                <li>
                  <a href='error.html'>404</a>
                </li>
                <li>
                  <a href='faq.html'>faq</a>
                </li>
              </ul>
            </li>
            <li>
              <a href='contact.html'>contact</a>
            </li>
          </ul>
        </div>
        <div className='as_search_wrapper'>
          <img src='assets/images/search.png' alt='' className='as_search' />
          <div className='as_search_boxpopup'>
            <a href='/;' className='as_cancel'>
              <svg
                version='1.1'
                xmlns='http://www.w3.org/2000/svg'
                xmlnsXlink='http://www.w3.org/1999/xlink'
                width='25px'
                height='25px'
                x='0px'
                y='0px'
                viewBox='0 0 511.76 511.76'
                style={{ enableBackground: 'new 0 0 511.76 511.76' }}
                xmlSpace='preserve'
              >
                <g>
                  <g>
                    <path d='M436.896,74.869c-99.84-99.819-262.208-99.819-362.048,0c-99.797,99.819-99.797,262.229,0,362.048 c49.92,49.899,115.477,74.837,181.035,74.837s131.093-24.939,181.013-74.837C536.715,337.099,536.715,174.688,436.896,74.869z M361.461,331.317c8.341,8.341,8.341,21.824,0,30.165c-4.16,4.16-9.621,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251 l-75.413-75.435l-75.392,75.413c-4.181,4.16-9.643,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251 c-8.341-8.341-8.341-21.845,0-30.165l75.392-75.413l-75.413-75.413c-8.341-8.341-8.341-21.845,0-30.165 c8.32-8.341,21.824-8.341,30.165,0l75.413,75.413l75.413-75.413c8.341-8.341,21.824-8.341,30.165,0 c8.341,8.32,8.341,21.824,0,30.165l-75.413,75.413L361.461,331.317z' />
                  </g>
                </g>
                <g> </g>
                <g> </g>
                <g> </g>
                <g> </g>
                <g> </g>
                <g> </g>
                <g> </g>
                <g> </g>
                <g> </g>
                <g> </g>
                <g> </g>
                <g> </g>
                <g> </g>
                <g> </g>
                <g> </g>
              </svg>
            </a>
            <div className='as_search_inner'>
              <div className='as_search_widget'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Search...'
                />
                <a href='#'>
                  <img src='assets/images/svg/search.svg' alt='' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Header
