import React, { useEffect, useState } from 'react';
/* IMAGES */
import arrow from '../../assets/icon-arrow.svg'
import leftArrow from '../../assets/icon-angle-left.svg'
import rightArrow from '../../assets/icon-angle-right.svg'
import imageHero1 from '../../assets/desktop-image-hero-1.jpg'
import imageHero2 from '../../assets/desktop-image-hero-2.jpg'
import imageHero3 from '../../assets/desktop-image-hero-3.jpg'
import Navigation from '../navigation/navigation'
import './style.css';

const Homepage = () => {

    const initialData = [
        {
            title: "Discover innovative ways to decorate",
            image: imageHero1,
            text: "We provide unmatched queality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your prperty a reflection of you and what you love."
        },
        {
            title: "We are avaliable all across the globe",
            image: imageHero2,
            text: "With stores all over the world. it's easy for you to find furniture for your home or place of bussines. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
        },
        {
            title: "Manufactured with the best materials",
            image: imageHero3,
            text: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistente as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
        }
    ]

    const [data, setData] = useState(initialData);
    const [slideNumber, setSlideNumber] = useState(0);

    useEffect(() => {

        let sliders = document.querySelectorAll(".top-section")
        sliders[slideNumber].classList.add("current-slide")

    }, []);

    const nextSlide = (n) => {
        let slides = document.querySelectorAll(".top-section")
        let nextNumber = slideNumber + n

        if (nextNumber > slides.length - 1) {
            setSlideNumber(0)
            nextNumber = 0
        } else if (nextNumber < 0) {
            setSlideNumber(slides.length - 1)
            nextNumber = slides.length - 1
        } else {
            setSlideNumber(nextNumber)
        }        
        slides[slideNumber].classList.remove("current-slide")
        slides[nextNumber].classList.add("current-slide")
    }

    return (
        <div className="home-page">
            <Navigation />
            <div className="slide-wrapper">
            {
                data.map((item, index)=>(
                    <div className="top-section" key={index}>
                    <div className="main-img">
                        <img style={{content: 'url("'+item.image+'")'}} alt="" />
                    </div>
                    <section className="resume">
                        <div className="resume-content">
                            <h2>{item.title}</h2>
                            <p className="text">{item.text}</p>
                            <button>SHOP NOW <img src={arrow} alt="" /></button>
                        </div>
                        <div className="slider-actions">
                            <button onClick={() => { nextSlide(-1) }}><img src={leftArrow} alt="" /></button>
                            <button onClick={() => { nextSlide(1) }}><img src={rightArrow} alt="" /></button>
                        </div>
                    </section>
                </div>
                ))
            }
            </div>
            <div className="bottom-section">
                <div className="about-img-1">
                    <img alt="" />
                </div>
                <section className="about">
                    <div className="about-content">
                        <h3>ABOUT OUR FURNITURE</h3>
                        <p className="text">Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interest and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are avaliable to help you create your dream space.</p>
                    </div>
                </section>
                <div className="about-img-2">
                    <img alt="" />
                </div>
            </div>
        </div>
    );
}

export default Homepage;