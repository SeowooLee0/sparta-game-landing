import CurriculumTemplate from "@/curriculum/template";
import Curriculum from "@/curriculum/template";
import GameTop from "@/gameTop/template";
import IntroduceTrack from "@/introduceTrack/template";
import ProjectExamples from "@/projectExamples/template";

export default function Home() {
  return (
    <div>
      <GameTop />
      <ProjectExamples />
      <IntroduceTrack />
      <CurriculumTemplate />
    </div>
  );
}
