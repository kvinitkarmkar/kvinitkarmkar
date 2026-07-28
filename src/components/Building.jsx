import Reveal from '../Reveal.jsx';
import './Building.css';

export default function Building() {
  return (
    <section className="section" id="building">
      <div className="wrap">
        <Reveal className="sec-num">02</Reveal>
        <Reveal as="h2" className="sec-title">Currently building</Reveal>
        <Reveal className="callout">
          <div className="callout-top">
            <div className="callout-name">Knori<em>X</em></div>
            <div className="callout-live"><span className="livedot"></span>Early access open</div>
          </div>
          <p className="callout-desc">An AI teacher that adapts to every student individually — a knowledge graph, an adaptive intelligence delivery network, and real-time learning intelligence, instead of a one-size-fits-all course.</p>
          <div className="callout-tags">
            <span>Knowledge Graphs</span><span>React Native</span><span>FastAPI</span><span>Vector Search</span><span>Adaptive Pedagogy</span>
          </div>
          <a href="https://knorix.vercel.app/" target="_blank" rel="noopener" className="mh-text-link">Read more about KnoriX →</a>
        </Reveal>
      </div>
    </section>
  );
}
