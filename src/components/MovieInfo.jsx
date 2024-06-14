import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { http } from '../services/config'

const MovieInfo = () => {
    const { id } = useParams()
    const [movie, setMovie] = useState({})
    const [info, setInfo] = useState([])
    useEffect(() => {
        http
            .get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`)
            .then((res) => {
                setMovie(res.data.content)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    useEffect(() => {
        http
            .get(`/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`)
            .then((res) => {
                setInfo(res.data.content)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])


    const [state, setState] = useState([])
    useEffect(() => {
        if (info.heThongRapChieu?.length > 0) {
            setState(info.heThongRapChieu[0].maHeThongRap)
        }
    }, [info])
    const setActive = (e) => {
        const closestLogoItem = e.target.closest('.logo-item')
        const className = closestLogoItem.className.replace(/\s/g, '')
        if (className === 'logo-item') {
            document.querySelectorAll('.logo-item').forEach((item) => {
                item.classList.remove('active')
            })
            closestLogoItem.classList.add('active')
            setState(closestLogoItem.id)
        }
    }
    console.log(state)
    return (
        <div id='movieDetail'>
            <div className="container">
                <div className="movieDetail-content">
                    <div className="movieDetail-img">
                        <img src={movie.hinhAnh} alt="" />
                    </div>
                    <div className='movieDetail-info'>
                        <div>
                            <h2 className='movieDetail-name'>{movie.tenPhim}</h2>
                            <p>{movie.moTa}</p>
                            <p>Ratings: {movie.danhGia}</p>
                        </div>
                        <h3>showtimes</h3>
                        <div className='movieDetail-cinemas'>
                            <div className="logo-list">
                                {info.heThongRapChieu?.map((item, index) => {
                                    return (
                                        <div id={item.maHeThongRap} className={`logo-item ${item.maHeThongRap === state ? 'active' : ''}`} onClick={setActive}>
                                            <img src={item.logo} alt="" />
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="movieDetail-showtimes">
                                {info.heThongRapChieu?.map((item, index) => {
                                    if (item.maHeThongRap === state) {
                                        return item.cumRapChieu?.map((item, index) => {
                                            console.log(item)
                                            return (
                                                <div className='showtimes-location'>
                                                    <div className='showtimes-location-img'>
                                                        <img src={item.hinhAnh} alt="" />
                                                    </div>
                                                    <div className="showtimes-info">
                                                        <p className='cinema-name'>{item.tenCumRap}</p>
                                                        <p>{item.diaChi}</p>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                })}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MovieInfo