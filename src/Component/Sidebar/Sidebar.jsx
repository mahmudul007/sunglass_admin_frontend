import React, { useContext } from 'react'
import './Sidebar.css';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import PinOutlinedIcon from '@mui/icons-material/PinOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
export const Sidebar = () => {


    return (
        <>
            <div className="sidebar">
                <div className="top">
                    <span className='logo'>Admin Board</span>

                </div>
                <hr className='hr' />
                <div className="center">
                    <ul>
                        <div className="title">MAIN </div>
                        <li>
                            <DashboardOutlinedIcon className='icon' />
                            <span>Dashboard</span>
                        </li>
                        <div className="title">LIST</div>
                        <li >
                            <PersonOutlinedIcon className='icon' />
                            <span>Users</span>
                        </li>
                        <li>
                            <InventoryOutlinedIcon className='icon' />
                            <span>Products</span>
                        </li>
                        <li>
                            <BorderColorOutlinedIcon className='icon' />
                            <span>Orders</span>
                        </li>
                        <div className="title">USER </div>


                        <li>
                            <AccountCircleOutlinedIcon className='icon' />
                            <span>Profile</span>
                        </li>
                        <li>
                            <PinOutlinedIcon className='icon' />
                            <span>LogOut</span>
                        </li>
                    </ul>
                </div>

            </div>
        </>
    )
}
export default Sidebar
