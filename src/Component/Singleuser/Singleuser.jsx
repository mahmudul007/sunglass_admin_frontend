import React from 'react'
import './Singleuser.scss';
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';
import Chart from '../Chart/Chart';
import { Datatable } from '../Datatable/Datatable';
import List from '../Transaction/List';
import { Button } from '@mui/material';
const Singleuser = () => {
    return (
        <div className="singleuser">
            <Sidebar />
            <div className="singlecontainer">
                <Navbar />
                <div className="tap">
                    <div className="left">

                        <h1 className="title">Information</h1>
                        <div className="item">
                            <img src="https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className='itemimage' alt="" />
                            <div className="details">
                                <div className="itemTitle">Rafiq</div>
                                <div className="detailItem">
                                    <span className="itemKey">Email:</span>
                                    <span className="itemValue">janedoe@gmail.com</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Phone:</span>
                                    <span className="itemValue">01356454</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Address:</span>
                                    <span className="itemValue"> <address> Kuril kuratoli</address></span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Country:</span>
                                    <span className="itemValue">Bangladesh</span>
                                </div>
                                <div className='bttn'>
                                    <Button >Edit</Button>
                                </div>
                            </div>

                        </div>


                    </div>
                    <div className="right">
                        <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
                    </div>

                </div>
                <div className="bottom">
                    <h1 className='titlebottom'>Last Transaction</h1>


                </div>
                <List />

            </div>
        </div>
    )
}

export default Singleuser