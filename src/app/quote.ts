export class Quote {
    showDescription: boolean;
    constructor(public id: number,public title: string,public description: string){
      this.showDescription=false;
    }
};