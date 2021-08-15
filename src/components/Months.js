import React from 'react'

import './Months.css'
import SunLogoDark from '../assets/images/svg/sun-logo-dark.svg'

export default function Months() {
  return (
    <section className='as_zodiac_sign_wrapper as_padderTop80 as_padderBottom80'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12 text-center'>
            <h1 className='as_heading as_heading_center'>Best Dates</h1>
            <p className='as_font14 as_margin0'>
              Consectetur adipiscing elit, sed do eiusmod tempor
              incididuesdeentiut labore <br />
              etesde dolore magna aliquapspendisse and the gravida.
            </p>
            <div className='as_zodiac_inner text-left'>
              <div className='row as_verticle_center'>
                <div className='col-lg-3 col-md-12'>
                  <ul className='as_sign_ul'>
                    <li className='as_sign_box'>
                      <a href='zodiac_single.html'>
                        <span className='as_sign'>
                          <img src='assets/images/svg/sign1.svg' alt='' />
                        </span>
                        <div>
                          <h5>January</h5>
                          <p>5, 11, 28</p>
                        </div>
                      </a>
                    </li>
                    <li className='as_sign_box'>
                      <a href='zodiac_single.html'>
                        <span className='as_sign'>
                          <img src='assets/images/svg/sign2.svg' alt='' />
                        </span>
                        <div>
                          <h5>February</h5>
                          <p>7, 14, 26</p>
                        </div>
                      </a>
                    </li>
                    <li className='as_sign_box'>
                      <a href='zodiac_single.html'>
                        <span className='as_sign'>
                          <img src='assets/images/svg/sign3.svg' alt='' />
                        </span>
                        <div>
                          <h5>March</h5>
                          <p>9, 12, 22</p>
                        </div>
                      </a>
                    </li>
                    <li className='as_sign_box'>
                      <a href='zodiac_single.html'>
                        <span className='as_sign'>
                          <img src='assets/images/svg/sign4.svg' alt='' />
                        </span>
                        <div>
                          <h5>April</h5>
                          <p>1, 9, 20</p>
                        </div>
                      </a>
                    </li>
                    <li className='as_sign_box'>
                      <a href='zodiac_single.html'>
                        <span className='as_sign'>
                          <img src='assets/images/svg/sign5.svg' alt='' />
                        </span>
                        <div>
                          <h5>May</h5>
                          <p>6, 18, 24</p>
                        </div>
                      </a>
                    </li>
                    <li className='as_sign_box'>
                      <a href='zodiac_single.html'>
                        <span className='as_sign'>
                          <img src='assets/images/svg/sign6.svg' alt='' />
                        </span>
                        <div>
                          <h5>June</h5>
                          <p>3, 15, 27</p>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='col-lg-6 col-md-12'>
                  <div className='as_sign_img text-center'>
                    <img
                      src={SunLogoDark}
                      alt=''
                      className='img-responsive'
                    />
                  </div>
                </div>
                <div className='col-lg-3 col-md-12'>
                  <ul className='as_sign_ul as_sign_ul_right'>
                    <li className='as_sign_box'>
                      <a href='zodiac_single.html'>
                        <span className='as_sign'>
                          <img src='assets/images/svg/sign7.svg' alt='' />
                        </span>
                        <div>
                          <h5>July</h5>
                          <p>7, 18, 30</p>
                        </div>
                      </a>
                    </li>
                    <li className='as_sign_box'>
                      <a href='zodiac_single.html'>
                        <span className='as_sign'>
                          <img src='assets/images/svg/sign8.svg' alt='' />
                        </span>
                        <div>
                          <h5>August</h5>
                          <p>2, 15, 25</p>
                        </div>
                      </a>
                    </li>
                    <li className='as_sign_box'>
                      <a href='zodiac_single.html'>
                        <span className='as_sign'>
                          <img src='assets/images/svg/sign9.svg' alt='' />
                        </span>
                        <div>
                          <h5>September</h5>
                          <p>6, 15, 28</p>
                        </div>
                      </a>
                    </li>
                    <li className='as_sign_box'>
                      <a href='zodiac_single.html'>
                        <span className='as_sign'>
                          <img src='assets/images/svg/sign10.svg' alt='' />
                        </span>
                        <div>
                          <h5>October</h5>
                          <p>8, 16, 27</p>
                        </div>
                      </a>
                    </li>
                    <li className='as_sign_box'>
                      <a href='zodiac_single.html'>
                        <span className='as_sign'>
                          <img src='assets/images/svg/sign11.svg' alt='' />
                        </span>
                        <div>
                          <h5>November</h5>
                          <p>1, 9, 17</p>
                        </div>
                      </a>
                    </li>
                    <li className='as_sign_box'>
                      <a href='zodiac_single.html'>
                        <span className='as_sign'>
                          <img src='assets/images/svg/sign12.svg' alt='' />
                        </span>
                        <div>
                          <h5>December</h5>
                          <p>2, 15, 29</p>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
