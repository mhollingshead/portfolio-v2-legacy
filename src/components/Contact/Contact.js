import './Contact.scss';

export default function Contact() {
    return (
        <section className='Contact markdown-body' id="contact">
            <h1><a id="user-content-h2" className="anchor" href="#contact" aria-hidden="true"><span className="octicon octicon-link"></span></a>📝&nbsp; Contact</h1>
            <p>If you feel like reaching out for any reason at all, here's where you can find me!</p>
            <ul>
                <li>
                    <div className='Contact__head'>
                        <i className="devicon-github-original devicon"></i>
                        <a href="https://github.com/mhollingshead" target="_blank">GitHub</a>
                    </div>
                    <code>mhollingshead</code>
                </li>
                <li>
                    <div className='Contact__head'>
                        <i className="devicon-linkedin-plain devicon"></i>
                        <a href="https://www.linkedin.com/in/michael-hollingshead/">LinkedIn</a>
                    </div>
                    <code>michael-hollingshead</code>
                </li>
                <li>
                    <div className='Contact__head'>
                        <span className='icon'>email</span>
                        <a href="mailto:michael.hollingshead@mail.mcgill.ca">Email</a>
                    </div>
                    <code>michael.hollingshead@mail.mcgill.ca</code>
                </li>
            </ul>
        </section>
    );
}