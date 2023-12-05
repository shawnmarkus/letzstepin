"use client";
import Link from "next/link";
import Image from "next/image";

const Header = ({ selected }) => {
  const handleOpen = (name) => {};
  return (
    <div className="fixed z-50 w-full top-0 right-0 left-0 bg-[#0000005f] backdrop-blur-md text-white p-4 flex justify-between  ">
      <div className="w-[10vw] min-w-[100px] aspect-[155/40] relative ">
        <Image src={"/images/logo13.png"} layout="fill" />
      </div>
      <div className=" align-middle self-center">
        <Link
          href={`/#home`}
          className={`text-white-700 px-4 font-medium ${
            selected.toLowerCase() === "home" ? "text-[red]" : "text-[white]"
          }`}
        >
          Home
        </Link>

        <Link
          href={`/#about`}
          className={`text-white-700 px-4 font-medium ${
            selected.toLowerCase() === "about" ? "text-[red]" : "text-[white]"
          }`}
        >
          About
        </Link>

        <span
          className={`text-white-700 px-4 font-medium ${
            selected.toLowerCase() === "location"
              ? "text-[red]"
              : "text-[white]"
          }`}
          onClick={() => handleOpen("location")}
        >
          Location
        </span>
        <span
          className={`text-white-700 px-4 font-medium ${
            selected.toLowerCase === "categories"
              ? "text-[red]"
              : "text-[white]"
          }`}
          onClick={() => handleOpen("categories")}
        >
          Categories
        </span>

        <Link
          href={`/#contact`}
          className={`text-white-700 px-4 font-medium ${
            selected.toLowerCase() === "contact" ? "text-[red]" : "text-[white]"
          }`}
        >
          Contact
        </Link>
      </div>

      {/* <div className=" align-middle self-center">
        {NavLabel.map((i, _) => {
          if (i.type === "nav") {
            return (
              <Link
                key={_}
                href={`/#${i.path}`}
                className="text-white-700 px-4 font-medium "
              >
                {i.name}
              </Link>
            );
          } else {
            return (
              <span className="px-4" onMouseOver={handleOpenPop(i.name)}>
                {i.name}
              </span>
            );
          }
        })}
      </div> */}
    </div>
  );
};

export default Header;
