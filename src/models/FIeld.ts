class Field {
  name: string = '';
  nroLines: number | null = null;
  placeholder: string = '';
  type: string = 'text';
  isRequired?: boolean = false;

  public constructor(name: string, nroLines: number | null, placeholder: string, type: string, isRequired?: boolean) {
    this.name = name;
    this.nroLines = nroLines;
    this.placeholder = placeholder;
    this.type = type;
    this.isRequired = isRequired;
  }
}

export { Field };
