import React from 'react';
import '../../../styles/burger-menu.css'

const menuPoints = ['Home', 'News', 'About as', 'Our products', 'Our partners', 'Contacts']

const BurgerMenu = () => {
    const burgerMenuArr = menuPoints.map(item=><li className="burger-menu-item"><a href={item}>{item}</a></li> )

    return (
        <container className ='container-burger-menu'>
            <menu className="burger-menu">
                <label className="burger-menu-label" htmlFor="trigger">
                    <input className="burger-menu-input" id="trigger" type="checkbox"/>
                    <section className="drawer-list">
                        <ul className="menu-items">
                            {burgerMenuArr}
                        </ul>
                    </section>
                    <div className='hamburger'><i/></div>
                </label>
            </menu>
        </container>
    );
};

export default BurgerMenu;