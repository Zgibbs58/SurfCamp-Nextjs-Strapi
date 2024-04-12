import React from "react";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  const navItems = [
    { href: "/", label: "the camp." },
    { href: "/experience", label: "the experience." },
    { href: "/blog", label: "the blog." },
    { href: "/events", label: "the events." },
  ];
  const policies = [
    { href: "/imprint", label: "imprint" },
    { href: "/tac", label: "Terms and Conditions" },
    { href: "/data-protection", label: "Data Protection" },
  ];

  return (
    <footer className="footer">
      <nav className="footer__nav">
        <Image className="footer__logo" width={100} height={100} src={"/assets/logo.svg"} alt="logo"></Image>
        <ul className="footer__links">
          {navItems.map((item) => (
            <li className="footer__links" key={item.href}>
              <Link href={item.href}>
                <h5>{item.label}</h5>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="footer__policies">
        <ul className="footer__policies-nav">
          {policies.map((policy) => (
            <li key={policy.href}>
              <Link href={policy.href}>
                <p className="copy">{policy.label}</p>
              </Link>
            </li>
          ))}
        </ul>
        <p className="copy">© Sam’s Surfcamp - all rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
