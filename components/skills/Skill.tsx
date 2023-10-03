import { SkillType } from "@/types/types";
import { CgUnavailable } from "react-icons/cg";
function Skill({
  title,
  icon = <CgUnavailable className="w-14 h-14 lg:w-24 lg:h-24" />,
}: SkillType) {
  return (
    <div className="flex flex-col items-center">
      {icon}
      <span>{title}</span>
    </div>
  );
}

export default Skill;
