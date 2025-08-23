"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NavBar() {
  const { data: session, status } = useSession();
  console.log(session);
  const navMenu = () => {
    return (
      <>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/products"}>Product List</Link>
        </li>
        {status === "authenticated" && (
          <li>
            <Link href="/dashboard/add-product">Dashboard</Link>
          </li>
        )}
      </>
    );
  };

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navMenu()}
            </ul>
          </div>
          <Link href={"/"} className="text-xl">
            <Image
              src={"/assets/logo.jpg"}
              width={107}
              height={87}
              alt="brand logo"
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navMenu()}</ul>
        </div>
        <div className="navbar-end">
          <ul className="menu menu-horizontal px-1">
            {status == "authenticated" ? (
              <>
                <li>
                  <Image
                    className="rounded-full"
                    src={session?.user?.image}
                    width={60}
                    height={60}
                    alt="user-logo"
                  />
                </li>
                <li
                  className="btn btn-error rounded-4xl text-white"
                  onClick={() => signOut()}
                >
                  Log Out
                </li>
              </>
            ) : (
              <>
                <li className="btn bg-green-400 text-white rounded-full">
                  <Link href={"/register"}>Register</Link>
                </li>
                <li className="btn rounded-full">
                  <Link href={"/login"}>Login</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
