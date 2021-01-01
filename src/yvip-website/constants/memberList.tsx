import React from 'react'
import { PersonCardProps } from 'yvip-website/component'

export const TEAM_MEMBER_LIST: PersonCardProps[] = [
    {
        name: 'Mehmet Arif Emre Sen',
        description: (
            <>
                <a
                    className='d-block text-center'
                    href='https://maemresen.github.io'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <b>Personal Website</b>
                </a>
            </>
        ),
        imageSource:
            'https://avatars2.githubusercontent.com/u/17517090?s=460&u=a0e442b6913f827d2e51e00abe143b2dbc375f33&v=4',
        cvSource: undefined,
        title: 'Major Contributor',
        links: undefined
    },
    {
        name: 'Burak Erkan',
        description: (
            <div>
                <span>yazilim.vip patriot</span>
                <ul>
                    <li>
                        2008 - now (software developer & team lead & manager)
                    </li>
                    <li>2000 - now (still a software amateur)</li>
                </ul>
            </div>
        ),
        imageSource: '/img/burak.jpeg',
        cvSource: undefined,
        title: 'Major Contributor',
        links: undefined
    },
    {
        name: 'Mustafa Arif Sisman',
        title: 'Major Contributor',
        description: (
            <>
                <ul>
                    <li>
                        I aim to achieve the most automated and optimized result
                        possible, following the principles of agile software
                        development and analytical thinking.
                    </li>
                    <li>
                        I work in the field of artificial intelligence and web
                        technologies, I am an active learner.
                    </li>
                </ul>
            </>
        ),
        imageSource: '/img/arif.jpeg',
        cvSource: 'https://arifsisman.github.io',
        links: {
            gitlab: 'https://gitlab.com/arifsisman',
            github: 'https://github.com/arifsisman',
            medium: 'https://medium.com/@arifsisman',
            linkedin: 'https://www.linkedin.com/in/mustafaarifsisman'
        }
    }
]