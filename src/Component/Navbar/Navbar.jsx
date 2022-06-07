import React from 'react'
import './Navbar.css';
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';


const Navbar = () => {
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder='search' />
                    <SearchOutlinedIcon className='icon' />
                </div>
                <div className="item">
                    <AccountCircleTwoToneIcon className='icon' />
                </div>
            </div>

        </div>
    )
}

export default Navbar