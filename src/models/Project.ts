import { StaticImageData } from 'next/image';

class Project {
  name: string = '';
  description: string = '';
  technologies: Array<string> = [];
  imageUrl: string | StaticImageData = '';
  repositoryUrl?: string = '';

  public constructor(
    name: string,
    description: string,
    technologies: Array<string>,
    imageUrl: string | StaticImageData,
    repositoryUrl?: string
  ) {
    this.name = name;
    this.description = description;
    this.technologies = technologies;
    this.imageUrl = imageUrl;
    this.repositoryUrl = repositoryUrl;
  }
}

export { Project };
