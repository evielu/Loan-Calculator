# 
Auto Loan Calculator Test Plan

1. Introduction

The purpose of this test plan is to define the test strategy needed for testing a Auto Loan Calculator. Functionality to be tested and positive and negative test cases will be outline in this plan.

2. Scope

This scope of this test plan is to test the Auto Loan Calculator feature on the https://www.bankrate.com/calculators/auto/auto-loan-calculator.aspx page. All other advertisement and links will be ignored. 

3. Test tools and Test Coverage

3.1 Tools

a) The latest versions of Chrome, Firefox, Safari and Windows will be used for compatibility testing
b) Browser console tools
c) Cypress will be used for automation

3.2 Test Coverage

The following functionality will be tested

a. Input fields
b. Tool tips
c. drop down menus
d. Internal links
e. External links
f. Estimated Monthly Payment display

4. Test Plan

a. How much are you following to borrow input field
- Verify Numbers > 1000 and <= 99999 can be inputted
- Verify numbers less than 1000 are not allowed
- Verify number greater than 100000 are not allowed
- Verify Negative numbers are not allowed
- Verify symbols are not allowed
- Verify the amount inputed appears under “total principal paid”
- Verify estimated monthly payment is adjusted based on input

b. For how long drop down, when vehicle is set to Used
- Verify the drop menu can be clicked
- Verify 48 months can be selected and changes in the drop down display
- Verify 36 months can be selected and changes in the drop down display
- Verify 60 months can be selected (when it is not the default) and the changes the drop down display
- Verify estimated monthly payment is adjusted based on selected value

c. If your vehicle new or used drop down?
- Verify the drop menu can be clicked
- Verify ‘New’ can be selected and changes in the drop down display

d. For how long drop down, when vehicle is set to New
- Verify the drop menu can be clicked
- Verify 48 months can be selected and changes in the drop down display
- Verify 36 months can be selected and changes in the drop down display
- Verify 72 months can be selected and changes in the drop down display
- Verify 60 months can be selected (when it is not the default) and the changes in the drop down display
- Verify estimated monthly payment is adjusted based on selected value

e. Interest rate field
- Verify number between 1 and 98 can be inputted
- Verify negative numbers cannot be inputed and gives an error
- Verify 0 cannot be inputted and gives an error
-  Verify estimated monthly payment is adjusted based on selected value

f. Find a rate drop down
- Verify drop down menu can be selected
- Verify item in drop down can be clicked

g. Information Tool tips
- Verify the tool tip next to “How much are you looking to borrow?” can be clicked and shows a message
- Verify the tool tip next to “For how long?” can be clicked and shows a message

h. Compare Loan Rates Link
- Verify clicking on this button brings you to a new page

i. Amortization schedule link
- Verify clicking on this link brings up a new section in the same page
- Verify link is changed to “Hide amortization schedule”
- Verify clicking “Hide amortization schedule” hides the schedule and link now says “see amortization schedule” 




Bugs found

1. Clicking on “Find a rate” does not do anything
2. There is no validation error message for non valid numbers for How much are you looking to borrow, just a red line.
3. If I have a positive value for “interest rate” but then put the same value as negative, the “invalid” error message does not appear
4. If I get the “invalid rate” error but then to input a valid amount while the error is there, the input is not accepted and the error does not go away. Error goes away after Input a 2nd valid value 
5. Reference error in console: ReferenceError: isVisible is not defined
