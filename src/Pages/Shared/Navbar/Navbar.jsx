import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/content-king.svg";

const Navbar = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  return (
    <div>
      <header className="border-b-1 relative z-20 w-full border-b border-slate-200 bg-white/90 shadow-lg shadow-slate-700/5 after:absolute after:left-0 after:top-full after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden">
        <div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
          <nav
            aria-label="main navigation"
            className="flex h-[5.5rem] items-stretch justify-between font-medium text-slate-700"
            role="navigation"
          >
            {/*      <!-- Brand logo --> */}
            <a
              id="WindUI"
              aria-label="WindUI logo"
              aria-current="page"
              className="flex items-center gap-2 py-3 text-lg whitespace-nowrap focus:outline-none lg:flex-1"
              href="javascript:void(0)"
            >
              <img className="w-36" src={logo} alt="content_king_logo" />
            </a>
            {/*      <!-- Mobile trigger --> */}
            <button
              className={`relative order-10 block h-10 w-10 self-center lg:hidden
              ${
                isToggleOpen
                  ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(2)]:-rotate-45 [&_span:nth-child(3)]:w-0 "
                  : ""
              }
            `}
              onClick={() => setIsToggleOpen(!isToggleOpen)}
              aria-expanded={isToggleOpen ? "true" : "false"}
              aria-label="Toggle navigation"
            >
              <div className="absolute left-1/2 top-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
              </div>
            </button>
            {/*      <!-- Navigation links --> */}
            <ul
              role="menubar"
              aria-label="Select page"
              className={`absolute left-0 top-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0 lg:pt-0 lg:opacity-100 ${
                isToggleOpen
                  ? "visible opacity-100 backdrop-blur-sm"
                  : "invisible opacity-0"
              }`}
            >
              <li role="none" className="flex text-xl items-stretch">
                <NavLink
                  to="/"
                  role="menuitem"
                  aria-haspopup="false"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "active flex  items-center gap-2  text-[#ffcb05] "
                      : "flex items-center gap-2 py-4 hover:text-[#ffcb05] lg:px-8"
                  }
                  href="javascript:void(0)"
                >
                  <span>Home</span>
                </NavLink>
              </li>
              <li role="none" className="text-xl flex items-stretch">
                <NavLink
                  to="/shop"
                  role="menuitem"
                  aria-haspopup="false"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "active flex items-center gap-2 py-4 text-[#ffcb05]  rounded-2xl"
                      : "flex items-center gap-2 hover:text-[#ffcb05] py-4 lg:px-8"
                  }
                  href="javascript:void(0)"
                >
                  <span>Shop</span>
                </NavLink>
              </li>
            </ul>
            <div className="ml-auto  flex gap-3 items-center px-6 lg:ml-4 lg:p-0">
              <button className="px-6 hover:bg-[#ffcb05] py-2 bg-[#009b3e] rounded font-bold text-white ">
                যোগাযোগ
              </button>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
