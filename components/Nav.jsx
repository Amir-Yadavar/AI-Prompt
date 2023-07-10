"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  const isUserLoggedIn = true;

  const [provider, setProvider] = useState(null);
  const [toggleDropDown, setToggleDropDown] = useState(false);

  useEffect(() => {
    const insProvider = async () => {
      const respone = await getProviders();

      setProvider(respone);
    };

    insProvider();

    console.log(provider);
  }, []);

  const singOut = () => {
  alert('ok')
  };

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href={"/"} className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          alt="amir-yadavar"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">Amir Yadavar</p>
      </Link>

      {/* nav in desk */}
      <div className="sm:flex hidden">
        {isUserLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn cursor-pointer">
              Create Post
            </Link>
            <button
              // type="button"
              onClick={singOut}
              className="outline_btn cursor-pointer"
            >
              Sign Outx
            </button>

            <Link href={"/profile"}>
              <Image
                src="/assets/images/logo.svg"
                width={37}
                height={37}
                className="rounded-full"
                alt="amir-yadavar"
              />
            </Link>
          </div>
        ) : (
          <>
            {provider &&
              Object.values(provider).map((item) => (
                <button
                  type="button"
                  key={item.name}
                  onClick={() => signIn(item.id)}
                  className="black_btn"
                >
                  Sign in
                </button>
              ))}
          </>
        )}
      </div>

      {/* nav in mobile */}
      <div className="sm:hidden flex relative">
        {isUserLoggedIn ? (
          <div className="flex">
            {/* <Link href="/create-prompt" className="black_btn cursor-pointer">
              Create Post
            </Link>
            <button
              type="button"
              onClick={singOut}
              className="outline_btn cursor-pointer"
            >
              Sign Out
            </button> */}

            <Image
              src="/assets/images/logo.svg"
              width={37}
              height={37}
              className="rounded-full"
              alt="amir-yadavar"
              onClick={() => setToggleDropDown((prev) => !prev)}
            />
            {toggleDropDown && (
              <div className="dropdown">
                <Link
                  href={"/profile"}
                  className="dropdown_link"
                  onClick={() => setToggleDropDown(false)}
                >
                  My Profile
                </Link>
                <Link
                  href={"/create-prompt"}
                  className="dropdown_link"
                  onClick={() => setToggleDropDown(false)}
                >
                  Create Prompt
                </Link>
                <button
                  type="button"
                  className="mt-5 black_btn w-full"
                  onClick={() => {
                    setToggleDropDown(false);
                    signOut();
                  }}
                >
                  Sing Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {provider &&
              Object.values(provider).map((item) => (
                <button
                  type="button"
                  key={item.name}
                  onClick={() => signIn(item.id)}
                  className="black_btn"
                >
                  Sign in
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
