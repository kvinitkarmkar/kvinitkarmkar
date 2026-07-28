import Reveal from '../Reveal.jsx';
import work from '../../data/work.js';
import './Work.css';

export default function Work() {
  return (
    <section className="section" id="work">
      <div className="wrap">
        <Reveal className="sec-num">03</Reveal>
        <Reveal as="h2" className="sec-title">Selected work</Reveal>
        <Reveal className="index-list">
          {work.map((item) => (
            <div className="index-item" key={item.num}>
              <span className="index-num">{item.num}</span>
              <div>
                <div className="index-title">
                  <span className="idx-tag">{item.tag}</span>{item.title}
                </div>
                <p className="index-desc">{item.desc}</p>
                <div className="index-meta">{item.meta}</div>
              </div>
              <div className="index-link">
                {item.links.map((link) => (
                  <a href={link.href} target="_blank" rel="noopener" key={link.href}>{link.label}</a>
                ))}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
