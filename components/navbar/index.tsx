import Link from "next/link";
import { ActiveLink } from "@/components";
import { Label } from "components-profile";
import styles from "./index.module.css";


export const navItems = [
  { path: "/about", text: "About" },
  { path: "/contact", text: "Contact" },
//   { path: "/", text: "Home" },
];

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <Link href="/" className={styles.home}>
        <Label text="Home" />
      </Link>
      <div className={styles.navigation}></div>
      {navItems.map((item) => (
        <ActiveLink key={item.path} {...item} />
      ))}
    </nav>
  );
};

export default Navbar;
