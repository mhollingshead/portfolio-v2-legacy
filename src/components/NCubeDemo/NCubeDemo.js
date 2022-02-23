import { useState, useEffect } from 'react';
import { Hypercube } from './ncube';
import './NCubeDemo.scss';

const to2d = point => {
    const x = 200 + (point[0] * 80 || 0) + (point[2] * 80 / 2 || 0);
    const y = 200 + (point[1] * 80 || 0) - (point[2] * 80 / 2 || 0);
    return [x, y];
}

export default function NCubeDemo() {
    const [n, setN] = useState(5);
    const [svg, setSvg] = useState(null);
    const [rotationInterval, setRotationInterval] = useState(null);

    const handleOnChange = e => setN(e.target.value);

    const draw = (edge, cube) => {
        const v1 = [...cube.vertices[edge[0]]].splice(0, 2);
        const v2 = [...cube.vertices[edge[1]]].splice(0, 2);

        const p1 = to2d(v1);
        const p2 = to2d(v2);

        const line = svg.line(...p1, ...p2);
        line.stroke({ width: 1, color: 'white' })
    }

    const createNCube = () => {
        if (svg) {
            if (rotationInterval) clearInterval(rotationInterval);
        
            svg.clear();
            const cube = new Hypercube(n);

            const interval = setInterval(() => {
                try {
                    svg.clear();
                    cube.rotate(1/Math.PI**4);
                    cube.edgemap.forEach(edge => draw(edge, cube));
                } catch(e) {
                    console.log(e);
                    clearInterval(rotationInterval || interval);
                }
            }, 25);

            setRotationInterval(interval);
        }
    }

    useEffect(() => {
        const _svg = window.SVG().addTo(document.querySelector('.NCubeDemo__wrapper')).size(400, 400);
        setSvg(_svg);
    }, []);
    useEffect(() => createNCube(), [svg]);
    useEffect(() => createNCube(), [n]);

    return (
        <div className='NCubeDemo'>
            <form className='NCubeDemo__form'>
                <label htmlFor='n'><code>n</code></label>
                <input type="range" onChange={handleOnChange} value={n} min="2" max="7" name="n" id="n" />
            </form>
            <pre className='markdown-body'>
                <span className="pl-k">const</span> <span className="pl-s1">n</span> <span className="pl-c1">=</span> <span className="pl-c1">{n}</span><span className="pl-kos">;</span><br/>
                <span className="pl-k">const</span> <span className="pl-s1">cube</span> <span className="pl-c1">=</span> <span className="pl-k">new</span> <span className="pl-v">NCube</span><span className="pl-kos">(</span><span className="pl-s1">n</span><span className="pl-kos">)</span><span className="pl-kos">;</span><br/>
                <br/>
                <span className="pl-en">setInterval</span><span className="pl-kos">(</span><span className="pl-kos">(</span><span className="pl-kos">)</span> <span className="pl-c1">=&gt;</span> <span className="pl-kos">&#123;</span><br/>
                &nbsp;&nbsp;<span className="pl-s1">cube</span><span className="pl-kos">.</span><span className="pl-en">rotate</span><span className="pl-kos">(</span><span className="pl-c1">1</span> <span className="pl-c1">/</span> <span className="pl-v">Math</span><span className="pl-kos">.</span><span className="pl-c1">PI</span><span className="pl-c1">**</span><span className="pl-c1">4</span><span className="pl-kos">)</span><span className="pl-kos">;</span><br/>
                &nbsp;&nbsp;<span className="pl-s1">cube</span><span className="pl-kos">.</span><span className="pl-c1">edges</span><span className="pl-kos">.</span><span className="pl-en">forEach</span><span className="pl-kos">(</span><span className="pl-s1">edge</span> <span className="pl-c1">=&gt;</span> <span className="pl-en">draw</span><span className="pl-kos">(</span><span className="pl-s1">edge</span><span className="pl-kos">)</span><span className="pl-kos">)</span><span className="pl-kos">;</span><br/>
                <span className="pl-kos">&#125;</span><span className="pl-kos">,</span> <span className="pl-c1">25</span><span className="pl-kos">)</span><span className="pl-kos">;</span><br/>
            </pre>
            <div className='NCubeDemo__wrapper'></div>
        </div>
    );
}