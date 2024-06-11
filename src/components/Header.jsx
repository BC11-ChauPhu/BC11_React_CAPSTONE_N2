import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header className='navigation '>
            <div className="container">
                <div className="signin-and-search">
                    <div className="search">
                        <form className='search-form'>
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <span>
                                <i class="search-symbol fa-solid fa-magnifying-glass"></i>
                            </span>
                        </form>
                    </div>
                    <div className="sign-in">
                        <button>
                            <i class="fa-solid fa-arrow-right-to-bracket"></i>
                        </button>
                        <div className="user-group">
                            <button>
                                <i class="fa-solid fa-user"></i>
                            </button>
                            <span className='user-name'>Guest User</span>
                        </div>
                    </div>
                </div>
                <div className="quick-navigation">
                    <NavLink className='corp-logo' to='/home'>
                        <img src='../logo.svg' alt=""  />
                    </NavLink>
                    <div className="quick-links-list">
                        <ul>
                            <li className='line quick-links-item active'><NavLink to='/home'>home</NavLink></li>
                            <li className='line quick-links-item'><NavLink to='/home'>showing movies</NavLink></li>
                            <li className='line quick-links-item'><NavLink to='/home'>coming soon</NavLink></li>
                            <li className='line quick-links-item'><NavLink to='/home'>sign in</NavLink></li>
                            <li className='line quick-links-item'><NavLink to='/home'>sign up</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header >

    )
}

export default Header