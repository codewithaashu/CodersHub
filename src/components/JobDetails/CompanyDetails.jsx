import React from "react";
import { FaInstagram, FaLinkedin, FaSquareFacebook } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";

const CompanyDetails = () => {
  return (
    <>
      <div className="px-2 md:px-5 py-3 w-full md:w-11/12 flex flex-col gap-3">
        <div className="flex flex-col gap-0">
          <h1 className="text-[17px] font-semibold">Microsoft Corporation</h1>
          <p className="text-sm font-normal">Califonia</p>
          <p className="text-sm font-normal text-muted-foreground cursor-pointer">
            support@microsoft.com
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-[17px] font-semibold">About Company</h1>
          <p className="text-[15px] font-normal text-gray-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            odit asperiores quasi excepturi, dicta pariatur. Rerum voluptatem
            nisi incidunt deleniti expedita non fugit impedit quaerat iure
            recusandae excepturi nostrum, nemo, veniam debitis culpa similique
            obcaecati porro ipsum eligendi tenetur mollitia vel atque?
            Temporibus, soluta ut inventore quos id quam dolorem magni fuga eos
            dignissimos!
          </p>
        </div>
        <div className="flex flex-row gap-5 py-1">
          {true && (
            <a
              href={"/linkedinURL"}
              target="_blank"
              rel="noreferrer"
              className="flex flex-row gap-[3px] items-center text-xl text-gray-800 font-medium"
            >
              <TbWorld />
            </a>
          )}
          {true && (
            <a
              href={"/linkedinURL"}
              target="_blank"
              rel="noreferrer"
              className="flex flex-row gap-[3px] items-center text-xl text-gray-800 font-medium"
            >
              <FaLinkedin />
            </a>
          )}
          <a
            href={"https://www.facebook.com/"}
            target="_blank"
            rel="noreferrer"
            className="flex flex-row gap-[3px] items-center text-xl text-gray-800 font-medium"
          >
            <FaSquareFacebook />
          </a>
          <a
            href={"https://www.instagram.com"}
            target="_blank"
            rel="noreferrer"
            className="flex flex-row gap-[3px] items-center text-xl text-gray-800 font-medium"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </>
  );
};

export default CompanyDetails;
