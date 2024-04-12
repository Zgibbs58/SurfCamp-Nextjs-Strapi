import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const navItems = [
    { href: "/", label: "the camp." },
    { href: "/experience", label: "the experience." },
    { href: "/blog", label: "the blog." },
  ];

  return (
    <header className="header">
      <Image className="header__logo" width={100} height={100} alt="logo" src={"/assets/logo.svg"}></Image>
      <ul className="header__nav">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link href={item.href}>
              <h5>{item.label}</h5>
            </Link>
          </li>
        ))}
      </ul>
      <button className="btn btn--black btn--small">BOOK NOW</button>
    </header>
  );
};

export default Header;
