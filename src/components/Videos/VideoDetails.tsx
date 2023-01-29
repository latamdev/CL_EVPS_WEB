import React, { FC } from 'react'
import { Details } from './interfaces';
import vidPlaceholder from '../../assets/images/video_placeholder.jpg'


const VideoDetails: FC<{details: Details}> = ({details}) => {
    return (
        <div className=''>
            <div>
                {/**<img src={vidPlaceholder} className="ml-auto mr-auto w-80 aspect-[3/2] rounded-lg object-cover object-top border border-gray-200" />*/}
                <iframe width="560" height="315" className='ml-0 w-full border-8 border-customYellow' src="https://www.youtube.com/embed/RGqAVLLtX14?start=1086" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            </div>
            <div className='mt-10'>{details.description}</div>
            <div className='mt-10 flex justify-center'><button className="btn-custom btn-primary btn-buy">Comprar ${details.price}</button></div>
        </div>
    )
}

export default VideoDetails;