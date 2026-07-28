import useReveal from '../hooks/useReveal.js';

/**
 * Wraps any element/section so it fades + slides in the first time it
 * scrolls into view, matching the original site's `.reveal` / `.reveal.on` behaviour.
 */
export default function Reveal({ as: Tag = 'div', className = '', initiallyOn = false, children, ...rest }) {
  const [ref, on] = useReveal(initiallyOn);
  const classes = ['reveal', on ? 'on' : '', className].filter(Boolean).join(' ');

  return (
    <Tag ref={ref} className={classes} {...rest}>
      {children}
    </Tag>
  );
}
