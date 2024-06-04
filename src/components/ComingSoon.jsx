import React, { useEffect, useState } from 'react'
import { http } from '../services/config'

const ComingSoon = () => {
    const [movie, setMovie] = useState([])
    useEffect(()=> {
        http
           .get('/api/QuanLyPhim/LayDanhSachPhim')
           .then((res) => {
                setMovie(res.data.content)
            })
           .catch((err) => {
                console.log(err)
            })
    }, [])
    return (
        <section id="comingSoon">
            <div className="container">
                <h3 className="title">coming soon</h3>
                <div className="comingSoon-content">
                    {movie?.map((item, index) => {
                            return (
                                <div className='comingSoon-img'>
                                    <img src={item.hinhAnh} alt="" />
                                </div>
                            )
                    })}
                </div>
            </div>
        </section>
    )
}

export default ComingSoon