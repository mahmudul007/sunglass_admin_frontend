import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import './form.scss';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

const Form = () => {

    const [file, setFile] = useState("");
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [categories, setCategories] = useState('');
    const [size, setSize] = useState('');
    const [color, setColor] = useState('');



    const handleSubmit = e => {
        e.preventdefault();
        if (!file) {
            return;
        }
        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        formData.append('price', price);
        formData.append('categories', categories);
        formData.append('size', size);
        formData.append('color', color);
        fetch('', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(result => {
                console.log('Success:', result);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }



    return (
        <div className="formnav">
            <Sidebar />
            <div className="formcontainer">
                <Navbar />
                <div className="tap">
                    <h1>Add new product</h1>

                </div>
                <div className="bottom">
                    <div className="left">
                        <img src={file ? URL.createObjectURL(file)
                            : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} alt="" />
                    </div>
                    <div className="right">
                        <form onSubmit={handleSubmit} action="">
                            <div className="formInput">
                                <label > Product name</label>
                                <input
                                    type="text"
                                    placeholder='product name'
                                    onChange={e => { setName(e.target.value) }}
                                />
                            </div>
                            <div className="formInput">
                                <label htmlFor="file"> Product image</label>
                                <input
                                    onChange={e => setFile(e.target.files[0])}
                                    type="file"
                                    id='file'
                                    placeholder='product name' />
                            </div>

                            <div className="formInput">
                                <label htmlFor=""> Description</label>
                                <input
                                    type="text"
                                    placeholder='description'
                                    onChange={e => { setDescription(e.target.value) }}
                                />
                            </div>
                            <div className="formInput">
                                <label htmlFor=""> categories</label>
                                <input
                                    type="text"
                                    placeholder='categories'
                                    onChange={e => { setCategories(e.target.value) }}

                                />
                            </div>
                            <div className="formInput">
                                <label htmlFor=""> size</label>
                                <input
                                    type="text"
                                    placeholder='size'
                                    onChange={e => { setSize(e.target.value) }}

                                />
                            </div>
                            {/* //title desc img categories  size color price inStock */}
                            <div className="formInput">
                                <label htmlFor=""> color</label>
                                <input
                                    type="text"
                                    placeholder='color'
                                    onChange={e => { setColor(e.target.value) }}

                                />
                            </div>
                            <div className="formInput">
                                <label htmlFor=""> Price</label>
                                <input
                                    type="number"
                                    placeholder='price'
                                    onChange={e => { setPrice(e.target.value) }}

                                />
                            </div>
                            {/* <div className="formInput">
                                <label > Instock</label>
                                <Checkbox
                                    id='input'
                                    className='input'
                                    onClick={e => { setInstock(e.target.value) }}


                                />

                            </div> */}
                            <Button className="button" type='submit' variant="contained">Submit</Button>


                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;