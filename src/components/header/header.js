import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import styles from './styles/header.module.css';
import Breadcrumb from '../breadcrum/breadcrumb';
import Paragraph from '../paragraph/paragraph';


function Header(props) {

    const {
        name,
        contact,
        home,
        about,
        projects,
        activePage,
        handleBreadcrumbClick,
    } = props;


    return (
        <header className={`${styles.header} font-fira-code px-4`} >
            {/* LEFT SIDE: TITLE & NAVIGATION */}
            <div className={`${styles.container}`}>
                <span className='flex justify-center items-center'>
                    <Paragraph text={name} />
                </span>
                <div className={`${styles['desktop-hidden']} flex flex-row`} >
                    <Link to={ROUTES.HOME}>
                        <Breadcrumb
                            title={home}
                            type='left'
                            size='md'
                            activePage={activePage}
                            onClick={() => handleBreadcrumbClick(`${home}`)}
                        />
                    </Link>
                    <Link to={ROUTES.ABOUT}>
                        <Breadcrumb
                            title={about}
                            type='center'
                            size='xl'
                            activePage={activePage}
                            onClick={() => handleBreadcrumbClick(`${about}`)}
                        />
                    </Link>
                    <Link to={ROUTES.PROJECTS}>
                        <Breadcrumb
                            title={projects}
                            type='right'
                            size='md'
                            activePage={activePage}
                            onClick={() => handleBreadcrumbClick(`${projects}`)}
                        />
                    </Link>
                </div> 

            </div>
            {/* RIGHT SIDE: CONTACT */}
            <div className={`${styles.container} ${styles['desktop-hidden']}`}>
                <Breadcrumb
                    title={contact}
                    type='left'
                    size='md'
                    activePage={activePage}
                    onClick={() => handleBreadcrumbClick(`${contact}`)}
                />
            </div>
            <div className={`${styles['menu-center']} ${styles['mobile-hidden']} ${styles.center}`}>
                <span className={`${styles.menu} material-symbols-rounded`}>
                    menu
                </span>
            </div>



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
    handleBreadcrumbClick: PropTypes.func,
}