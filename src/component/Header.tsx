import { SectionItem } from '../types'

export type HeaderType = {
    logo: string
    sectionList: Array<SectionItem>
}
export const Header = ({ logo, sectionList }: HeaderType) => (
    <header id='header'>
        <div className='container'>
            <div className='logo float-left'>
                <h1 className='text-light'>
                    <a href='/'>
                        <span>{logo}</span>
                    </a>
                </h1>
            </div>
            <nav className='nav-menu float-right d-none d-lg-block'>
                <ul>
                    <li className='active'>
                        <a href='/'>Home</a>
                    </li>
                    {sectionList.map((section) => (
                        <li>
                            <a href={`#${section.id}`}>{section.name}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    </header>
)
