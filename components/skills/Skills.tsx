import {
  TbBrandReact,
  TbBrandNextjs,
  TbBrandRedux,
  TbBrandStorybook,
  TbBrandNodejs,
  TbBrandTypescript,
  TbBrandHtml5,
} from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import Skill from "./Skill";

function Skills() {
  const skillsArray = [
    {
      id: 1,
      title: "React",
      icon: <TbBrandReact className="w-24 h-24" />,
    },
    {
      id: 2,
      title: "Next.js 13",
      icon: <TbBrandNextjs className="w-24 h-24" />,
    },
    {
      id: 3,
      title: "Redux",
      icon: <TbBrandRedux className="w-24 h-24" />,
    },
    {
      id: 4,
      title: "Storybook",
      icon: <TbBrandStorybook className="w-24 h-24" />,
    },
    {
      id: 5,
      title: "Node.js",
      icon: <TbBrandNodejs className="w-24 h-24" />,
    },
    {
      id: 6,
      title: "Typescript",
      icon: <TbBrandTypescript className="w-24 h-24" />,
    },
    {
      id: 7,
      title: "HTML5",
      icon: <TbBrandHtml5 className="w-24 h-24" />,
    },
    {
      id: 8,
      title: "Tailwindcss",
      icon: <SiTailwindcss className="w-24 h-24" />,
    },
  ];
  return (
    <section className="flex flex-col space-y-6">
      <h2 className="font-bold text-4xl ">Tools and frameworks </h2>
      <div className="flex flex-row flex-wrap gap-8 justify-center text-center">
        {skillsArray.map((s) => (
          <Skill {...s} key={s.id} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
