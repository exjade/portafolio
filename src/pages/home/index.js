import { useState } from 'react';
import { Header, Container, Wrapper, Footer, Hero } from '../../components';

function Home() {

    // Setea el estado inicial en la página de inicio
    const [activePage, setActivePage] = useState('')


    // Establece la página activa en el estado local
    const handleBreadcrumbClick = (page) => {
        setActivePage(page)
    }


    return (
        <Container>
            <Wrapper >
                <Header
                    name='Adrian Zamora'
                    contact='_contact-me'
                    home='_hello'
                    about='_about-me'
                    projects='_projects'
                    activePage={activePage}
                    handleBreadcrumbClick={handleBreadcrumbClick}
                />

                <Hero />

                <Footer
                    title='Find me in:'
                    github='@exjadee'
                    activePage={activePage}
                    handleBreadcrumbClick={handleBreadcrumbClick}
                />
            </Wrapper>
        </Container>
    )
}

export default Home;