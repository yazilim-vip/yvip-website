// ReactJS
import React from 'react'

// ---------------------------
//  External Dependencies
// ---------------------------
import { ConnectedRouter } from 'connected-react-router'
import { Switch, Route, Redirect } from 'react-router-dom'

// Bootstrap
import { Col, Navbar, Row } from 'react-bootstrap'

// Fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// ---------------------------
//  Internal Dependencies
// ---------------------------
// Styles
import 'yvip-website/App.scss'

// ---------------------------
//  Project Dependencies
// ---------------------------

// Components
import { CustomNavbar } from 'yvip-website/component'

// Pages
import {
    Home,
    Portfolio,
    HowToPage,
    About,
    NotFound,
    Community
} from 'yvip-website/page'

import { history } from 'yvip-website/redux'

library.add(fab)
library.add(fas)
library.add(far)

const App = () => (
    <ConnectedRouter history={history}>
        {/* HEADER */}
        <header>
            <CustomNavbar />
        </header>

        {/* BODY */}
        <main className='py-4'>
            <Col md='12'>
                <Row>
                    <Switch>
                        <Redirect
                            from='/:url*(/+)'
                            to={history.location.pathname.slice(0, -1)}
                        />
                        <Route exact path='/' component={Home} />
                        <Route path='/community' component={Community} />
                        <Route path='/portfolio' component={Portfolio} />
                        <Route path='/howto' component={HowToPage} />
                        <Route path='/about' component={About} />
                        <Route path='/404' component={NotFound} />
                        <Redirect to='/404' />
                    </Switch>
                </Row>
            </Col>
        </main>
    </ConnectedRouter>
)

export default App
