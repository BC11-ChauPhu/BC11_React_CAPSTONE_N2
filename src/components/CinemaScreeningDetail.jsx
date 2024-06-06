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

    const setActive = (e) => {
        const closestItem = e.target.closest('.cinema-address-item')
        const className = closestItem.className.replace(/\s/g, '')
        if (className === 'cinema-address-item') {
            document.querySelectorAll('.cinema-address-item').forEach((item) => {
                item.classList.remove('active')
            })
            closestItem.classList.add('active')
            setState(closestItem.id)
        }
    }

    const [state, setState] = useState([])
    useEffect(() => {
        address?.map((item, index) => {
            if (item.maHeThongRap === maHeThongRap) {
                setState(item.lstCumRap[0].maCumRap)
            }
        })
    })

    return (
        <div className='cinemaScreeningDetail'>
            <div className="cinema-address">
                {address?.map((item, index) => {
                    if (item.maHeThongRap === maHeThongRap) {
                        return item.lstCumRap?.map((item, index) => {
                            console.log(item)
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
        </div>
    )
}

export default CinemaScreeningDetail