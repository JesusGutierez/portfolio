class Field {
  name: string = '';
  nroLines: number | null = null;
  placeholder: string = '';
  type: string = 'text';

  public constructor(name: string, nroLines: number | null, placeholder: string, type: string) {
    this.name = name;
    this.nroLines = nroLines;
    this.placeholder = placeholder;
    this.type = type;
  }
}

export { Field };
