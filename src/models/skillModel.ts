class SkillModel {
  area: string = '';
  technologies: Array<string> = [];

  public constructor(area: string, technologies: Array<string>) {
    this.area = area;
    this.technologies = technologies;
  }
}

export default SkillModel;
