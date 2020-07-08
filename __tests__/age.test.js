import { Age } from './../src/age.js';

describe('User Age Calculation', () => {
  let testUser;

  beforeEach(() => {
    testUser = new Age(69);
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
});