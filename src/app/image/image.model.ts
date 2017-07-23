export class Image {
  public title: string;
  public description: string;
  public quote: string;
  public quoteRef: string;
  public src: string;

  constructor (title: string, desc: string, quote: string, qRef: string, src: string) {
    this.title = title;
    this.description = desc;
    this.quote = quote;
    this.quoteRef = qRef;
    this.src =  src;
  }
}
