import React from 'react';
import './Header.css'
import logo from '../icon/logo.png'
import CustomLink from '../CustomLink/CustomLink';
const Header = () => {
    return (
        <div>


            <ul>
                <li><CustomLink class="active" to='/'>EKOK</CustomLink></li>
                <li><CustomLink class="" to='/Sb-office'>SB</CustomLink></li>
            </ul>


        </div>
    );
};

export default Header;