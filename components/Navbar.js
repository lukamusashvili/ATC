
import Image from 'next/image';
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";



 <link
   rel="stylesheet"
   href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
   integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA=="
   crossorigin="anonymous"
   referrerpolicy="no-referrer"
 />



function Navbar({children}) {
 useEffect(() => {
   
      
 }); 

  const router = useRouter();
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light  my-navbar">
          <div className="container-fluid">
            <button
              className="navbar-toggler shadow-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li
                  className={`${
                    router.pathname == "/" ? "active" : ""
                  } ${`nav-link`}`}
                >
                  <Link href="/" className="nav-link">
                    Dashboard
                  </Link>
                </li>

                <li
                  className={`${
                    router.pathname == "/analytics" ? "active" : ""
                  } ${`nav-link`}`}
                >
                  <Link href="/analytics">Analytics</Link>
                </li>

                <li
                  className={`${
                    router.pathname == "/buttons" ? "active" : ""
                  } ${`nav-link`}`}
                >
                  <Link href="/buttons">Buttons</Link>
                </li>
                <li
                  className={`${
                    router.pathname == "/support" ? "active" : ""
                  } ${`nav-link`}`}
                >
                  <Link href="/">Support</Link>
                </li>
              </ul>
            </div>
            <div className="black-buttons navbar-brand">
              <div>
                <Image
                  src="/assets/draft.svg"
                  alt="draft"
                  width={12}
                  height={14}
                />
              </div>

              <div
                style={{
                  marginTop: 0,
                  marginRight: 10 + "px",
                  marginBottom: 0,
                  marginLeft: 4 + "px",
                }}
              >
                
                  <Image
                    src="/assets/settings.svg"
                    alt="settings"
                    width={12}
                    height={14}
                    // style={{ marginBottom: 5 + "px" }}
                  />
                
              </div>
              <div className="days-black-btn">
                <Image
                  src="/assets/clock.svg"
                  alt="clock"
                  width={12}
                  height={14}
                  className="aaa"
                />
                <span style={{ color: "#939393" }}>Days</span>: 23
              </div>
            </div>
          </div>
        </nav>

        {children}
      </div>
    );
}

export default Navbar
