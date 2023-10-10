import Image from "next/image";
import Project from "./Project";
import MentorManager from "@/assets/img/MentorManager.png";

function FeaturedProjects() {
  const projects = [
    {
        id: 1,
        title: "Mentors Managment System",
        description: "An open source project developed with React and C#. Mentors Management system is a people management app that enables proper. coordination of mentors needed to execute projects, ranging from recruitment to off-boarding.",
        repo: "https://github.com/ALCOpenSource/Mentor-Management-System-Team-5",
        snapshot: <Image src={MentorManager} alt="Mentor manager project" className="rounded-t-lg"/>,
        url: ""
    }
  ];

  return (
    <section className="space-y-8">
        <h2 className="font-bold text-4xl text-white">Featured Projects</h2>
        <div className="flex">
            {projects.map(project => <Project {...project} key={project.id} />) }
        </div>
    </section>
  )
}

export default FeaturedProjects
