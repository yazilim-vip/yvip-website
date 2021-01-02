import React from 'react'
import { Footer } from './component/Footer'

import { Header } from './component/Header'
import { HeroSection } from './component/HeroSection'
import { PortfolioSection } from './component/PortfolioSection'
import { ScrollTop } from './component/ScrollTop'
import { TeamSection } from './component/TeamSection'
import { TopBar } from './component/TopBar'
import { SectionItem } from './types'

const App = () => {
    // constants
    const sectionPortfolio = { id: 'portfolio', name: 'Portfolio' }
    const sectionTeam = { id: 'team', name: 'Team' }
    const sectionList: Array<SectionItem> = [sectionPortfolio, sectionTeam]

    return (
        <>
            {/* <!-- ======= Top Bar ======= --> */}
            <TopBar mail='info@yazilim.vip' linkedinUrl='#' />
            <Header logo='Yazilim VIP' sectionList={sectionList} />
            <HeroSection
                title={
                    <>
                        Welcome to <span>Yazilim VIP</span>
                    </>
                }
                text={
                    <>
                        To keep this platform open to everyone who is competent
                        and willing to share what we call an open source world.
                        A platform aimed at presenting our competencies to the
                        open source world without waiting for a response.
                    </>
                }
                imageSource='assets/img/slide/slide-1.jpg'
            />

            <main id='main'>
                <PortfolioSection
                    items={[
                        {
                            title: 'App1',
                            description: 'First App',
                            imageSource: 'assets/img/portfolio/portfolio-1.jpg'
                        },
                        {
                            title: 'App2',
                            description: 'Second App',
                            imageSource: 'assets/img/portfolio/portfolio-2.jpg'
                        },
                        {
                            title: 'App3',
                            description: 'Last App',
                            imageSource: 'assets/img/portfolio/portfolio-3.jpg'
                        }
                    ]}
                />
                <TeamSection />
            </main>

            <Footer />
            <ScrollTop />
        </>
    )
}

export default App
