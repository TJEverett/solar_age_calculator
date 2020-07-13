# Super Galactic Age Calculator

#### _Create a basic set of business logic for an age calculator, 07/09/2020_

#### By _**Tristen Everett**_

## Description

This project uses automated testing to check functions of an age calculator. The calculator will take your age in Earth years and be able to calculate an approximate age in years on Mercury, Venus, Mars, and Jupiter. It will also be able to calculate how many years you have left on each of those planets based upon your inputted life expectancy.

|Specifications|Example Input|Example Output|
|-|-|-|
|Takes the user's age and saves it|69|69|
|Calculate the user’s age in Mercury years (0.24 divisor then round down)|69|287|
|Calculate the user’s age in Venus years (0.62 divisor then round down)|69|111|
|Calculate the user’s age in Mars years (1.88 divisor then round down)|69|36|
|Calculate the user’s age in Jupiter years (11.86 divisor then round down)|69|5|
|Take average life expectancy for the user’s demographic and calculate their expected years left in earth years(demographic – current age)|userAge = 69, lifeExpectancy = 100|31|
|Calculate the user’s time left in Mercury years (0.24 divisor then round down)|31|129|
|Calculate the user’s time left in Venus years (0.62 divisor then round down)|31|50|
|Calculate the user’s time left in Mars years (1.88 divisor then round down)|31|16|
|Calculate the user’s time left in Jupiter years (11.86 divisor then round down)|31|2|



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