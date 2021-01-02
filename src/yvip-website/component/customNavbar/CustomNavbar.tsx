import React from 'react'

// ---------------------------
//  External Dependencies
// ---------------------------
import { NavLink } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'

// ---------------------------
//  Project Dependencies
// ---------------------------
import { VipIcon } from 'yvip-website/component'

// ---------------------------
//  Module Internal Dependencies
// ---------------------------
import 'yvip-website/component/customNavbar/CustomNavbar.scss'

export const CustomNavbar = () => {
    return (
        <Navbar
            collapseOnSelect
            expand='lg'
            bg='dark'
            variant='dark'
            className='text-center'
        >
            <div className='animate__animated animate__flipInX'>
                <Navbar.Brand className='my-2'>
                    <a href='/'>
                        <img alt='' src='/logo.svg' width='220' />
                    </a>
                </Navbar.Brand>
            </div>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
                <Nav className='mx-auto page-nav'>
                    <NavLink
                        exact
                        activeClassName='active'
                        className='text-light nav-link'
                        to='/'
                    >
                        Home
                    </NavLink>

                    <NavLink
                        activeClassName='active'
                        className='text-light nav-link'
                        to='/community'
                    >
                        Community
                    </NavLink>

                    <NavLink
                        activeClassName='active'
                        className='text-light nav-link'
                        to='/portfolio'
                    >
                        Portfolio
                    </NavLink>

                    <NavLink
                        activeClassName='active'
                        className='text-light nav-link'
                        to='/howto'
                    >
                        HowTo
                    </NavLink>

                    <NavLink
                        activeClassName='active'
                        className='text-light nav-link'
                        to='/about'
                    >
                        About
                    </NavLink>
                </Nav>
                <Nav>
                    <span className='text-light nav-link'>
                        <VipIcon
                            iconCode='gitlab'
                            className='animate__animated animate__zoomInLeft'
                            link='https://gitlab.com/yazilim.vip'
                        />
                        <VipIcon
                            iconCode='github'
                            className='animate__animated animate__zoomInLeft'
                            link='https://github.com/yazilim-vip'
                        />
                        <VipIcon
                            iconCode='bitbucket'
                            className='animate__animated animate__zoomInLeft'
                            link='https://bitbucket.org/yazilimvip/'
                        />
                        <VipIcon
                            iconCode='docker'
                            className='animate__animated animate__zoomInLeft'
                            link='https://hub.docker.com/orgs/yazilimvip/repositories'
                        />
                        <VipIcon
                            iconCode='linkedin'
                            className='animate__animated animate__zoomInLeft'
                            link='https://www.linkedin.com/company/yazilimvip'
                        />
                        <VipIcon
                            iconCode='medium'
                            className='animate__animated animate__zoomInLeft'
                            link='https://medium.com/yazilim-vip'
                        />
                        <VipIcon
                            iconCode='discord'
                            className='animate__animated animate__zoomInLeft'
                            link=''
                        />
                    </span>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
