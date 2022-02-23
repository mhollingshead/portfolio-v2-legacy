import './Nav.scss';

export default function Nav() {
    return (
        <nav className='Nav'>
            <div className='Nav__content'>
                <ul className='Nav__list'>
                    <li style={{height: '20px'}}><a className='icon' onClick={() => document.querySelector('.App').scrollTo(0, 0)}>arrow_circle_up</a></li>
                    <li className='mobile-hidden'><span className='Nav__divider'>•</span><a href="#about">About</a><span className='Nav__divider'>•</span></li>
                    <li className='mobile-hidden'><a href="#technologies">Technologies</a><span className='Nav__divider'>•</span></li>
                    <li className='mobile-hidden'><a href="#projects">Projects</a><span className='Nav__divider'>•</span></li>
                    <li className='mobile-hidden'><a href="#contact">Contact</a></li>
                </ul>
                {/* <div className='Nav__toggle'>
                    <div className='Nav__dot'></div>
                    <div className='icon' style={{fontSize: '0.6rem'}}>nightlight_round</div>
                </div> */}
                <div className='Nav__links'>
                    <a href="https://github.com/mhollingshead" target="_blank">
                        <i className="devicon-github-original devicon"></i>
                    </a> &nbsp;
                    <a href="https://www.linkedin.com/in/michael-hollingshead/" target="_blank">
                        <i className="devicon-linkedin-plain devicon"></i>
                    </a> &nbsp;
                    <a href="mailto:michael.hollingshead@mail.mcgill.ca">
                        <span className='icon'>email</span>
                    </a>
                </div>
            </div>
        </nav>
    );
}