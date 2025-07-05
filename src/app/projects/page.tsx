import dynamic from "next/dynamic";
import { Suspense } from "react";

const AllProjects = dynamic(() => import("@/components/projects/AllProjects"), {
  ssr: true,
});

const Page = () => {
  return (
    <Suspense>
      <AllProjects />
    </Suspense>
  );
};

export default Page;
