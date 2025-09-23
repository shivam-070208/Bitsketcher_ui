import BouncingCubesLoader from "@/components/bitsketcher_ui/loaders/BouncingCubesLoader";
import BouncingSpheresLoader from "@/components/bitsketcher_ui/loaders/BouncingSphereloader";

import MorphingShapeLoader from "@/components/bitsketcher_ui/loaders/MorphingShapeLoader";

import RotatingCubesSwarm from "@/components/bitsketcher_ui/loaders/RotatingCubeSwarm";
import SpinningRingsLoader from "@/components/bitsketcher_ui/loaders/SpinningRingsLoader";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid place-items-center grid-cols-6 w-screen h-screen">
      <MorphingShapeLoader />
      <BouncingCubesLoader />
      <BouncingSpheresLoader />
      <RotatingCubesSwarm />
      <SpinningRingsLoader />
    </div>
  );
}
