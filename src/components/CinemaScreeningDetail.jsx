import React, { useEffect, useState } from 'react'
import { http } from '../services/config'

const CinemaScreeningDetail = ({ maHeThongRap }) => {
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

    return (
        <div className='cinemaScreeningDetail'>
            <div className="cinema-address">
                {address?.map((item, index) => {
                    if (item.maHeThongRap === maHeThongRap) {
                        return item.lstCumRap?.map((item, index) => {
                            console.log(item)
                            return (
                                <div className={`cinema-address-item ${index === 0 ? 'active' : ''}`}>
                                    <div className="cinema-img">
                                        <img src={item.hinhAnh} alt="" />
                                    </div>
                                    <div className="cinema-info">
                                        <p>{item.diaChi}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                })}
            </div>
            <div className="cinema-address-movie"></div>
        </div>
    )
}

export default CinemaScreeningDetail