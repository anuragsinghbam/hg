import React from 'react'

export default function BookAppointment() {
  return (
    <section className='as_know_sign_wrapper as_padderBottom80 as_padderTop80'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12 text-center'>
            <h1 className='as_heading as_heading_center'>
              Book an Appointment
            </h1>
            <p className='as_font14 as_margin0 as_padderBottom50'>
              Consectetur adipiscing elit, sed do eiusmod tempor
              incididuesdeentiut labore <br />
              etesde dolore magna aliquapspendisse and the gravida.
            </p>
            <div className='as_sign_form text-left'>
              <ul>
                <li className='as_form_box'>
                  <h3 className='as_subheading'>Date</h3>
                  <div className='as_input_feild'>
                    <input
                      type='text'
                      className='form-control as_datepicker'
                      placeholder='DD/MM/YYYY'
                    />
                    <span>
                      <img src='assets/images/svg/date.svg' alt='' />
                    </span>
                  </div>
                </li>
                <li className='as_form_box'>
                  <h3 className='as_subheading'>Time</h3>
                  <div className='as_input_feild'>
                    <input
                      type='text'
                      className='form-control as_timepicker'
                      placeholder='08:00'
                    />
                    <span>
                      <img src='assets/images/svg/time.svg' alt='' />
                    </span>
                  </div>
                </li>
                <li className='as_form_box'>
                  <h3 className='as_subheading'>Event</h3>
                  <div className='as_input_feild'>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Event Name....'
                    />
                    <span>
                      <img src='assets/images/svg/map1.svg' alt='' />
                    </span>
                  </div>
                </li>
                <li className='as_form_box'>
                  <a href='/' className='as_btn'>
                    Book an event
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
