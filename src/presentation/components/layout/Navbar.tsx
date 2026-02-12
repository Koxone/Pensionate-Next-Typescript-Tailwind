"use client";

import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { MenuIcon, CloseIcon } from "../ui/Icons";
import { Button } from "../ui/Button";
import { mainNavigation } from "@infrastructure/data/mockData";

export const Navbar: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const handleNavigation = (href: string) => {
    router.push(href);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
        <div className="navbar-container">
          {/* Logo */}
          <div
            className="navbar-logo max-w-[300px] cursor-pointer object-contain"
            onClick={() => handleNavigation("/")}
          >
            <img
              className="object-cover"
              src="/logo.webp"
              alt="Pensionate Logo"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="navbar-nav">
            {mainNavigation.map((item) => (
              <button
                key={item.href}
                className={`navbar-link ${pathname === item.href ? "navbar-link-active" : ""}`}
                onClick={() => handleNavigation(item.href)}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Actions */}
          <div className="navbar-actions">
            <Button
              variant="primary"
              size="sm"
              href="/contacto"
              className="hidden lg:inline-flex"
            >
              Agenda tu Cita
            </Button>

            {/* Mobile Menu Toggle */}
            <button
              className="navbar-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <CloseIcon size={24} />
              ) : (
                <MenuIcon size={24} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu ${isMobileMenuOpen ? "mobile-menu-open" : ""}`}
      >
        <div className="mobile-menu-nav">
          {mainNavigation.map((item) => (
            <button
              key={item.href}
              className={`mobile-menu-link ${pathname === item.href ? "mobile-menu-link-active" : ""}`}
              onClick={() => handleNavigation(item.href)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className="mobile-menu-divider" />
        <Button variant="primary" fullWidth href="/contacto">
          Agenda tu Cita
        </Button>
      </div>
    </>
  );
};

export default Navbar;
