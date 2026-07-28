import Reveal from '../Reveal.jsx';
import social from '../../data/social.js';
import './Connect.css';

export default function Connect() {
  return (
    <section id="connect">
      <div className="wrap">
        <Reveal className="sec-num">05</Reveal>
        <Reveal as="h2" className="connect-title">Get in <em>touch.</em></Reveal>
        <Reveal as="p" className="connect-sub">Building, hiring, investing, or just curious how KnoriX works — I read everything.</Reveal>
        <Reveal className="connect-links">
          {social.map((link, i) => (
            <span key={link.href}>
              <a href={link.href} target="_blank" rel="noopener">{link.label}</a>
              {i < social.length - 1 && <span className="sep">·</span>}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
