import Link from "next/link";

import Image from "next/image";
import NextDivHeader from "./Component/NextDivHeader";
import Project from "./Component/Project";

const NextDiv = () => {
  return (
    <div>
      <NextDivHeader />
      <Project />
    </div>
  );
};

export default NextDiv;
