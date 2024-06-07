import React from "react";

const JobDescription = () => {
  return (
    <>
      <div className=" px-2 md:px-5 py-3 w-full md:w-11/12 flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <div className="text-[15px] font-semibold text-gray-800">
            Responsibilities of the Candidate:
          </div>
          <ol className="list-decimal text-sm text-gray-600 px-5 flex flex-col gap-1">
            <li>
              Collaborate with cross-functional teams to define, design, and
              ship new features. Work with outside data sources and APIs.
            </li>
            <li>Work with outside data sources and APIs.</li>
          </ol>
        </div>
        <div className="flex flex-col gap-1">
          <div className="text-[15px] font-semibold text-gray-800 ">
            Requirements:
          </div>
          <ol className="list-decimal text-sm text-gray-600 px-5 flex flex-col gap-1">
            <li>Strong foundation in data structures & algorithms.</li>
            <li>Good understanding of mobile app UI/UX and Material Design</li>
            <li>
              Product firm experience and end-to-end lifecycle feature
              development in app
            </li>
            <li>
              Exposure to: Firebase, Dynamic modules, Socket programming, Design
              patterns, unit-testing, app performance tuning, and memory
              management.
            </li>
            <li>Passion for creating beautiful and performant apps.</li>
            <li>
              Exposure to Compose, MVP/MVVM, Kotlin, Rx/Coroutine, and Firebase.
            </li>
            <li>Have worked in startups or product-based firms.</li>
          </ol>
        </div>
        <div className="flex flex-col gap-1">
          <div className="text-[15px] font-semibold text-gray-800">
            Education:
          </div>
          <ul className="list-none text-sm text-gray-600 flex flex-col gap-1">
            <li>
              <span className="font-medium text-gray-800"> UG: </span> Diploma
              in Any Specialization, BCA in Any Specialization, B.Tech/B.E. in
              Any Specialization
            </li>
            <li>
              <span className="font-medium text-gray-800"> PG: </span> MCA in
              Any Specialization, M.Tech in Any Specialization
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-[15px] font-semibold text-gray-800">Skills:</div>
          <div className="flex flex-row gap-5 flex-wrap">
            <p className="bg-gray-200 text-[13px] rounded-full w-fit px-2 py-1 font-medium text-gray-700">
              Java
            </p>
            <p className="bg-gray-200 text-[13px] rounded-full w-fit px-2 py-1 font-medium text-gray-700">
              SpringBoot
            </p>
            <p className="bg-gray-200 text-[13px] rounded-full w-fit px-2 py-1 font-medium text-gray-700">
              Java
            </p>
            <p className="bg-gray-200 text-[13px] rounded-full w-fit px-2 py-1 font-medium text-gray-700">
              SpringBoot
            </p>
            <p className="bg-gray-200 text-[13px] rounded-full w-fit px-2 py-1 font-medium text-gray-700">
              Java
            </p>
            <p className="bg-gray-200 text-[13px] rounded-full w-fit px-2 py-1 font-medium text-gray-700">
              SpringBoot
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDescription;
