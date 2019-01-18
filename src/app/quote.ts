export class Quote {
  // public showDescription: boolean;
  // public uvotes:number
  //   public dvotes:number
  constructor(public id: number, public name: string, public author: string, public description: string, public completeDate: Date, public uvotes:number, public dvotes:number) {
    // this.showDescription = false
    //     this.uvotes = 0
    //     this.dvotes = 0
  }
}
