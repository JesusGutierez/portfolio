class Certificate {
  title: string;
  issueDate: Date;
  issuingOrganization: string;
  url: string; 
  
  constructor(
    title: string,
    issueDate: Date,
    issuingOrganization: string,
    url: string,
  ) {
    this.title = title;
    this.issueDate = issueDate;
    this.issuingOrganization = issuingOrganization;
    this.url = url;
  }
}

export default Certificate