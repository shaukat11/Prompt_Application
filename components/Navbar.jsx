"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { set } from "mongoose";

const Navbar = () => {
  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  // useEffect(() => {
  //   const setProviders = async () => {
  //     const response = await getProviders();
  //     setProviders(response);
  //   };
  //   setProviders();
  // },[]);

  const userIsLoggedIn = true;
  const signOut = () => {
    alert("This is all working");
  };

  return (
    <nav className="w-full flex-between mb-10 pt-5">
      <Link href="/" className="flex flex-center gap-2">
        <Image
          src="assets/images/logo.svg"
          alt="Prompt Provider logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">Prompt App</p>
      </Link>

      {/* Desktop Navigation */}
      <div className="sm:flex hidden">
        {userIsLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn">
              Create Prompt
            </Link>

            <button type="button" onClick={signOut} className="outline_btn">
              Sign Out
            </button>

            <Link href="/profile">
              <Image
                src="assets/images/logo.svg"
                width={32}
                height={32}
                className="rounded-full"
                alt="Profile"
              />
            </Link>
          </div>
        ) : (
          // Generating Login Button's based on type of login Providers
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex relative">
        {userIsLoggedIn ? (
          <div className="flex">
            <Image
              src="assets/images/logo.svg"
              width={32}
              height={32}
              className="rounded-full"
              alt="Profile"
              onClick={() => setToggleDropdown((preState) => !preState)}
            />
            {toggleDropdown && (
              <div className="dropdown">
                <Link
                  href="/profile"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  My Profile
                </Link>
                <Link
                  href="/create-prompt"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  Create Prompt
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                    className="mt-5 w-full black_btn"
                  }}
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
