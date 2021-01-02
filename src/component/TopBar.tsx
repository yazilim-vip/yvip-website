export type TopBarType = {
    mail: string
    linkedinUrl: string
}
export const TopBar = ({ mail, linkedinUrl }: TopBarType) => (
    <section id='topbar' className='d-none d-lg-block'>
        <div className='container clearfix'>
            <div className='contact-info float-left'>
                <i className='icofont-envelope'></i>
                <a href={`mailto:${mail}`}>{mail}</a>
            </div>
            <div className='social-links float-right'>
                <a href={linkedinUrl} className='linkedin'>
                    <i className='icofont-linkedin'></i>
                </a>
            </div>
        </div>
    </section>
)
