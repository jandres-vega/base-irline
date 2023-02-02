import React from 'react';
import image_main from '../assets/images/image2.jpg';
import '../styles/Header.css';
import SectionFights from "./SectionFights";
const Header = () => {
    return (
        <header className="header-main">
            <figure className="img-header">
                <img src={image_main} alt={'image-header'}/>
            </figure>
            <SectionFights />
        </header>
    );
};

export default Header;