import Image from "next/image";
import React from "react";
const ToastComponent = ({ type, msg }) => {
  return (
    <div className=" px-6 text-center  h-full w-full ">
      <div className="w-[100px] inline-block  place-self-center">
        <Image
          src={
            type === "success"
              ? "/images/newSuccess.gif"
              : "/images/rejected.svg"
          }
          width={0}
          height={0}
          alt="err"
          className="w-[inherit] aspect-square  "
        />
      </div>
      {type === "success" ? (
        <div className=" text-base font-medium ">
          <p className="">
            Our Business Growth Team will get in touch shortly.
          </p>
          <p className="">Thank you for your valuable inquiry.</p>
        </div>
      ) : (
        <div className="px-10"> {"Failed to send"}</div>
      )}
    </div>
  );
};
export default ToastComponent;
