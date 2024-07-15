import { ActiveLink } from "@/components";
import styles from "./index.module.css";


export const navItems = [
  { path: "/about", text: "About" },
  { path: "/contact", text: "Contact" },
//   { path: "/", text: "Home" },
];

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.navigation}></div>
      {navItems.map((item) => (
        <ActiveLink key={item.path} {...item} />
      ))}
    </nav>
  );
};

export default Navbar;
