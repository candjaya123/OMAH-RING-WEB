import { useState, useEffect } from "react";
import { ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { NavLink, useLocation } from "react-router";
import MobileSheet from "./MobileSheet";
import DeliveryPopover from "./DeliveryPopover";

const LogoPath = "/logo.svg";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isInformationPage = location.pathname.startsWith("/information");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function getNavbarBackgroundClass(
    isScrolled: boolean,
    isInformationPage: boolean,
  ) {
    if (isScrolled) {
      return "bg-white/80 shadow-sm backdrop-blur-sm";
    }
    if (isInformationPage) {
      return "bg-white";
    }
    return "bg-transparent";
  }

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-50 flex w-full justify-between transition-all duration-300",
        getNavbarBackgroundClass(isScrolled, isInformationPage),
      )}
    >
      <div
        className={cn(
          "flex h-16 w-full items-center justify-between px-5",
          "md:px-28",
        )}
      >
        {/* Navigation Links */}
        <nav className="items-center gap-8 md:flex">
          <NavLink end to="/">
            <div className="relative size-10">
              <img src={LogoPath} />
            </div>
          </NavLink>
          <div className={cn("hidden gap-x-4", "md:flex")}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                cn(
                  "relative font-medium text-black",
                  "hover:text-primary",
                  "after:bg-primary after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:transform after:transition-transform after:duration-300 hover:after:scale-x-100",
                  isActive
                    ? "text-primary after:scale-x-100"
                    : "after:scale-x-0",
                )
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                cn(
                  "relative font-medium text-black",
                  "hover:text-primary",
                  "after:bg-primary after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:transform after:transition-transform after:duration-300 hover:after:scale-x-100",
                  isActive
                    ? "text-primary after:scale-x-100"
                    : "after:scale-x-0",
                )
              }
            >
              Shop
            </NavLink>
            <NavLink
              to="/information"
              className={({ isActive }) =>
                cn(
                  "relative font-medium text-black",
                  "hover:text-primary",
                  "after:bg-primary after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:transform after:transition-transform after:duration-300 hover:after:scale-x-100",
                  isActive
                    ? "text-primary after:scale-x-100"
                    : "after:scale-x-0",
                )
              }
            >
              Informasi
            </NavLink>
          </div>
        </nav>

        {/* Right Side - Delivery Cart & Explore Button */}
        <div
          className={cn("flex items-center justify-center gap-1", "md:gap-4")}
        >
          <DeliveryPopover />

          <NavLink to="/shop/checkout" className="relative p-2">
            <ShoppingCart
              className={cn("size-6 fill-black text-black", "md:size-8")}
            />
          </NavLink>
          <Button
            className={cn(
              "bg-primary hidden rounded-full px-6 text-white",
              "md:flex",
              isHomePage ? "" : "bg-app-dark-blue hover:bg-app-light-blue",
            )}
          >
            EXPLORE
          </Button>

          {/* Sheet buat mobile */}
          <MobileSheet />
        </div>
      </div>
    </header>
  );
}
