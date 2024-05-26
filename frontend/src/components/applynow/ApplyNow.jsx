import React from 'react'
import '../applynow/applynow.css'

const ApplyNow = () => {
  return (
    <>
      <div className='appynow_container'>
        <div className="container">
            <div className="applynow_content">
                <div className="left_appynow">
                    <img className='jobImg' src="/image/j.jpg" alt="link star image" />
                </div>
                <div className="right_applynow">
                    <form>
                        <input type="text" name="name" id="" placeholder='Name' />
                        <input type="email" name="email" id=""  placeholder='Email'/>
                        <input type="text" name="address" id="" placeholder='Address'/>
                        <input type="number" name="phone" id="" placeholder='Phone' />
                        <input type="number" name="dateofbirth" id="" placeholder='Date of Birth' />
                        <input type="text" name="country" id="" placeholder='Intrested Country'/>
                        <input type="text" name="education" id="" placeholder='Euducation' />
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </div>
        </div></>
  
  )
}

export default ApplyNow