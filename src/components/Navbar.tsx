import Link from 'next/link';

export default function Navbar() {

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/">
            <button className="btn-logo">Foodbox</button>
          </Link>
        </li>

          <li>
            <Link href="/">
              <button className="btn-blue">Log in</button>
            </Link>
          </li>
      </ul>
    </nav>
  );
}
