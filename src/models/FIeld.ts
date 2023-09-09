class Field {
  name: string = '';
  nroLines: number | null = null;

  public constructor(name: string, nroLines: number | null) {
    this.name = name;
    this.nroLines = nroLines;
  }
}

export { Field };
