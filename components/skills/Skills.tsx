import {
  TbBrandReact,
  TbBrandNextjs,
  TbBrandRedux,
  TbBrandStorybook,
  TbBrandNodejs,
  TbBrandTypescript,
  TbBrandHtml5,
  TbBrandFigma
} from "react-icons/tb";
import { SiTailwindcss, SiWebpack } from "react-icons/si";
import { FaSass, FaPhp, FaCss3Alt, FaShopify } from "react-icons/fa";
import Skill from "./Skill";

function Skills() {
  const skillsArray = [
    {
      id: 1,
      title: "React",
      icon: <TbBrandReact className="w-14 h-14 lg:w-24 lg:h-24" />,
    },
    {
      id: 2,
      title: "Next.js 13",
      icon: <TbBrandNextjs className="w-14 h-14 lg:w-24 lg:h-24" />,
    },
    {
      id: 3,
      title: "Redux",
      icon: <TbBrandRedux className="w-14 h-14 lg:w-24 lg:h-24" />,
    },
    {
      id: 4,
      title: "Storybook",
      icon: <TbBrandStorybook className="w-14 h-14 lg:w-24 lg:h-24" />,
    },
    {
      id: 5,
      title: "Node.js",
      icon: <TbBrandNodejs className="w-14 h-14 lg:w-24 lg:h-24" />,
    },
    {
      id: 6,
      title: "Typescript",
      icon: <TbBrandTypescript className="w-14 h-14 lg:w-24 lg:h-24" />,
    },
    {
      id: 7,
      title: "HTML5",
      icon: <TbBrandHtml5 className="w-14 h-14 lg:w-24 lg:h-24" />,
    },
    {
      id: 8,
      title: "CSS",
      icon: <FaCss3Alt className="w-14 h-14 lg:w-24 lg:h-24" />,
    },
    {
      id: 9,
      title: "SASS",
      icon: <FaSass className="w-14 h-14 lg:w-24 lg:h-24" />,
    },
    {
      id: 10,
      title: "Tailwindcss",
      icon: <SiTailwindcss className="w-14 h-14 lg:w-24 lg:h-24" />,
    },
    {
      id: 11,
      title: "PHP",
      icon: <FaPhp className="w-14 h-14 lg:w-24 lg:h-24" />,
    },
    {
      id: 12,
      title: "Shopify",
      icon: <FaShopify className="w-14 h-14 lg:w-24 lg:h-24" />,
    },
    {
      id: 13,
      title: "Webpack",
      icon: <SiWebpack className="w-14 h-14 lg:w-24 lg:h-24" />,
    },
    {
      id: 14,
      title: "Figma",
      icon: <TbBrandFigma className="w-14 h-14 lg:w-24 lg:h-24" />,
    },
    {
      id: 15,
      title: "Jest",
    },
    {
      id: 16,
      title: "Enzymejs",
    },
  ];
  return (
    <section className="flex flex-col text-white space-y-8 py-24">
      <h2 className="font-bold text-4xl">Tools and frameworks</h2>
      <p>
        Over the years, I have learnt and worked with the following tools and
        frameworks, some while working with traditional PHP and others after
        transitioning into a Shopify Developer, fullstack and frontend
        development roles.
      </p>
      <div className="flex flex-row flex-wrap gap-8 justify-center text-center">
        {skillsArray.map((s) => (
          <Skill {...s} key={s.id} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
