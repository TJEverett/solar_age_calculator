# Super Galactic Age Calculator

#### _Create a basic set of business logic for an age calculator, 07/09/2020_

#### By _**Tristen Everett**_

## Description

This project uses automated testing to check functions of an age calculator. The calculator will take your age in Earth years and be able to calculate an approximate age in years on Mercury, Venus, Mars, and Jupiter. It will also be able to calculate how many years you have left on each of those planets based upon your inputted life expectancy.

|Specifications|Example Input|Example Output|
|-|-|-|
|Create an object with an input of user’s age in earth years|let age = new Age(69)|age.ageEarth = 69|
|Create a prototype that calculates the user’s age in Mercury years (0.24 divisor then round down) and adds it to the object|age.mercury()|age.ageMercury = 287|
|Create a prototype that calculates the user’s age in Venus years (0.62 divisor then round down) and adds it to the object|age.venus()|age.ageVenus = 111|
|Create a prototype that calculates the user’s age in Mars years (1.88 divisor then round down) and adds it to the object|age.mars()|age.ageMars = 36|
|Create a prototype that calculates the user’s age in Jupiter years (11.86 divisor then round down) and adds it to the object|age.jupiter()|age.ageJupiter = 5|
|-|-|-|
|Update constructor to take average life expectancy for the user’s demographic and add their expected years left in earth years to the object (demographic – current age)|let age = new Age(69, 100)|age.deathEarth = 31|
|Update mercury prototype so it calculates the user’s time left in Mercury years (0.24 divisor then round down) and adds it to the object|age.mercury()|age.deathMercury = 129|
|Update venus prototype so it calculates the user’s time left in Venus years (0.62 divisor then round down) and adds it to the object|age.venus()|age.deathVenus = 50|
|Update mars prototype so it calculates the user’s time left in Mars years (1.88 divisor then round down) and adds it to the object|age.mars()|age.deathMars = 16|
|Update jupiter prototype so it calculates the user’s time left in Jupiter years (11.86 divisor then round down) and adds it to the object|age.jupiter()|age.deathJupiter = 2|



## Setup/Installation Requirements

1. clone the repo
2. open the command line in the repo's root directory
3. run npm install
4. run npm test

## Technologies Used

* webpack
* node
* jest
* javascript

### License

This software is licensed under the MIT license

Copyright (c) 2020 **_Tristen Everett_**