import React from 'react';
import styles from './styles/hero.module.css'
import ContainerMiddle from '../layout/container-mid';


function Hero() {
    return (
        <div className={`${styles['hero-container']} font-fira-code`}>
            <ContainerMiddle>
                <div className='flex flex-col justify-between items-start gap-20'>
                    {/* WHO I AM */}
                    <span className={`${styles['hero-left-section']}`}>
                        <p className={`${styles['hero-paragraph']}`} >Hi all. I am </p>
                        <h1 className={`${styles['hero-h1']}`}>Adrian Zamora</h1>
                        <h3 className={`${styles['hero-h2']}`}>&gt; Software Developer</h3>
                    </span>
                    {/* GITHUB LINK */}
                    <span className='flex flex-col gap-5 justify-start items-start'>
                        <p className={`${styles['hero-comment']}`}>
                            Find my profile on Github:
                        </p>
                        <span className={`${styles['hero-github-container']}`}>
                            <p>const</p>
                            <p>githubLink</p>
                            <p>=</p>
                            <a className={`${styles['hero-github-link']}`}
                                href='https://github.com/exjade'
                                target='_blank'
                                rel='noreferrer'
                            >'https://github.com/exjade'</a>
                        </span>
                    </span>
                </div>
            </ContainerMiddle>
            {/* <ContainerMiddle>

                <p className='text-white-normal'>Coming soon</p>

            </ContainerMiddle> */}
        </div>
    )
}

export default Hero;