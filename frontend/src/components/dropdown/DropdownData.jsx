import React from 'react'

const DropdownData = ({heading, para}) => {
  return (
    <>
    <div className='dropdownData_component'>
        <div className="container">
            <div className="dropdown_content">
                <h2>{heading}</h2>
                <p>{para}</p>
            </div>
        </div>

    </div>
    </>
  )
}

export default DropdownData