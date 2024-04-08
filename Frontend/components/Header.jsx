import React, { useState, useEffect } from "react";
import Link from "next/link";
import Wrapper from "./Wrapper";
import Menu from "./Menu";
const Header = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [showCateMenu, setShowCatMenu] = useState(false);
    const [show, setShow] = useState("translate-y-0");
    const [lastScrollY, setLastScrollY] = useState(0);
    
    return (
        <header
         className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}>
            <Wrapper>
                <Link href="/"> {/* Add href prop with the target URL */}
                    
                        <img src="/logo.svg" className="w-[40px] md:w-[60px]"/> {/* Wrap img tag in an anchor tag */}
                  
                </Link>
                <Menu>
                    
                </Menu>
            </Wrapper>
        </header>
    );
};

export default Header;
