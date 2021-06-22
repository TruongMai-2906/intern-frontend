
export class News {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  constructor(id: string, slug: string, title: string, description: string, content: string){
    this.id = id;
    this.slug = slug;
    this.title = title;
    this.description = description;
    this.content = content;
  }


  public get getId() : string {
    return this.id;
  }

  public get getSlug() : string {
    return this.slug;
  }

  public get getTitle() : string {
    return this.title;
  }

  public get getDescription() : string {
    return this.description;
  }

  public get getContent() : string {
    return this.content;
  }

  public setId(id: string){
    this.id = id;
  }
  public setSlug(slug: string){
    this.slug = slug;
  }
  public setDescription(description: string){
    this.description = description;
  }
  public setTitle(title: string){
    this.title = title;
  }
  public setContent(content: string){
    this.content = content;
  }

}
