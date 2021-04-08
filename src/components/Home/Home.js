import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
    const [meals, setMeals] = useState({});
    const [breakfast, setBreakfast] = useState(false)
    const [lunch, setLunch] = useState(true)
    const [dinner, setDinner] = useState(false)
    const handleBreakfast = () => {
        setBreakfast(true)
        setLunch(false)
        setDinner(false)
    }
    const handleLunch = () => {
        setLunch(true)
        setBreakfast(false)
        setDinner(false)
    }
    const handleDinner = () => {
        setDinner(true)
        setBreakfast(false)
        setLunch(false)
    }
    return (
        <div>
            <section className="search">
                <h1 className="text-center searchBox">Best Food waiting for your belly</h1>
                <div className="col-md-4 input-group m-auto w-50 pt-3">
                    <input type="text" name="" id="" placeholder="Search food items" className="form-control" />
                    <div class="input-group-append">
                        <button type="button" class="btn btn-danger" id="search-button">Search</button>
                    </div>
                </div>
            </section>
            <section className="container">
                <div className="foods">
                    <Link onClick={handleBreakfast} className="food">Breakfast</Link>
                    <Link onClick={handleLunch} className="food">Lunch</Link>
                    <Link onClick={handleDinner} className="food">Dinner</Link>
                </div>
            </section>
            <section>
                {
                    breakfast && (
                        <div className="container">
                            <h3>Breakfast</h3>
                        </div>
                    )
                }
                {
                    lunch && (
                        <div className="container">
                            <h3>Lunch</h3>
                        </div>
                    )
                }
                {
                    dinner && (
                        <div className="container">
                            <h3>Dinner</h3>
                        </div>
                    )
                }
            </section>
        </div>
    );
};

export default Home;