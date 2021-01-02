export const PortfolioSection = () => (
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
