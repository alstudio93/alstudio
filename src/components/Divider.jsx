import React from 'react'

const Divider = ({ skew, margin }) => {
    return (
        <div
            className={` hidden lg:block h-5 btn-gradient  w-full ${margin ? margin : 'mt-[18rem]'} ${skew}`}
        ></div>
    )
}

export default Divider