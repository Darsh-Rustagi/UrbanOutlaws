import Image from "next/image";
import Hero from "./components/hero";
import Video from "./components/video";
import LatestNews from "@/app/components/latestnews";

export default function Home() {
  return (
    <div >
     <Hero></Hero>
        <Video></Video>
        <LatestNews></LatestNews>
    </div>
  );
}
