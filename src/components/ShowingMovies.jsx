import React, { useEffect, useState } from 'react'
import { http } from '../services/config'

const ShowingMovies = () => {
    const [movie, setMovie] = useState([])
    let activeIndex = 0
    useEffect(() => {
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
        <section id='showingMovies'>
            <div className="container">
                <h3 className='title'>showing movies</h3>
                <div id="showingMoviesCarousel" className="carousel slide" data-ride="carousel">
                    {/* <ol className="carousel-indicators">
                        <li data-target="#showingMoviesCarousel" data-slide-to={0} className="active" />
                        <li data-target="#showingMoviesCarousel" data-slide-to={1} />
                        <li data-target="#showingMoviesCarousel" data-slide-to={2} />
                        <li data-target="#showingMoviesCarousel" data-slide-to={3} />
                    </ol> */}
                    <div className="carousel-inner">
                        {movie?.map((item, index) => {
                            if (item.dangChieu === true && activeIndex === 0) {
                                activeIndex++
                                return (
                                    <div className='carousel-item active'>
                                        <div className="showingMovie-wrapper">
                                            <div className="showingMovie-img">
                                                <img src={item.hinhAnh} alt="" />
                                            </div>
                                            <div className="showingMovie-info">
                                                <p className='showingMovie-name'>{item.tenPhim}</p>
                                                <p>{item.moTa}</p>
                                                <p>Ratings: {item.danhGia}</p>
                                                <button className='btn btn-primary'>Buy Ticket</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                            if (item.dangChieu === true) {
                                return (
                                    <div className="carousel-item">
                                        <div className="showingMovie-wrapper">
                                            <div className="showingMovie-img">
                                                <img src={item.hinhAnh} alt="" />
                                            </div>
                                            <div className="showingMovie-info">
                                                <p className='showingMovie-name'>{item.tenPhim}</p>
                                                <p>{item.moTa}</p>
                                                <p>Ratings: {item.danhGia}</p>
                                                <button className='btn btn-primary'>Buy Ticket</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        })}
                    </div>
                    <button className="carousel-control-prev" type="button" data-target="#showingMoviesCarousel" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="sr-only">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-target="#showingMoviesCarousel" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="sr-only">Next</span>
                    </button>
                </div>

            </div>
        </section>
    )
}

export default ShowingMovies