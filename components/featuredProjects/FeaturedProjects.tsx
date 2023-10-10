import Image from "next/image";
import Project from "./Project";
import MentorManager from "@/assets/img/MentorManager.png";

function FeaturedProjects() {
  const projects = [
    {
        id: 1,
        title: "Mentor Manager",
        category: "Open Source",
        repo: "https://github.com",
        role: "Frontend Developer [React]",
        snapshot: <Image src={MentorManager} alt="Mentor manager project" />,
        url: ""
    }
  ];

  return (
    <section className="flex">
        {projects.map(project => <Project {...project} key={project.id} />) }
    </section>
  )
}

export default FeaturedProjects
