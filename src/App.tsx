import React from 'react'

import { Header } from './component/Header'
import { TopBar } from './component/TopBar'
import { SectionItem } from './component/types'

const App = () => {
    // constants
    const sectionPortfolio = { id: 'portfolio', name: 'Portfolio' }
    const sectionTeam = { id: 'team', name: 'Team' }
    const sectionList: Array<SectionItem> = [sectionPortfolio, sectionTeam]

    // render methods
    const renderHeroSection = () => (
        <section id='hero'>
            <div className='hero-container'>
                <div
                    id='heroCarousel'
                    className='carousel slide carousel-fade'
                    data-ride='carousel'
                >
                    <ol
                        className='carousel-indicators'
                        id='hero-carousel-indicators'
                    ></ol>

                    <div className='carousel-inner' role='listbox'>
                        <div
                            className='carousel-item active'
                            style={{
                                backgroundImage:
                                    "url('assets/img/slide/slide-1.jpg')"
                            }}
                        >
                            <div className='carousel-container'>
                                <div className='carousel-content container'>
                                    <h2 className='animate__animated animate__fadeInDown'>
                                        Welcome to <span>Yazılım VIP</span>
                                    </h2>
                                    <p className='animate__animated animate__fadeInUp'>
                                        To keep this platform open to everyone
                                        who is competent and willing to share
                                        what we call an open source world. A
                                        platform aimed at presenting our
                                        competencies to the open source world
                                        without waiting for a response.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

    const renderPortfolioSection = () => (
        <section id='portfolio' className='portfolio section-bg'>
            <div className='container' data-aos='fade-up' data-aos-delay='100'>
                <div className='section-title'>
                    <h2>Our Portfolio</h2>
                </div>

                <div className='row portfolio-container'>
                    <div className='col-lg-4 col-md-6 portfolio-item filter-app'>
                        <div className='portfolio-wrap'>
                            <img
                                src='assets/img/portfolio/portfolio-1.jpg'
                                className='img-fluid'
                                alt=''
                            />
                            <div className='portfolio-info'>
                                <h4>App 1</h4>
                                <p>App</p>
                                <div className='portfolio-links'>
                                    <a
                                        href='assets/img/portfolio/portfolio-1.jpg'
                                        data-gall='portfolioGallery'
                                        className='venobox'
                                        title='App 1'
                                    >
                                        <i className='icofont-eye'></i>
                                    </a>
                                    <a
                                        href='portfolio-details.html'
                                        title='More Details'
                                    >
                                        <i className='icofont-external-link'></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-4 col-md-6 portfolio-item filter-web'>
                        <div className='portfolio-wrap'>
                            <img
                                src='assets/img/portfolio/portfolio-2.jpg'
                                className='img-fluid'
                                alt=''
                            />
                            <div className='portfolio-info'>
                                <h4>Web 3</h4>
                                <p>Web</p>
                                <div className='portfolio-links'>
                                    <a
                                        href='assets/img/portfolio/portfolio-2.jpg'
                                        data-gall='portfolioGallery'
                                        className='venobox'
                                        title='Web 3'
                                    >
                                        <i className='icofont-eye'></i>
                                    </a>
                                    <a
                                        href='portfolio-details.html'
                                        title='More Details'
                                    >
                                        <i className='icofont-external-link'></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-4 col-md-6 portfolio-item filter-app'>
                        <div className='portfolio-wrap'>
                            <img
                                src='assets/img/portfolio/portfolio-3.jpg'
                                className='img-fluid'
                                alt=''
                            />
                            <div className='portfolio-info'>
                                <h4>App 2</h4>
                                <p>App</p>
                                <div className='portfolio-links'>
                                    <a
                                        href='assets/img/portfolio/portfolio-3.jpg'
                                        data-gall='portfolioGallery'
                                        className='venobox'
                                        title='App 2'
                                    >
                                        <i className='icofont-eye'></i>
                                    </a>
                                    <a
                                        href='portfolio-details.html'
                                        title='More Details'
                                    >
                                        <i className='icofont-external-link'></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

    return (
        <div>
            {/* <!-- ======= Top Bar ======= --> */}
            <TopBar mail='info@yazilim.vip' linkedinUrl='#' />
            <Header logo='Yazilim VIP' sectionList={sectionList} />
            {renderHeroSection()}

            <main id='main'>{renderPortfolioSection()}</main>
        </div>
    )
}

export default App
