import { useState } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import MainLogo from '../app/assets/img/logo-lore.svg';

const Header = () => {

    return (
        <Navbar dark sticky='top' expand='md'>           
            <NavbarBrand className='ms-5' href='/'>
                <img src ={MainLogo} alt='main logo' className='float-start' />
                <h1 className='mt-2'>Poetry Notebook</h1>
            </NavbarBrand>
        </Navbar>
    )
}

export default Header;