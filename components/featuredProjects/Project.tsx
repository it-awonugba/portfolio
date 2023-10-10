import Link from "next/link";
import { ProjectType } from "@/types/types";
import { BiLogoGithub } from "react-icons/bi";

function Project({title, description, repo, snapshot, url} : ProjectType) {
  return (
    <figure className="w-full lg:w-1/2">
            <div className="w-full mb-4">{snapshot}</div>
            <div className="text-white space-y-4">
                <h3>{title}</h3>
                <p>{description}</p>
                <figcaption className="flex justify-between font-medium">
                    <Link href={repo} className="flex px-5 py-2 items-center rounded bg-accent"><BiLogoGithub /> Repo</Link>
                    <Link href={url} className="px-5 py-2 rounded bg-accent">View</Link>
                </figcaption>
            </div>
    </figure>
  )
}

export default Project;
