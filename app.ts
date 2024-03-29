// ASSIGNMENT 1 OF TYPESCRIPT 45 QUESTIONS.

//Qno1) Install Node.js, TypeScript and VS Code on your computer.

//Qno2) Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
let personName1: string= "ERIC";//this is name
console.log(`hello ${personName1} would you like to learn some python today?`);//this shows the message 

// Qno3)Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
//lower case
let personName: string ="Fawwad";
console.log("lowercase:", personName.toLowerCase());

//upper case
console.log("uppercase:",personName.toLocaleUpperCase());

//title case
console.log("titlecase:",personName.replace(/\)bw/g,c=>c.toUpperCase()));

// Qno4)Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
// Albert Einstein once said, “A person who never made a mistake never tried anything new.”

// QNO5) Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
let quote: string="A PERSON WHO NEVER MADE A MISTAKE NEVER TRIED ANYTHING NEW";
let famous_person: string="Albert Einestien";
let message=`${famous_person} once said,${quote}`;
console.log(message);

// Qno6)Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
let personName2:string  =`\n\t FAWWAD\t\n`;
console.log(personName2);
let stripped:string =personName2.trim();
console.log(stripped);

// Qno7)Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.

// Qno8)You should create four lines that look like this:
//  console.log(5 + 3)
// Your output should simply be four lines with the number 8 appearing once on each line.
console.log(5 +3);//addition
console.log(12 -4);//subtraction
console.log(2 *4);//multiplication
console.log(32 /4);//division

// Qno9)Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.

let favorite_Number:number=16;
console.log(`my favorite number is ${favorite_Number}`);

// Qno10)Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.

//exercise 10
//my name is Fawwad
//DATE 21/FEB/2024
console.log("hello world");

// Qno11)Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
let members:string[]=['shaban','izhan','ebad','omar','ali'];
for(let i=0 ;i<members.length;i++){
    console.log(members[i]);
}

// Qno12)Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
//EXERCISE 12
let members1:string[]=['shaban','ebad','anas','izhan','ali'];
let message1:string='hello how are you?,';
for (let i=0; i<members1.length;i++){
    console.log(message1+members1[i]);
}

// Qno13)Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

//exercise 13
let transportation:string[]=['BMW','MERCEDES','AUDI','KAWASAKI H2R','HAYABUSA'];
for(let i=0; i<transportation.length;i++){
    console.log('I WOULD LIKE TO HAVE '+transportation[i]);

}
// Qno14)Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

//guest list
let guestList2:string[]=['ALI','SHABAN','EBAD','ANAS'];
for(let i=0;i<guestList2.length;i++){
    console.log("Respected Friend "+guestList2[i]+",\nI would like to invite you to dinner at my house.\nTHANK YOU\n");
}
export{guestList2}

/*Qno15)Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.*/
//changing guest list
let guestList1:string[]=['ALI','SHABAN','EBAD','ANAS'];
for(let i=0;i<guestList1.length;i++){
    console.log("Respected Friend "+guestList1[i]+",\nI would like to invite you to dinner at my house.\nTHANK YOU\n");
}
let not_coming:string='SHABAN';
let new_person:string='HASSAN';
guestList1[1]=new_person;
for(let i=0;i<guestList1.length;i++){
    console.log("Respected Friend "+guestList1[i]+",\nI would like to invite you to dinner at my house.\nTHANK YOU\n");
}
console.log(`Mr.${not_coming} wii not coming for dinner.`);
/*Q16)More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.*/
///MORE GUEST
let guestList:string[]=['ALI','SHABAN','EBAD','ANAS'];
 for(let i=0;i<guestList.length;i++){
  console.log("Respected Friend "+guestList[i]+",\nI would like to invite you to dinner at my house.\nTHANK YOU\n");

 }
let not_coming1:string='SHABAN';
let new_person1:string='HASSAN';
guestList[1]=new_person1

for(let i=0;i<guestList.length;i++){
    console.log("Respected Friend "+guestList[i]+",\nI would like to invite you to dinner at my house.\nTHANK YOU\n");
  
   }
   guestList.unshift('ABDULLAH','IBRAHIM','REHMAN');
   for(let i=0;i<guestList.length;i++){
    console.log("Respected Friend "+guestList[i]+",\nI would like to invite you to dinner at my house.we found a big table so, we decided to invite three more guest\nTHANK YOU\n");
  
   };
//  Qno17)Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//    • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
   
//    • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
   
//    • Print a message to each of the two people still on your list, letting them know they’re still invited.
   
//    • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

let guestList3:string[]=['ALI','SHABAN','EBAD','ANAS'];

let not_coming2:string='SHABAN';
let new_person2:string='HASSAN';
guestList[1]=new_person2


  guestList3.unshift('ABDULLAH','IBRAHIM','REHMAN');

console.log('\nunfortunately we cannot arrange a big table,only two persons can come.');
while(guestList3.length>2){
    let remove_guest=guestList3.pop();
    console.log(`sorry Sir, ${remove_guest} you are not  invited for dinner.`);

}

for(let i=0;i<guestList3.length;i++){
    console.log("Respected Friend "+guestList3[i]+",\n you are still invite on dinner..\nTHANK YOU\n");
  
  }
  guestList3.splice(0,2)
  console.log(guestList3);

//   Qno18)Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

let places :string[]=["KARACHI","HYDERABAD","SIALKOT","LARKANA","LAHORE"];
console.log("original order = "+ places);
//print your array
console.log("copy ="+ [...places].sort());
//show that your array is still in its original order
console.log("original order = "+ places);
//reverse order
console.log("reverse ="+ [...places].sort().reverse());
//show that your array is still in its original order again
console.log("reverse ="+ [...places].sort().reverse().reverse());
//print the array to show that its order has changed
console.log("original order = "+ places.sort());
//reverse the order of your list again
console.log("original order = "+ places.sort().reverse());

// Qno19)Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

// import{ guestList }from"../Q14Guest List/app"
// console.log(`\nprinting number of guest invited`);
// console.log(`we had finally invited people ${guestList.length}from ex14`);
console.log("I COMMENT QUESTION19 BECAUSE QUESTION14 PRESENT IN THE SAME FOLDER.")

// Qno20)Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
let sports:string[]=['CRICKET','FOOTBALL','HOCKEY','SWIMMING','TANNIS'];
console.log("LIST OF POPULAR SPORTS ");
for(let top of sports ){
    console.log(top)
}

// Qno21)They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
interface items{
    name:string
    price:number
}
//creat two objects 
const cloths:items={
 name:"jacket",
price:100
}
const sports_equipments:items={
    name:"bat",
    price:150
}
console.log(`cloth name:${cloths.name},pric:$${cloths.price}`);
console.log(`sports equipment name:${sports_equipments.name},price:$${sports_equipments.price}`);

// Qno22)Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
let  array:(string|number)[]=['fawwad','ebad',3,2,1,7];
console.log(array[5]);
console.log(array[4]);
console.log(array[3]);
console.log(array[2]);
console.log(array[1]);
console.log(array[0]);

// Qno23)Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.")

// console.log(car == 'subaru')

// • Look closely at your results, and make sure you understand why each line evaluates to True or False.

// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

//conditional test
let  car:string="subaru"
//test no 1
console.log("Is car =='subaru' I preedict True?");
console.log(car =='subaru');
//test no 2
console.log("Is car ==='subaru' I preedict True?");
console.log(car ==='subaru');
//test no 3
console.log("Is car !='mercedes' I preedict True?");
console.log(car !='meercedes');
//test no 4
console.log("Is car !=='BMW' I preedict True?");
console.log(car !=='BMW');
//test no 5
console.log("Is car.upper case =='SUBARU' I preedict True?");
console.log(car.toUpperCase() =='SUBARU');
//test no 6
console.log("Is =='SUBARU' I preedict false?");
console.log(car =='SUBARU');
//test no 7
console.log("Is ==='SUBARU' I preedict false?");
console.log(car ==='SUBARU');
//test no 7
console.log("Is ==='Train' I preedict false?");
console.log(car =='train');
//test no 7
console.log("Is ==='Train' I preedict false?");
console.log(car =='train');
//test no 8
console.log("Is <'subaru' I preedict false?");
console.log(car < "subaru");
//test no 9
console.log("Is >'subaru' I preedict false?");
console.log(car > "subaru");
//test no 10
console.log("Is car !=='subaru' I preedict false?");
console.log(car !==car);

// Qno24)More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array

//equality test
console.log("equality test with strings:","ipad"==="ipad");
//inequality test
console.log("inequality test with strings:",("ipad" as string)!="iphone");
//test using lower case function 
console.log("lower case function test","FAWWAD".toLowerCase()==="fawwad");
//numerical test involving equality
console.log("equality test with numbers",16===16);
//numerical test involving inequality
console.log("inequality test with numbers",(16 as number)!=11);
//greater than
console.log("greater than",5>2);
//less than
console.log("less than",5<10);
//greater than or equal to
console.log("greater than and equal to",5>=5);
//less than or equal to  
console.log("less than or equal to",99<=100);
//test using "and"operator
console.log("And operator test",5===5 && 15>10);
//test using "or" operator
console.log("Or operator test",5===5 || 15>20);
//test whether an item is in array
let vegetables:string[]=["potato","onion","chilli"];
console.log("Test chilli in an array:",vegetables.includes("chilli"));
//test whether an item is not in array
console.log("Test mango is not in array:",!vegetables.includes("apple"));

// Q25)Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.

// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)


//create a variable called alien colours 
let alien_color1:string="yellow";
//if statement
if(alien_color1==="yellow"){
    console.log("Player just earned 5 points")
}
//another if statement but its fail
alien_color1="red";
if(alien_color1==="yellow"){
    console.log("Player just earned 5 points")
}

// Q26)Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.

// • Write one version of this program that runs the if block and another that runs the else block.

//alien color 2 
let alien_color:string="yellow";
//"if" and "else chain"
if(alien_color==="yellow"){
    console.log("Player just earned 5 points for shooting the alien")
}else{
    console.log("player just earned 10 points ")
}
///another "if"and"ellse" chain but it fails
alien_color="red";
if(alien_color==="yellow"){
    console.log("Player just earned 5 points for shooting the alien")
}else{
    console.log("player just earned 10 points ")
};
// Q27)Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.

// • If the alien is yellow, print a message that the player earned 10 points.

// • If the alien is red, print a message that the player earned 15 points.

// • Write three versions of this program, making sure each message is printed for the appropriate color alien

//version 1
let aliencolor:string="green";
if (aliencolor==="green"){
    console.log("player earned 5 points");
}
else if(aliencolor==="red"){
    console.log("player earned 10 points")   
}
else if(aliencolor==="yellow"){
    console.log("player earned 15 points")   
}else{
    console.log("please select right color");
}
//version 2 of the program
aliencolor="yellow";
if (aliencolor==="green"){
    console.log("player earned 5 points");
}
else if(aliencolor==="red"){
    console.log("player earned 10 points")   
}
else if(aliencolor==="yellow"){
    console.log("player earned 15 points")   
}else{
    console.log("please select right color");
}
//version 3
if (aliencolor==="red"){
    console.log("player earned 5 points");
}
else if(aliencolor==="red"){
    console.log("player earned 10 points")   
}
else if(aliencolor==="red"){
    console.log("player earned 15 points")   
}else{
    console.log("please select right color");
};
// Q28)Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.

// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.

// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.

// • If the person is age 65 or older, print a message that the person is an elder.
let age :number=25;
if(age< 2){
    console.log("person is a baby.");
}
else if (age >= 2 && age< 4){
console.log("a person is a todler.");
}
else if(age >=4 && age <13){
    console.log("a person is kid.");
}
else if(age>=13 && age<20){
    console.log("a person is a teenager.")
}
else if(age>=20 && age<65){
    console.log("a person is an adullt.")
}
else
    console.log("a person is an elder.");

// Q29)Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
let favFruit:string[]=["MANGO","BANANA","PEACH","APPLE"];
if (favFruit.includes("APPLE")){
    console.log('I REALLY LIKE APPLE!');
}
if (favFruit.includes("BANANA")){
    console.log('I REALLY LIKE BANANA!');
}
if (favFruit.includes("ORANGE")){
    console.log('I REALLY LIKE ORANGE!');
}
if (favFruit.includes("STRAWBERRY")){
    console.log('I REALLY LIKE STRAWBERRY!');
}
if (favFruit.includes("MANGO")){
    console.log('I REALLY LIKE MANGO!');
};
// Q30)Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
const userName1:string[]=['admin','tony stark','captain america','hulk','Dr strange'];
       for(let i=0 ; i<userName1.length;i++){

    if(userName1[i]==='admin'){

        console.log("hello admin, would you like to see a status report?")
    }else{
        console.log(`Hello ${userName1[1]},thank you for logging in again`);
    }
 };
// Q31)No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.

let userName:string[]=["shaban","ebad","huzaifa","ibrahim"];
if (userName.length===0){
    console.log("we need to find some users.")
}else{
userName=[];
console.log ("all users have been removed. "+userName.length)
};

// Q32)Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
let currentuser:string[]=["abDullah","jAwab","yaSir","Rehman"];
let new_user:string[]=["fawwad","shaban","yaSir","ebad","Rehman"];
new_user.forEach(newUsername =>{

    let lowercase:string=newUsername.toLowerCase();
    if(currentuser.map(c_user => c_user.toLowerCase()).includes(lowercase)){
        console.log(`the username ${newUsername} is not available, please try different username.`)
    }else{
        console.log(`the user name ${newUsername} is available.`);

    }
 });
// Q33)Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.

// • Loop through the array.

// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
let numbers:number[]=[1,2,3,4,5,6,7,8,9];
for (let num of numbers){

  let  ordinalEnding:string;
  if (num===1){
    ordinalEnding="st"
  }
  else if(num===2){
    ordinalEnding="nd"
  }
  else if(num===3){
    ordinalEnding="rd"
  }
  else {
    ordinalEnding="th"
  }
  console.log(`${num}${ordinalEnding}`)
 };
// Q34)Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
let pizza:string[]=["pepperoni","cuban","BBQ chicken"];
for (let pizzas of pizza){
  console.log(`i like ${pizzas} pizza`)
}
console.log(`i rally love pizza!`);
//  Q35)Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
let animal:string[]=["dog","cat","goat"];
for  (let animals of animal){
    console.log(`A ${animals} would make a great pet.`)
}
console.log(`any of these animals would make a great pet!`);

// Q36)T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function
function make_shirts(size:string,text:string){
    console.log(`creating a ${size} shirt with a message ${text}`);
    }
    make_shirts("large","hello");

    // Q37)Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
    function make_shirt(size:string="large" , text :string="i love typescript"){
        console.log(`creat a ${size} shirt with the message:${text}`);
    }
    make_shirt();
    make_shirt("medium");
    make_shirt("small","Hello world");

    // Q38)Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
    function describe_city(city:string , country:string='Default Country'){
        console.log(`${city} is in ${country}`)
        }
        describe_city('Karachi','Pakistan');
        describe_city('Tokyo','japan');
       describe_city('Delhi');
// Q39)City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.        

function city_country(city:string , country:string){
    return`${city},${country}`
}
console.log(city_country('Karachi','Pakistan'));
console.log(city_country('colombo','sri lanka'));
console.log(city_country('delhi','india'));

// Q40)Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.

function make_album(artist : string , title:string,track?:number){
    const album: {artist : string , title:string , track?:number}={
artist : artist,
title : title 
    }
if (track!== undefined){
    album.track =track;
}
    return album;
}
const  album1= make_album("atrist 1","Album title 1");
console.log(album1);
const  album2= make_album("atrist 2","Album title 2");
console.log(album2);
const  album3= make_album("atrist 3","Album title 3",12);
console.log(album3);

// Q41)Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

let magician1:string[]=['herry potter','hermione granger','ron weasley','albus dumbledor'];
function show_magician1(magicians:string[]){
    magician1.forEach(elements => {
        console.log(elements)
    });
}
show_magician1(magician1);
// Q42)Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
let magician:string[]=['herry potter','hermione granger','ron weasley','albus dumbledor'];
function copy_array(arr:string[]){
return [...arr]
}

function make_great(magicianarray:string[]){
    for(let i=0;i<magicianarray.length;i++){
    magicianarray[i]= "the great " +  magicianarray[i]
    }
}
function show_magician(magicians:string[]){
    magicians.forEach(element => {
        console.log(element)
    });
}
const copymagicianarray= copy_array(magician);
make_great(copymagicianarray);
console.log ("\n\nthis is my original array");
show_magician(magician);
console.log ("\n\nthis is my modified copy of an array");
show_magician(copymagicianarray);

// Q43)Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
let magician2:string[]=['herry potter','hermione granger','ron weasley','albus dumbledor'];
function copy_array1(arr:string[]){
return [...arr]
}

function make_great2(magicianarray:string[]){
    for(let i=0;i<magicianarray.length;i++){
    magicianarray[i]= "the great " +  magicianarray[i]
    }
}
function show_magician2(magicians2:string[]){
    magicians2.forEach(element1 => {
        console.log(element1)
    });
}
const copymagicianarray1= copy_array1(magician2);
make_great2(copymagicianarray1);
console.log ("\n\nthis is my original array");
show_magician2(magician2);
console.log ("\n\nthis is my modified copy of an array");
show_magician2(copymagicianarray1);
// Q44)Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function makesandwich(item:string[]){
    console.log('making your sandwich with:\n');
    item.forEach(element => console.log("- "+ element));
    console.log("\nenjoy your sandwich\n")
}
makesandwich(['ham','cheese','lettuce']);
makesandwich(['turkey','bacon']);
makesandwich(['peanut butter','jelly']);

// Q45)Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
function storecarinfo(manufacturer:string,modelName:string,...extraOptions:{[key:string]:any}[]):
 Object {
    const carinfo ={
manufacturer,
modelName,
...Object.assign({},...extraOptions)
 }
 return carinfo;
 }
let answer= storecarinfo('honda','civic',{color:'black'},{features:['navigation','power window']});
console.log (answer);







