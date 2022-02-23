import './Projects.scss';
import codelab from '../../assets/img/codelab-ui.png';
import GULCDemo from '../GULCDemo';
import { useEffect } from 'react/cjs/react.development';
import NCubeDemo from '../NCubeDemo';


export default function Projects() {
    useEffect(() => {
        window.hljs.highlightAll();
    }, [])
    return (
        <section className='Projects' id='projects'>
            <div className='markdown-body'>
                <h1><a id="user-content-h2" className="anchor" href="#projects" aria-hidden="true"><span className="octicon octicon-link"></span></a>💡&nbsp; Projects</h1>
                <p>Here are some recent projects I've been working on...</p>
            </div>
            <div className='Projects__group'>
                <div className='Project markdown-body'>
                    <h2>Codelab</h2>
                    <div className='Project__content'>
                        <div className='Project__description'>
                            <p>A simple IDE / whiteboarding tool that allows users to write, debug, and execute programs collaboratively in 9 supported languages including Bash, C, C++, Java, JavaScript, Lua, Node.js, OCaml, & Python.</p>
                            <p>Codelab uses socket.io and node.js child processes to:</p>
                            <ul>
                                <li>Allow real-time program execution for all active users</li>
                                <li>Accept inputs via the command line <i>or</i> run-time STDIN</li>
                                <li>Provide standard collaborative tools such as live chat, collaborator cursors & highlighting, and custom display names</li>
                            </ul>
                            <div className='Project__cta'>
                                <a href="https://codelab-demo.herokuapp.com/" target="_blank">
                                    <button>
                                        <i className='icon'>public</i>
                                        <span>Demo</span>
                                    </button>
                                </a>
                                <a href="https://github.com/mhollingshead/codelab" target="_blank">
                                    <button>
                                        <i className="devicon-github-original"></i>
                                        <span>GitHub</span>
                                    </button>
                                </a>
                                <div className='Project__languages'>
                                    <i className="devicon-react-original"></i>
                                    <i className="devicon-nodejs-plain"></i>
                                    <i className="devicon-firebase-plain"></i>
                                    <i className="devicon-socketio-plain"></i>
                                    <i className="devicon-sass-plain"></i>
                                </div>
                            </div>
                        </div>
                        <div className='Project__image'>
                            <div style={{textAlign: 'center'}}>
                                <img src={codelab} alt="codelab UI" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='Project'>
                    <div className='markdown-body' style={{marginBottom: '1rem'}}>
                        <h2>GitHub User Linguist Chart</h2>
                    </div>
                    <div className='Project__content Project__content--reverse'>
                        <div className='Project__image'>
                            <GULCDemo />
                        </div>
                        <div className='Project__description markdown-body'>
                            <p>I wanted to learn more about browser extensions as well as dynamic SVG-generating APIs.</p>
                            <p> The result was GitHub User Linguist Chart: a tool that charts the languages used throughout user's repositories.</p>
                            <p>Users can either:</p>
                            <ul>
                                <li>Install the Chrome extension, which will automatically embed the chart as a profile section while they browse GitHub profiles, or</li>
                                <li>Use the public API, which dynamically generates the chart as an SVG for use in a GitHub user readme or anywhere on the web</li>
                            </ul>
                            <p>Feel free to see the extention sample or check out the <a>project page</a> on GitHub!</p>
                            <div className='Project__cta'>
                                <a href="https://github.com/mhollingshead/github-user-linguist-chart" target="_blank">
                                    <button>
                                        <i className="devicon-github-original"></i>
                                        <span>GitHub</span>
                                    </button>
                                </a>
                                <div className='Project__languages'>
                                    <i className="devicon-nodejs-plain"></i>
                                    <i className="devicon-express-original"></i>
                                    <i className="devicon-html5-plain"></i>
                                    <i className="devicon-css3-plain"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='Project markdown-body'>
                    <h2>NCube.js</h2>
                    <div className='Project__content'>
                        <div className='Project__description'>
                            <p>My fascination with higher dimensional geometry inspired me to start work on my first ever JS library: NCube.js.</p>
                            <p>I wanted the ability to dynamically generate vertices, edges, faces– any 0 to n-1 facets of an n-dimensional hypercube.</p>
                            <p>I also wanted to be able to perform basic operations on its vertices <i>(e.g. scalar multiplication, rotations over a list of axes, and projections into any dimension)</i> in order to dynamically generate animations like this example.</p>
                            <p>Though it is still a work in progress, it's capable of generating geometries for any dimension <i>(though performance suffers exponentially for dimensions &gt; 8)</i>.</p>
                            <p>If you're interested in contributing or just taking a look at the source code, feel free to check the project out on GitHub!</p>
                            <div className='Project__cta'>
                                <a>
                                    <button className='disabled'>
                                        <i className="devicon-github-original"></i>
                                        <span>GitHub</span>
                                    </button>
                                </a>
                                <div className='Project__languages'>
                                    <i className="devicon-nodejs-plain"></i>
                                    <i className="devicon-threejs-original"></i>
                                </div>
                            </div>
                        </div>
                        <div className='Project__image'>
                            <NCubeDemo />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}