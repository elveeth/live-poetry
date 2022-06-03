import { useState } from 'react';
import { Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import MainLogo from '../app/assets/img/logo-lore.svg';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Navbar dark color='primary' sticky='top' expand='md'>           
            <NavbarBrand className='ms-5' href='/'>
                <img src ={MainLogo} alt='nucamp logo' className='float-start' />
                <h1 className='mt-2'>Poetry Notebook</h1>
            </NavbarBrand>
        </Navbar>
    )
}

export default Header;