import Button from "@/app/components/Button";
import Image from "next/image";
import React from "react";
import teams from "@/public/images/teams.jpg";

export default function Mission() {
  // throw a default error to test error.js
  //   throw new Error("Test error in Mission page");
  return (
    <div className="mt-5">
      <p className="text-lg font-semibold">Our Mission Statement</p>
      <p>
        Our mission is to empower individuals and organizations through
        innovative technology solutions that drive progress and create lasting
        impact.
      </p>
      <div className="w-96">
        <Image src={teams} alt="teams Image" placeholder="blur" />
      </div>
      <Button />
    </div>
  );
}
