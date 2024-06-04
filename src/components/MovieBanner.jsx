import React, { useEffect, useState } from 'react'
import { http } from '../services/config'


const MovieBanner = () => {
    const [movie, setMovie] = useState([])
    useEffect(() => {
        http
            .get("/api/QuanLyPhim/LayDanhSachBanner")
            .then((res) => {
                setMovie(res.data.content)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <section id="movieBanner">
            <div id="MovieBanner" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#MovieBanner" data-slide-to={0} className="active" />
                    <li data-target="#MovieBanner" data-slide-to={1} />
                    <li data-target="#MovieBanner" data-slide-to={2} />
                </ol>
                <div className="movie-banner-inner carousel-inner">
                    {movie?.map((item, index) => {
                        if (index === 0) {
                            return (
                                <div key={index} className="movie-banner-item carousel-item active" style={{ backgroundImage: `url('${item.hinhAnh}')` }}></div>
                            )
                        }
                        if (index > 0) {
                            return (
                                <div key={index} className="movie-banner-item carousel-item" style={{ backgroundImage: `url('${item.hinhAnh}')` }}></div>
                            )
                        }
                    })}

                </div>
                <button className="carousel-control-prev" type="button" data-target="#MovieBanner" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-target="#MovieBanner" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                </button>
            </div>
        </section>

    )
}

export default MovieBanner