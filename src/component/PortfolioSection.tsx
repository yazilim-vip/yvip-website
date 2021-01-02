export type PortfolioSectionItemType = {
    title: string
    description: string
    imageSource: string
}

const PortfolioSectionItem = ({
    title,
    description,
    imageSource
}: PortfolioSectionItemType) => (
    <div className='col-lg-4 col-md-6 portfolio-item filter-app'>
        <div className='portfolio-wrap'>
            <img src={imageSource} className='img-fluid' alt='' />
            <div className='portfolio-info'>
                <h4>{title}</h4>
                <p>{description}</p>
                <div className='portfolio-links'>
                    <a
                        href={imageSource}
                        data-gall='portfolioGallery'
                        className='venobox'
                        title={title}
                    >
                        <i className='icofont-eye'></i>
                    </a>
                    <a href='portfolio-details.html' title='More Details'>
                        <i className='icofont-external-link'></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
)

export type PortfolioSectionType = {
    items: Array<PortfolioSectionItemType>
}
export const PortfolioSection = ({ items }: PortfolioSectionType) => (
    <section id='portfolio' className='portfolio section-bg'>
        <div className='container' data-aos='fade-up' data-aos-delay='100'>
            <div className='section-title'>
                <h2>Our Portfolio</h2>
            </div>

            <div className='row portfolio-container'>
                {items.map((each) => (
                    <PortfolioSectionItem
                        title={each.title}
                        description={each.description}
                        imageSource={each.imageSource}
                    />
                ))}
            </div>
        </div>
    </section>
)
