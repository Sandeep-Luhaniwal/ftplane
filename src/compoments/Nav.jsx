import React, { useState } from 'react'
import { CrossIcon, MenuIcon, } from './Icon'
import { Link } from 'react-router-dom';
import MainLogo from '../assets/images/png/Main_logo.png'

const Nav = () => {
    const [menu, setMenu] = useState(false);
    return (
        <>
            <nav className='position-fixed z-100 w-100 top-0 bg_secondary'>
                <div className='myContainer'>
                    <div className='d-flex justify-content-between align-items-center py-20'>
                        <div className='gap-4 d-flex  opcity align-items-center'>
                            <img src={MainLogo} alt="mainlogo" className='' />
                        </div>
                        <div className={`${menu ? 'show-nav' : 'nav-fix'}`}>
                            <div className='d-md-none crossIconset'
                                onClick={() => setMenu(false)}>
                                <Link><CrossIcon /></Link>
                            </div>
                            <div className='d-flex gap-50 align-items-center'>
                                <a onClick={() => setMenu(false)} className='ff_primary line position-relative fs_sm color_white fw_regular' href='#travels'>All Flight</a>
                                <a onClick={() => setMenu(false)} className='ff_primary line position-relative fs_sm color_white fw_regular' href='#feature'>Schedule</a>
                                <a onClick={() => setMenu(false)} className='ff_primary line position-relative fs_sm color_white fw_regular' href='#passanger'>Passengers</a>
                                <a onClick={() => setMenu(false)} className='ff_primary line position-relative fs_sm color_white fw_regular' href='#order'>Your Orders</a>
                                <button onClick={() => setMenu(false)} className='inline-btn ff_primary position-relative fs_sm color_white fw_medium'>
                                    Let’s Fly
                                </button>
                            </div>
                        </div>
                        <div className='d-md-none'>
                            <Link onClick={() => setMenu(true)}>
                                <MenuIcon /></Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav