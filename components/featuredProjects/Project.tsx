import Link from "next/link";
import { ProjectType } from "@/types/types";
import { BiLogoGithub } from "react-icons/bi";

function Project({title, category, repo, role, snapshot, url} : ProjectType) {
  return (
    <figure className="w-full border lg:w-1/2">
            <div className="w-full">{snapshot}</div>
            <h3>{title}</h3>
            <figcaption className="flex justify-between font-medium">
                <span className="rounded-full bg-accent">{category}</span>
                <span className="rounded-full bg-accent">{role}</span>
                <Link href={repo} className="flex items-center rounded bg-accent"><BiLogoGithub /> Repo</Link>
            </figcaption>
            <Link href={url}>View</Link>
    </figure>
  )
}

export default Project;
