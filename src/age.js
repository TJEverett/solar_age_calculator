export class Age {
  constructor(ageYears, expectedDeath){
    this.ageEarth = ageYears;
    this.deathEarth = expectedDeath - ageYears;
    this.ageMercury = 0;
    this.ageVenus = 0;
    this.ageMars = 0;
    this.ageJupiter = 0;
    this.deathMercury = 0;
    this.deathVenus = 0;
    this.deathMars = 0;
    this.deathJupiter = 0;
  }

  mercury(){
    this.ageMercury = Math.floor(this.ageEarth / 0.24);
    this.deathMercury = Math.floor(this.deathEarth / 0.24);
  }

  venus(){
    this.ageVenus = Math.floor(this.ageEarth / 0.62);
    this.deathVenus = Math.floor(this.deathEarth / 0.62);
  }

  mars(){
    this.ageMars = Math.floor(this.ageEarth / 1.88);
    this.deathMars = Math.floor(this.deathEarth / 1.88);
  }

  jupiter(){
    this.ageJupiter = Math.floor(this.ageEarth / 11.86);
    this.deathJupiter = Math.floor(this.deathEarth / 11.86);
  }
}