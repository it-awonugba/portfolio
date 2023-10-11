import Image from "next/image";
import Project from "./Project";
import MentorManager from "@/assets/img/MentorManager.png";
import MyPortfolio from "@/assets/img/MyPortfolio.png";

function FeaturedProjects() {
  const projects = [
    {
        id: 1,
        title: "Mentors Managment System",
        description: "An open source project developed with React and C#. Mentors Management system is a people management app that enables proper. coordination of mentors needed to execute projects, ranging from recruitment to off-boarding.",
        repo: "https://github.com/ALCOpenSource/Mentor-Management-System-Team-5",
        snapshot: <Image src={MentorManager} alt="Mentor manager project" className="rounded-t-lg h-auto lg:h-80"/>,
        url: "https://mmsadmin.samprotech.duckdns.org/"
    },
    {
        id: 2,
        title: "Isaac Awonugba's website",
        description: "This is my personal website which I developed using Next.js 13 and TailwindCSS. A website featuring some of my skills, certification, resume, and some of my projects especially the ones done with react and next.js",
        repo: "https://github.com/it-awonugba/portfolio",
        snapshot: <Image src={MyPortfolio} alt="Isaac Awonugba's website" className="rounded-t-lg h-auto lg:h-80"/>,
        url: "https://isaacawonugba.vercel.app"
    }
  ];

  return (
    <section className="space-y-8">
        <h2 className="font-bold text-4xl text-white">Featured Projects</h2>
        <div className="flex flex-wrap gap-16 justify-between">
            {projects.map(project => <Project {...project} key={project.id} />) }
        </div>
    </section>
  )
}

export default FeaturedProjects
