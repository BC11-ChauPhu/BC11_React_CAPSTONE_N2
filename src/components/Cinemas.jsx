import React, { useEffect, useState } from 'react'
import { http } from '../services/config'
import CinemaScreeningDetail from './CinemaScreeningDetail'

const Cinemas = () => {
  const [cinema, setCinema] = useState([])
  useEffect(() => {
    http
      .get('/api/QuanLyRap/LayThongTinHeThongRap')
      .then((res) => {
        setCinema(res.data.content)
      })
      .catch((err => {

      }))
  }, [])
  const [state, setStatus] = useState([])
  useEffect(() => {
    if (cinema.length > 0) {
      setStatus(cinema[0].maHeThongRap)
    }
  }, [cinema])
  const setActive = (e) => {
    const closestLogoItem = e.target.closest('.logo-item')
    if (closestLogoItem.className === 'logo-item') {
      document.querySelectorAll('.logo-item').forEach((item) => {
        item.classList.remove('active')
      })
      closestLogoItem.classList.add('active')
    }
  }
  return (
    <section id='homeCinema'>
      <div className="container">
        <h3 className="title">cinemas</h3>
        <div className="homeCinema-content">
          <div className="logo-list">
            {cinema?.map((item, index) => {
              if (state === item.maHeThongRap) {
                return (
                  <div id={item.maHeThongRap} key={index} className="logo-item active" onClick={setActive}>
                    <img src={item.logo} alt="" />
                  </div>
                )
              }
              return (
                <div id={item.maHeThongRap} key={index} className="logo-item" onClick={setActive}>
                  <img src={item.logo} alt="" />
                </div>
              )
            })
            }
          </div>
          <CinemaScreeningDetail maHeThongRap={state} />
        </div>
      </div>
    </section>
  )
}

export default Cinemas