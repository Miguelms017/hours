# Work Hours Calculator

This tool convert times inserted by users and calculates the total work hours. Also returns a message based on a template giving the dates, the respective hours and the total worked hours.

## How it works?

1. The user insert the hours in the HTML document.
2. The script transform the input into results which are managed and calculated into the total hours.
3. Return the dates, total hours and a copy of all the hours inserted.

## Changelog

**1.0**

*Creation of the tool.*
- logic created.
- calculation of hours.
- message generator.

**1.0.1**

*bug fixed*
+ a bug when user put between one to 6 day before the end of a month bugs the other days giving NaN results.
and altering the month limit management.

**1.0.2**

*Date management*
+ now the page only shows the spaces which has hours and skip the blank or undefined hours.

**1.0.3**

*Days Off*
+ Added Days off.

**1.0.4**

*bug fixed*
+ fixed a bug which shows monday as undefined date. Now, if a date is missing, an error will display.

**1.1**

*Day offs Update*
+ implementation of a select menu with holidays, medical visit and vacations.
+ in the message will show the holiday name or medical or vacation day.
+ shows the quantity of days off at the bottom of the message.
+ format improved to keep the table style by applying paddings and sizes.
+ version counter at footer.

**1.1.1**

*Clipboard button*
+ added a button which sends the output to the clipboard

**1.2**

*Salary Calculator*
+ Created a new page which can calculate the salary in base to inputs entered by user.
+ This page calculates the total salary with the taxes, and insurances discounts.
+ The calculation is an *approximation* there is a change of a reduced margin of error

**1.3**

*Dark Mode*
+ A dark mode was added.
+ Once set up, it will display a dark version of the page.
+ Also will work if the page is reloaded or even closed on the browser.

**1.3.1**

*Holiday Calculator*
+ Now holidays are calculated as a normal work day.

**1.3.2**

*clipboard Warning Tag*
+ A slight change in the clipboard tag position

**1.3.3**

*Bugs Fixed*
+ Bugs Fixed

**1.4**

*Progress indicator*
+ An progress indicator was created.
+ On the page there are 3 circles which change colors when a step is executed;
    + Gray when is not done.
    + turquoise when is is process
    + Green when is done
+ A message is shown with the current step.