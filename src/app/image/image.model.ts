export class Image {
  public name: string;
  public description: string;
  public src: string;

  constructor (name: string, desc: string, src: string) {
    this.name = name;
    this.description = desc;
    this.src =  src;
  }
}
