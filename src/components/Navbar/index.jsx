import { HiMenuAlt4, HiX, Logo } from "components";
import { motion, useState } from "libs";
import "./Navbar.scss";

const menuItems = ["home", "about", "work", "skills", "contact"];
export const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <Logo />
      <ul className="app__navbar-links">
        {menuItems.map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4
          onClick={() => {
            setToggle(true);
          }}
        />

        {toggle && (
          <motion.div
            whileInView={{ x: [260, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {menuItems.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    onClick={() => {
                      setToggle(false);
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};
