import Reveal from '../Reveal.jsx';
import './About.css';

export default function About() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <Reveal className="sec-num">01</Reveal>
        <Reveal as="h2" className="sec-title">About</Reveal>
        <Reveal className="article">
          <p>I started learning programming recently — no CS degree, no bootcamp, just building things until they worked. Then my laptop stopped working, and I couldn't afford to repair it.</p>
          <p>Instead of waiting, I moved the entire workflow onto an Android phone: <strong>GitHub for version control, AI coding tools for the heavy lifting, and a cloud pipeline for deployment.</strong> KnoriX has been built almost entirely this way.</p>
          <div className="pullquote">"I'd rather ship something real than wait for ideal conditions."</div>
          <p>
            Outside of KnoriX, I've been going deep on knowledge graphs — Neo4j, Cypher, GraphRAG — and shipped a domain-specific RAG tool for the mining industry that you can{' '}
            <a href="https://kvinitkarmkar.github.io/kyanite/" target="_blank" rel="noopener">try live here</a>. Most of what I know, I learned by publishing it in the open and letting it be wrong first.
          </p>
        </Reveal>
        <Reveal className="about-facts">
          <div className="fact"><div className="fact-k">Based in</div><div className="fact-v">India</div></div>
          <div className="fact"><div className="fact-k">Focus</div><div className="fact-v">Adaptive AI & knowledge graphs</div></div>
          <div className="fact"><div className="fact-k">Currently</div><div className="fact-v">Solo — building KnoriX</div></div>
        </Reveal>
      </div>
    </section>
  );
}
