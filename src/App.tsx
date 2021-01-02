import React from 'react'

import { Header } from './component/Header'
import { TopBar } from './component/TopBar'
import { SectionItem } from './component/types'

const App = () => {
    const sectionPortfolio = { id: 'portfolio', name: 'Portfolio' }
    const sectionTeam = { id: 'team', name: 'Team' }
    const sectionList: Array<SectionItem> = [sectionPortfolio, sectionTeam]

    return (
        <div>
            {/* <!-- ======= Top Bar ======= --> */}
            <TopBar mail='info@yazilim.vip' linkedinUrl='#' />
            <Header logo='Yazilim VIP' sectionList={sectionList} />

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
                                            To keep this platform open to
                                            everyone who is competent and
                                            willing to share what we call an
                                            open source world. A platform aimed
                                            at presenting our competencies to
                                            the open source world without
                                            waiting for a response.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default App
