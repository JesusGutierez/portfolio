import { StaticImageData } from 'next/image';

class Link {
  type: 'linkedin' | 'github' | 'web' = 'web';
  link: string = '';
}
class Project {
  name: string = '';
  description: string = '';
  technologies: Array<string> = [];
  imageUrl: string | StaticImageData = '';
  links?: Array<Link>

  public constructor(
    name: string,
    description: string,
    technologies: Array<string>,
    imageUrl: string | StaticImageData,
    links?: Array<Link>
  ) {
    this.name = name;
    this.description = description;
    this.technologies = technologies;
    this.imageUrl = imageUrl;
    this.links = links;
  }
}

export { Project };
