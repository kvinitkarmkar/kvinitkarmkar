import Reveal from '../Reveal.jsx';
import './Masthead.css';

export default function Masthead() {
  return (
    <section className="masthead">
      <div className="wrap-wide">
        <Reveal className="mh-kicker" initiallyOn>A field note from the founder</Reveal>
        <div className="mh-grid">
          <Reveal initiallyOn>
            <h1 className="mh-title">Building the AI teacher I wish <em>I'd</em> had.</h1>
            <div className="mh-byline">
              <span>By <b>Vinit Kumar Karmkar</b></span><span>·</span><span>India, 2026</span>
            </div>
            <p className="mh-dek">A solo record of building KnoriX — an AI learning platform that adapts to how each student actually learns — from an Android phone, with no laptop and no team.</p>
            <div className="mh-actions">
              <a href="https://knorix.vercel.app/" target="_blank" rel="noopener" className="mh-btn">Visit KnoriX</a>
              <a href="https://github.com/kvinitkarmkar" target="_blank" rel="noopener" className="mh-text-link">@kvinitkarmkar on GitHub</a>
            </div>
          </Reveal>
          <Reveal className="mh-photo" initiallyOn>
            <div className="mh-photo-frame">
              <img src="https://avatars.githubusercontent.com/u/206856572?v=4" alt="Vinit Kumar Karmkar" />
            </div>
            <div className="mh-photo-cap">fig. 1 — India, 2026</div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
