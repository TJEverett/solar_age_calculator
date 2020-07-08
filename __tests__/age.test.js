import { Age } from './../src/age.js';

describe('User Age Calculation', () => {
  let testUser;

  beforeEach(() => {
    testUser = new Age(69, 100);
  });

  test('should correctly create an age object', () => {
    expect(testUser.ageEarth).toEqual(69);
  });

  test('should correctly calculate age in mercury years and save to object', () => {
    testUser.mercury();
    expect(testUser.ageMercury).toEqual(287);
  });

  test('should correctly calculate age in venus years and save to object', () => {
    testUser.venus();
    expect(testUser.ageVenus).toEqual(111);
  });

  test('should correctly calculate age in mars years and save to object', () => {
    testUser.mars();
    expect(testUser.ageMars).toEqual(36);
  });

  test('should correctly calculate age in jupiter years and save to object', () => {
    testUser.jupiter();
    expect(testUser.ageJupiter).toEqual(5);
  });
});

describe('User Death Calculation', () => {
  let testUser;

  beforeEach(() => {
    testUser = new Age(69, 100);
  });

  test('should correctly create an age object with time left before death', () => {
    expect(testUser.deathEarth).toEqual(31);
  });

  test('should correctly calculate years left until death on mercury and save to object', () => {
    testUser.mercury();
    expect(testUser.deathMercury).toEqual(129)
  });

  test('should correctly calculate years left until death on venus and save to object', () => {
    testUser.venus();
    expect(testUser.deathVenus).toEqual(50);
  });

  test('should correctly calculate years left until death on mars and save to object', () => {
    testUser.mars();
    expect(testUser.deathMars).toEqual(16);
  });

  test('should correctly calculate years left until death on jupiter and save to object', () => {
    testUser.jupiter();
    expect(testUser.deathJupiter).toEqual(2)
  });
});