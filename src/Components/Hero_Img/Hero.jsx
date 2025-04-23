import React from 'react'
import hero from "../../assets/Images/money heist1.jpg"
import "./Hero.css"
import { Info, Play, PlayIcon } from 'lucide-react'

const Hero = () => {
    return (
        <>
            <div className="Hero ">
                <div className="info   ms-md-5 container  py-2">
                    <div className="info-top d-flex align-items-center gap-3 mb-5">
                        <h3 className='fs-2 fw-bold text-white'>Movies</h3>
                        <select name="movieType" id="movieType">
                            <option value="">Select Type</option>
                            <option value="action">Action</option>
                            <option value="adventure">Adventure</option>
                            <option value="animation">Animation</option>
                            <option value="comedy">Comedy</option>
                            <option value="crime">Crime</option>
                            <option value="drama">Drama</option>
                            <option value="fantasy">Fantasy</option>
                            <option value="historical">Historical</option>
                            <option value="horror">Horror</option>
                            <option value="musical">Musical</option>
                            <option value="mystery">Mystery</option>
                            <option value="romance">Romance</option>
                            <option value="sci-fi">Sci-Fi</option>
                            <option value="thriller">Thriller</option>
                            <option value="war">War</option>
                            <option value="western">Western</option>
                            <option value="documentary">Documentary</option>
                        </select>
                    </div>
                    <div className="info-bottom">
                        <h1 className='title text-uppercase text-white'>Money Heist</h1>
                        <h3 className=' mb-4 fw-bold mt-0 text-white'>Volume 2</h3>
                        <div className="desc text-white-50 ">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod beatae deserunt delectus aliquid, provident consequuntur rerum laudantium laborum sint nisi.
                        </div>
                        <div className="buttons d-flex gap-3 pt-4">
                            <div className="d-flex gap-1 align-items-center btn btn-outline-success text-white"><span><PlayIcon size={18} /> </span> <span className='fw-semibold play'>Play</span></div>
                            <div className="d-flex gap-1 align-items-center btn btn-outline-secondary text-white"><span><Info size={18} /> </span>  <span className='fw-semibold info'> Info</span></div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero