import React from 'react';
import Chart from '../Chart/Chart';
import Featured from '../Featured/Featured';
import Navbar from '../Navbar/Navbar';
import { Sidebar } from '../Sidebar/Sidebar';
import List from '../Transaction/List';
import Widget from '../Widget/Widget';
import './Home.scss';

const Home = () => {

    return (
        <div className='home'>
            <Sidebar></Sidebar>
            <div className='homecontainer'>
                <Navbar></Navbar>

                <div className="widgets">
                    <Widget type='user' />
                    <Widget type='order' />
                    <Widget type='earning' />
                    <Widget type='balance' />
                </div>
                <div className="charts">
                    <Featured />
                    <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
                </div>
                <div className="lists">
                    <div className="listTitle">
                        Latest transaction
                    </div>
                    <List />
                </div>

            </div>

        </div>
    );
};

export default Home;