import Reveal from '../Reveal.jsx';
import journey from '../../data/journey.js';
import './Journey.css';

export default function Journey() {
  return (
    <section className="section" id="journey">
      <div className="wrap">
        <Reveal className="sec-num">04</Reveal>
        <Reveal as="h2" className="sec-title">Journey</Reveal>
        <Reveal className="chron">
          {journey.map((step) => (
            <div className={`chron-row${step.isNow ? ' now' : ''}`} key={step.tag}>
              <span className="chron-tag">{step.tag}</span>
              <div>
                <div className="chron-title">{step.title}</div>
                <div className="chron-body">{step.body}</div>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
