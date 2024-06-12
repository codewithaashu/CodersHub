import React from "react";

const EventDescription = () => {
  return (
    <>
      <div className=" px-2 md:px-5 py-3 w-full md:w-11/12 flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <div className="text-[15px] font-semibold text-gray-800">
            Event Details:
          </div>
          <p className="text-sm text-gray-600">
            Get ready for an exhilarating intellectual marathon as we proudly
            present Hackventure 2024, a national-level hackathon set to ignite
            the sparks of innovation and creativity! Over 24 hours, this
            high-stakes competition will bring together some of the brightest
            minds from across the nation, all vying for the coveted title and a
            grand prize pool of Rs 50,000. <br /> <br /> Hackventure is not just
            a hackathon; it's a crucible of ideas, a convergence of brilliant
            minds, and a breeding ground for groundbreaking solutions.
            Participants will be challenged to tackle real-world problems
            through coding, problem-solving, and collaboration. <br /> <br />{" "}
            Whether you're a seasoned coding maestro or a fresh-faced
            enthusiast, Hackventure 2024 is your platform to showcase your
            skills, push your limits, and emerge victorious in the ever-evolving
            landscape of technology. Join us on this thrilling journey where
            innovation knows no bounds, and together, let's redefine the future
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <div className="text-[15px] font-semibold text-gray-800 ">
            Key Dates:
          </div>
          <ol className="list-disc text-sm text-gray-600 px-5 flex flex-col gap-1">
            <li>
              Registration Open Date :{" "}
              <strong className="text-gray-800">17th May</strong>
            </li>
            <li>
              Registration Close Date :{" "}
              <strong className="text-gray-800">20th June</strong>
            </li>
            <li>
              Results Announcement :{" "}
              <strong className="text-gray-800"> 30th June</strong>
            </li>
          </ol>
        </div>
        <div className="flex flex-col gap-1">
          <div className="text-[15px] font-semibold text-gray-800">
            Eligibility Criteria:
          </div>
          <ul className="list-disc px-5 text-sm text-gray-600 flex flex-col gap-1">
            <li>
              Individuals who identify as female (she / her / hers), with a
              minimum 3+ years of development experience in the field of
              Software Engineering.
            </li>
            <li>
              Aspirants with less than 3 years of development experience are not
              encouraged to take this challenge.
            </li>
            <li>Only individual participation is allowed.</li>
          </ul>
        </div>
        <div className="flex flex-col gap-1">
          <div className="text-[15px] font-semibold text-gray-800">Rules:</div>
          <ul className="list-decimal px-5 text-sm text-gray-600 flex flex-col gap-1">
            <li>
              Participation in the challenge is subject to the sole discretion
              of the organizer.
            </li>
            <li>
              The organizer reserves the right to determine the final ranks in
              the leaderboard.
            </li>
            <li>
              Any case of cheating will result in disqualification from the
              challenge.
            </li>
            <li>
              Challenge Login Window: You can login to the challenge only
              between 3 pm and 3.30 pm IST on 22nd June.
            </li>
            <li>
              Challenge Duration: Upon logging in, you will have 90 minutes to
              complete the challenge.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default EventDescription;
