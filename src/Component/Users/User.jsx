import React from 'react'
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';
import './users.scss'
import { Datatable } from '../Datatable/Datatable';

const User = () => {
    return (
        <div className="list">
            <Sidebar />
            <div className="listContainer">
                <Navbar />
                <Datatable />
            </div>

        </div>
    )
}

export default User