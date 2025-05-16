import React from 'react'
import Lottie from "lottie-react";
import loder from '../public/loties/loderreactBlack.json'
import loder_2 from '../public/loties/loder_nested_page.json'
import error from '../public/loties/error_react_black.json'


function LotieHandel({status}) {
  return (
      <div className='vh-100 flex'>
        <div className='flex flex-column w-50'>
        {status === 'main_pages' ? 
            <Lottie animationData={loder} />
            : status === 'netsed_page' ?
            <Lottie animationData={loder_2} />
            : status === 'error' &&
            <Lottie animationData={error} />
        }
        </div>
    </div>
  )
}

export default LotieHandel
