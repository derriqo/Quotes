export class Quote {
  public showDescription: boolean;
  constructor(public id: number, public user: string, public author: string, public description: string, public completeDate: Date) {
    this.showDescription = false
  }
}
