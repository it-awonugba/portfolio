import Link from "next/link";
import { ProjectType } from "@/types/types";
import { BiLogoGithub } from "react-icons/bi";

function Project({title, description, repo, snapshot, url} : ProjectType) {
  return (
    <figure className="max-w-lg">
            <div className="w-full mb-4">{snapshot}</div>
            <div className="text-white space-y-4">
                <h3 className="text-xl">{title}</h3>
                <p>{description}</p>
                <figcaption className="flex justify-between font-medium">
                    <Link target="_blank" href={repo} className="flex px-5 py-2 space-x-2 items-center rounded bg-accent hover:bg-primary hover:outline hover:outline-accent"><BiLogoGithub /> <span>Repo</span></Link>
                    <Link target="_blank" href={url} className="px-5 py-2 rounded bg-accent hover:bg-primary hover:outline hover:outline-accent">View</Link>
                </figcaption>
            </div>
    </figure>
  )
}

export default Project;
