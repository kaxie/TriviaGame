var answerSet1 = {answer1:"Los Angeles Lakers", answer2:"Houston Rockets", answer3:"Golden State Warriors", answer4: "Boston Celtics"}
var questionSet = {first: "which NBA team do I root for?", second:"which country has the largest population", third:"how much does moving company charge?" }

I didn't have time to finish it so here is the pesudo code.
I will create a function that take onclick on a start button and it is going to set all the previously 
invisible html component to visible.


I am trying to make this program a recursive program.
 Then, immediately, I will set the timer to start counting down from 30 seconds.
 When the first question and four answers are shown, they are created as objects and 
 one of the object will have attribute of "correct" as true while others have "correct" as false.

 When the true answer is clicked on, the function calls another function that reset all the question
 and answers, then return another function call to itself. 

 Then in the start of the each function call, I will check if this function call is the base case. I check it
 by keeping a global variable ""function call counter" and it increment everytime to check if this time it's the 
 base case.

 If that's the base case, jump to the "else" part of the function(playing the actual game is the "if" part), then
 return and prints out the status.it
 
 I apologize for not finishing the homework. I had too much work at school and wanted to finally give myself a chance
 to rest for a little.