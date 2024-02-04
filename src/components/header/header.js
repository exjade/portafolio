import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import styles from './styles/header.module.css';
import Breadcrum from '../breadcrum/breadcrum';
import Paragraph from '../paragraph/paragraph';


function Header(props) {

    const {
        name,
        contact,
        home,
        about,
        projects,
        activePage,
        handleBreadcrumClick,
    } = props;


    return (
        <header className={`${styles.header} font-fira-code px-4`} >
            {/* LEFT SIDE: TITLE & NAVIGATION */}
            <div className='flex flex-row gap-20 h-full'>
                <span className='flex justify-center items-center'>
                    <Paragraph text={name} />
                </span>
                <div className='flex flex-row'>
                    <Link to={ROUTES.HOME}>
                        <Breadcrum
                            title={home}
                            type='left'
                            size='md'
                            activePage={activePage}
                            onClick={() => handleBreadcrumClick(`${home}`)}
                        />
                    </Link>
                    <Link to={ROUTES.ABOUT}>
                        <Breadcrum
                            title={about}
                            type='center'
                            size='xl'
                            activePage={activePage}
                            onClick={() => handleBreadcrumClick(`${about}`)}
                        />
                    </Link>
                    <Link to={ROUTES.PROJECTS}>
                        <Breadcrum
                            title={projects}
                            type='right'
                            size='md'
                            activePage={activePage}
                            onClick={() => handleBreadcrumClick(`${projects}`)}
                        />
                    </Link>
                </div>
            </div>
            <Breadcrum
                title={contact}
                type='left'
                size='md'
                activePage={activePage}
                onClick={() => handleBreadcrumClick(`${contact}`)}
            />
        </header>
    )
}
export default Header

Header.propTypes = {
    name: PropTypes.string,
    contact: PropTypes.string,
    home: PropTypes.string,
    about: PropTypes.string,
    projects: PropTypes.string,
    activePage: PropTypes.string,
    handleBreadcrumClick: PropTypes.func,
}