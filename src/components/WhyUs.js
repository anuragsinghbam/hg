import React from 'react'

export default function WhyUs() {
  return (
    <section className='as_whychoose_wrapper as_padderTop80 as_padderBottom50'>
      <div className='container'>
        <div className='row as_verticle_center'>
          <div className='col-lg-3 col-md-12'>
            <h1 className='as_heading'>Why Choose Us</h1>
            <p className='as_font14 as_margin0'>
              Consectetur adipiscing elit, sed do eiusmod tempor
              incididuesdeentiut.
            </p>
          </div>
          <div className='col-lg-9 col-md-12'>
            <div className='row'>
              <div className='col-lg-4 col-md-6 col-sm-6 col-xs-12'>
                <div className='as_whychoose_box text-center'>
                  <span className='as_number'>
                    <span>
                      <span data-from={0} data-to={512} data-speed={5000}>
                        512
                      </span>
                      +
                    </span>
                    <img src='assets/images/svg/shape.svg' alt='' />
                  </span>
                  <h4>Qualified Purohits</h4>
                </div>
              </div>
              <div className='col-lg-4 col-md-6 col-sm-6 col-xs-12'>
                <div className='as_whychoose_box text-center'>
                  <span className='as_number'>
                    <span>
                      <span data-from={0} data-to={62} data-speed={5000}>
                        62
                      </span>
                      +
                    </span>
                    <img src='assets/images/svg/shape.svg' alt='' />
                  </span>
                  <h4>Qualified Astrologers</h4>
                </div>
              </div>
              <div className='col-lg-4 col-md-6 col-sm-6 col-xs-12'>
                <div className='as_whychoose_box text-center'>
                  <span className='as_number'>
                    <span>
                      <span data-from={0} data-to={94} data-speed={5000}>
                        94
                      </span>
                      +
                    </span>
                    <img src='assets/images/svg/shape.svg' alt='' />
                  </span>
                  <h4>Qualified Cooks</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
