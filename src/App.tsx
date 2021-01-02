import React from 'react'
import { Footer } from './component/Footer'

import { Header } from './component/Header'
import { HeroSection } from './component/HeroSection'
import { PortfolioSection } from './component/PortfolioSection'
import { ScrollTop } from './component/ScrollTop'
import { TeamSection } from './component/TeamSection'
import { TopBar } from './component/TopBar'
import { SectionItem } from './component/types'

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
            <HeroSection />

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
