export type SkillType = {
  title: string,
  icon?: JSX.Element
};

export type IconTextPropType = {
  institution: string,
  icon?: JSX.Element,
  certificate: string,
  certificateAddress: string
}

export type ProjectType = {
  id: number,
  title: string,
  category: string,
  repo: string,
  role: string,
  snapshot: JSX.Element,
  url: string
}
