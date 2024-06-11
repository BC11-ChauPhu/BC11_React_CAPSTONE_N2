import React, { useEffect, useState } from 'react'
import { http } from '../services/config'
import { useNavigate } from 'react-router-dom'

const CinemaScreeningDetail = ({ maHeThongRap }) => {
    const navigate = useNavigate()

    const [address, setAddress] = useState([])
    useEffect(() => {
        http
            .get(`/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}`)
            .then((res) => {
                setAddress(res.data.content)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const setActive = (e) => {
        const closestItem = e.target.closest('.cinema-address-item')
        const className = closestItem.className.replace(/\s/g, '')
        if (className === 'cinema-address-item') {
            document.querySelectorAll('.cinema-address-item').forEach((item) => {
                item.classList.remove('active')
            })
            closestItem.classList.add('active')
            setMaCumrap(closestItem.id)
        }
    }


    const [maCumRap, setMaCumrap] = useState([])
    useEffect(() => {
        if (maHeThongRap && address?.length > 0) {
            const initalCumRap = address.find((item) => item.maHeThongRap === maHeThongRap)?.lstCumRap[0].maCumRap
            setMaCumrap(initalCumRap)
        }
    }, [address])

    useEffect(() => {
        if (maHeThongRap && address?.length > 0) {
            const initalCumRap = address.find((item) => item.maHeThongRap === maHeThongRap)?.lstCumRap[0].maCumRap
            setMaCumrap(initalCumRap)
        }
    }, [maHeThongRap])


    return (
        <div className='cinemaScreeningDetail'>
            <div className="cinema-address">
                {address?.map((item, index) => {
                    if (item.maHeThongRap === maHeThongRap) {
                        return item.lstCumRap?.map((item, index) => {
                            return (
                                <div id={item.maCumRap} className={`cinema-address-item ${index === 0 ? 'active' : ''}`} onClick={setActive}>
                                    <div className="cinema-img" onClick={setActive}>
                                        <img src={item.hinhAnh} alt="" />
                                    </div>
                                    <div className="cinema-info" onClick={setActive}>
                                        <p>{item.diaChi}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                })}
            </div>
            <div className="movieByCinemaBranches">
                {address?.map((item, index) => {
                    if (item.maHeThongRap === maHeThongRap) {
                        return item.lstCumRap?.map((item, index) => {
                            if (item.maCumRap === maCumRap) {
                                return item.danhSachPhim?.map((item, index) => {
                                    return (
                                        <div className="movieByCinemaBranches-item" key={index}>
                                            <div className="movieByCinemaBranches-item-img" onClick={() => {
                                                navigate(`/movie-detail/${item.maPhim}`)
                                            }}>
                                                <img src={item.hinhAnh} alt="" />
                                            </div>
                                            <div className="movieByCinemaBranches-item-info">
                                                <p className='movieByCinemaBranches-movieName'>{item.tenPhim}</p>
                                                {item.lstLichChieuTheoPhim.slice(0,3)?.map((item, index) => {
                                                    return (
                                                        <p>{item.ngayChieuGioChieu}</p>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        })
                    }
                })}
            </div>
        </div>
    )
}

export default CinemaScreeningDetail