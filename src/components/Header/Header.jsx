import './Header.css';

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#building', label: 'Building' },
  { href: '#work', label: 'Work' },
  { href: '#journey', label: 'Journey' },
];

export default function Header() {
  return (
    <header>
      <nav>
        <a href="#top" className="brand">Vinit Karmkar</a>
        <ul className="navlinks">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        <span className="navmeta">FOUNDER — KNORIX</span>
      </nav>
    </header>
  );
}
