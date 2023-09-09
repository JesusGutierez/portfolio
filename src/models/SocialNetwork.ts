class SocialNetwork {
  icon: React.JSX.Element;
  name: string = '';
  text: string = '';
  urlNetwork: string = '';

  public constructor(
    icon: React.JSX.Element,
    name: string,
    text: string,
    urlNetwork: string
  ) {
    this.icon = icon;
    this.name = name;
    this.text = text;
    this.urlNetwork = urlNetwork;
  }
}
export { SocialNetwork };
