export class Quote {
    public showDescription: boolean;
    constructor(public id: number,public title: string,public description: string, public entryDate){
      this.showDescription=false;
    }
};