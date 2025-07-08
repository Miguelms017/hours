# Work Hours Calculator

This tool convert times inserted by users and calculates the total work hours. Also returns a message based on a template giving the dates, the respective hours and the total worked hours.

## How it works?

1. The user insert the hours in the HTML document.
2. The script transform the input into results which are managed and calculated into the total hours.
3. Return the dates, total hours and a copy of all the hours inserted.

## Changelog

**1.0**

*Creation of the tool.*
- logic created
- calculation of hours
- message generator

**1.0.1**

*bug fixed*
+ a bug when user put between one to 6 day before the end of a month bugs the other days giving NaN results 
and altering the month limit management.

**1.0.2**

*Date management*
+ now the page only shows the spaces which has hours and skip the blank or undefined hours

**1.0.3**

*Days Off*
+ Added Days off