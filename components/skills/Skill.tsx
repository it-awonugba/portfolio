type SkillType = {
  title: string;
  icon: JSX.Element;
};

function Skill({ title, icon }: SkillType) {
  return (
    <div className="flex flex-col">
      {icon}
      <span>{title}</span>
    </div>
  );
}

export default Skill;
