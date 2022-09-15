import type { NextPage } from "next";
import Link from "next/link";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <nav>
        <div>
          <ul>
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
          </ul>
        </div>
        <div></div>
      </nav>

      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/user/overview">
          <a>overview</a>
        </Link>
      </div>
    </div>
  );
};

export default Home;
