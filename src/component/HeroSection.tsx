
export const HeroSection = () => (
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
                                    To keep this platform open to everyone who
                                    is competent and willing to share what we
                                    call an open source world. A platform aimed
                                    at presenting our competencies to the open
                                    source world without waiting for a response.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)
