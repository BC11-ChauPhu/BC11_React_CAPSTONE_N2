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
                console.log(res.data.content)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    return (
        <div id='movieDetail'>
            <div className="container">
                <div className="movieDetail-content">
                    <img src={movie.hinhAnh} alt="" />
                    <div>
                        <div>
                            <h2 className='movieDetail-name'>{movie.tenPhim}</h2>
                            <p>{movie.moTa}</p>
                            <p>Ratings: {movie.danhGia}</p>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>

            </div>
        </div>  
    )
}

export default MovieInfo