import Link from "next/link";
import styles from '../styles/Header.module.scss'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        <Link href="/">
          My Shoop
        </Link>
      </div>
      <div className={styles.header__searchbar}>
        <input type="text" name="search" placeholder="Search your product here..."/>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
