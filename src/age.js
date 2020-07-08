export class Age {
  constructor(ageYears){
    this.ageEarth = ageYears;
  }

  mercury(){
    this.ageMercury = Math.floor(this.ageEarth / 0.24);
  }

  venus(){
    this.ageVenus = Math.floor(this.ageEarth / 0.62);
  }

  mars(){
    this.ageMars = Math.floor(this.ageEarth / 1.88);
  }
}