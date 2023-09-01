class Project {
  name: string = '';
  description: string = '';
  technologies: Array<string> = [];
  imageUrl: string = '';

  public constructor(
    name: string,
    description: string,
    technologies: Array<string>,
    imageUrl: string
  ) {
    this.name = name;
    this.description = description;
    this.technologies = technologies;
    this.imageUrl = imageUrl;
  }
}

export { Project };
