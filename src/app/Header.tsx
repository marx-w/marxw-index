import { item } from './Interfaces';
import Link from "next/link";
import { Bars3BottomLeftIcon } from "@heroicons/react/20/solid";
import {FaGithub} from "react-icons/fa6";

export default function Header({navItem}:
{navItem: item[]}) {
  return (
    <header className="navbar bg-base-100">
      <div className="navbar-start">
        {/* Phone Screen Drop down menu. */}
        <div className="dropdown dropdown-hover">
          <label tabIndex={0} className={`btn btn-ghost lg:hidden group`}>
            <Bars3BottomLeftIcon className={`h-6 w-6 group-hover:text-accent group-active:text-secondary/30 ease-out delay-75`} />
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content dropdown-hover z-[1] p-2 shadow-lg bg-base-100 rounded-box w-52">
            {navItem.map((item)=>{
                return (
                  <li key={item.id}>
                    <Link key={item.id} className={``} href={item.url} about={item.alt == undefined? item.title: item.alt}>
                      {item.title}
                    </Link>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <Link
          href={`/`}
          id={`homepage`}
          className="btn btn-ghost capitalize text-xl font-mono text-primary drop-shadow">
          marx wang
        </Link>
      </div>
      {/* Navigator in Desktop screen. */}
      <nav className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 join">
          {navItem.map((item)=>{
              return (
                <li key={item.id}>
                  <Link key={item.id} className={`join-item`} href={item.url} about={item.alt == undefined? item.title: item.alt}>
                    {item.title}
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </nav>
      <div className="navbar-end">
        <Link
          key={1}
          href={`https://github.com/marx-w/marx-w`}
          about={`My Personal Github Repository`}
          className={`btn btn-ghost group`}
          target={`_blank`}
        >
          <FaGithub className={`h-6 w-6 group-item`} />
        </Link>
      </div>
    </header>
  )
};