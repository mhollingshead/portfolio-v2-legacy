import './Header.scss';
import portrait from '../../assets/img/portrait.png';

export default function Header() {
    return(
        <header className='Header'>
            <div className='Header__panel'>
                <img src={portrait} alt="Michael's Head" />
            </div>
            <div className='Header__panel markdown-body'>
            <h1>Michael Hollingshead</h1>
            <p className='Header__badges'>
                <img src="https://img.shields.io/badge/tests-passing-success" /> &nbsp;
                <img src="https://img.shields.io/badge/commit%20activity-29%2Fmonth-informational" /> &nbsp;
                {/* <img src="https://img.shields.io/badge/license-since%202014%20%F0%9F%9A%97-yellow" /> &nbsp; */}
                <a href="https://github.com/mhollingshead" target="_blank">
                    <img src="https://img.shields.io/badge/GitHub--x.svg?style=social&logo=github" />
                </a> &nbsp;
                <a href="https://www.linkedin.com/in/michael-hollingshead/" target="_blank">
                    <img src="https://img.shields.io/badge/LinkedIn--x.svg?style=social&logo=linkedin" />
                </a> &nbsp;
                <a href="mailto:michael.hollingshead@mail.mcgill.ca">
                    <img src="https://img.shields.io/badge/Email--x.svg?style=social&logo=microsoft%20outlook" />
                </a>
            </p>
            <p>Hello! I'm Michael Hollingshead, a <b>full-stack developer</b> located in <b>Toronto, Ontario, Canada</b>. I love learning new technologies, finding elegant solutions to complex problems, and bringing wild ideas to life.</p>
            </div>
        </header>
    );
}