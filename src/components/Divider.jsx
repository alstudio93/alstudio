import React from 'react'

const Divider = ({ skew, margin }) => {
    return (
        <div
            className={`shadow-lg hidden lg:block h-5 bg-gradient-to-br from-[#ffffff] to-[#000000] w-full ${margin ? margin : 'mt-[18rem]'} ${skew}`}
        ></div>
    )
}

export default Divider