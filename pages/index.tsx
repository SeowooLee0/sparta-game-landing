import Curriculum from "@/curriculum/Curriculum";
import GameTop from "@/gameTop/GameTop";
import IntroduceTrack from "@/introduceTrack/IntroduceTrack";
import ProjectExamples from "@/projectExamples/ProjectExamples";

export default function Home() {
  return (
    <div>
      <GameTop />
      <ProjectExamples />
      <IntroduceTrack />
      <Curriculum />
    </div>
  );
}
