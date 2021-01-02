export type HeroSectionType = {
    title: JSX.Element | string
    text: JSX.Element | string
    imageSource: string
}
export const HeroSection = ({ title, text, imageSource }: HeroSectionType) => (
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
                            backgroundImage: `url('${imageSource}')`
                        }}
                    >
                        <div className='carousel-container'>
                            <div className='carousel-content container'>
                                <h2 className='animate__animated animate__fadeInDown'>
                                    {title}
                                </h2>
                                <p className='animate__animated animate__fadeInUp'>
                                    {text}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)
