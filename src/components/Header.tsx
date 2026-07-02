"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navigation, ctas } from "@/content/navigation";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.toggleAttribute("data-drawer-open", open);
    return () => document.body.removeAttribute("data-drawer-open");
  }, [open]);

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Mentor To Marry home">
        <strong>
          Mentor <span>To</span> Marry
        </strong>
      </a>
      <nav className="desktop-nav" aria-label="Main navigation">
        {navigation.map((item) => (
          <a href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
        <a className="desktop-nav__start" href={ctas.primary.href}>
          {ctas.primary.label}
        </a>
      </nav>
      <button className="icon-button menu-button" type="button" onClick={() => setOpen(true)} aria-label="Open menu">
        <Menu size={22} aria-hidden />
      </button>
      <div className={`drawer ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <button className="icon-button drawer__close" type="button" onClick={() => setOpen(false)} aria-label="Close menu">
          <X size={22} aria-hidden />
        </button>
        <nav aria-label="Mobile navigation">
          {navigation.map((item) => (
            <a href={item.href} key={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a className="button button--primary" href={ctas.primary.href}>
            {ctas.primary.label}
          </a>
        </nav>
      </div>
    </header>
  );
}
