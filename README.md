# Frontend quiz app 

A Multi-Step Quiz that presents questions, answers, and the final score.

1. Model a structure that contains the quiz data. A quiz holds 5 “Questions”, each
question has 4 possible answers and specifies the correct answer.
2. Create an app that uses the quiz data, and displays each question with its
potential answers on a separate page.
3. On each question page, display the “Next” and “Previous” buttons.
a. On the first page - do not show the “Previous” button.
b. When navigating between questions, show the question with the selected
answer by the user.
c. The “Next” button should be disabled until the user chooses an answer.
d. On the last question - Replace the “Next” button text with “Submit”
e. When clicking on “Submit” - move to the “Scores” page.
4. Create a “Scores” page that displays the user’s score from 0 to 100, based on
the correctly answered questions. e.g. 4 correct answers should show 80.
5. Include tests that verify the app’s correctness.

# Local run
1. `npm install` `npm start`
2. View the project locally at http://localhost:3000

![image info](./pictures/services-graph.png)
