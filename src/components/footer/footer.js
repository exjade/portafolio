import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './styles/footer.module.css';
import Breadcrumb from '../breadcrum/breadcrumb';

function Footer(props) {

    const {
        title,
        github,
        activePage,
        handleBreadcrumbClick,
    } = props;

    return (
        <footer className={`${styles.footer} ${styles['hidden-mobile']}  font-fira-code`}>
            <div className={`${styles.container}`}>
                {/* ======= FIND ME IN: ICONS =======   */}
                <div className='flex flex-row'>
                    <Breadcrumb
                        title={title}
                        type='right'
                        size='md'
                        activePage={activePage}
                        onClick={() => handleBreadcrumbClick(`${title}`)}
                    />
                    <a href='https://twitter.com/Exjadee'
                        className={`${styles.icons}`}
                        target='_blank'
                        rel='noreferrer'
                    >
                        <img src="/assets/social-medias/Property 1=Twitter.png" alt="twitterIcon" />
                    </a>
                    <a href='https://github.com/exjade'
                        className={`${styles.icons}`}
                        target='_blank'
                        rel='noreferrer'
                    >
                        <img src="/assets/social-medias/Property 1=Facebook.png" alt="FacebookIcon" />
                    </a>
                </div>

                <a href='https://github.com/exjade'
                    className='flex flex-row'
                    target='_blank'
                    rel='noreferrer'
                >
                    <Breadcrumb
                        title={github}
                        type='left'
                        size='sm'
                        activePage={activePage}
                        onClick={() => handleBreadcrumbClick(`${github}`)}
                    />
                    <img src="/assets/social-medias/Property 1=Github.png" alt="GithubIcon" />
                </a>
            </div>
        </footer>
    )
}

export default Footer;

Footer.propTypes = {
    title: PropTypes.string,
    github: PropTypes.string,
    activePage: PropTypes.string,
    handleBreadcrumbClick: PropTypes.func,
}