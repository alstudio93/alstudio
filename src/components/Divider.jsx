import React from 'react'

const Divider = ({ skew }) => {
    return (
        <div
            className={`hidden lg:block h-5 bg-gradient-to-br from-[#ffffff] to-[#000000] w-full mt-80 ${skew}`}
        ></div>
    )
}

export default Divider