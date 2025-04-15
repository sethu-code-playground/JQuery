/*jQuery is one of the most downloaded and popular javascript library. A library is some chunk of code written by other people and can be used in our projects to suit our needs.
Eg: bootstrap is also a library. We can replace document.querySelector("h1") in jQuery with jQuery("h1") or simply $("h1")*/

/* To use jQuery in our project we use CDN's (Content Delivery Network) as in bootstrap*/

alert("js loaded");

$("h1").css("color", "red");

$(document).ready(function () {  //ready method is used only when cdn of jquery is inside head tag
    $("h1").css("background-color", "green");
    //we call an anonymous function as a callback to execute the jquery
    
});

/*Minification the process of compressing the code in a way to reduce its size.
for Bootstrap the min.css contains css codes
for jQuery the min.css contains the javascript code
in these codes all of the spaces, new lines(enter), comments is removed from the files to reduce its size
minifier.org is the website we use to minify our css and javascript files.

Bootstrap, jQuery or any css/javascript framework will have both normal .js file and .min.js file
we can edit the files and minify it and use it to our need*/

//Selecting elements
$("h1"); //selects h1
$("button"); //selects all the buttons
$(".uli-1"); // selects both the listitems with class li-1
$("#p-1"); //selects the paragraph element with id p-1

$("#p-1").css("font-family", "sans-serif"); // setting css to an element
//Syntax => .css("specify the css property", "the_value_of the property")

$(".ulist").addClass("big-list"); //adds this class to the element with all its css
$("#label").removeClass("labelstyle");
$(".olist").addClass("big-list center"); // add two classes to the element with all its css
$(".olist").removeClass("big-list");

$("#p-1").hasClass("paragraph"); //returns boolean true if class is present in the element, else false.


console.log($("h1").css("color")); //will print the value of the css property, in this case rgb valu of red
console.log($("#p-1").css("font-size"));

$(".h2").text("GoodBye!"); //changes the text in h2 to the value inside (), here GoodBye!
$(".btn-primary").text("Don't click me!"); //changes the text in all buttons to the value in (), here Don't click me!

$("#p-1").html("<em>This is added using jQuery</em>");
//selects the html of the p tag and adds the value inside () between the tag.
$("div").html("<span><em>This is added using jQuery</em></span>");

console.log($("img").attr("src")); // prints the value of the attribute specified inside the ()
$("a").attr("href");
$("a").attr("href", "https://www.amazon.com");
//gets the value of attribute href, and if an attribute href is there sets it value to the value mentioned

console.log($("button").attr("class"));//print the class of the element.

//adding click event to an element. When click event happens the callback function gets executed
$("h2").click(function(){
    $("h2").css("color", "purple"); 
    //changes element color to purple when its clicked
});

// for(var i = 0; i < 3 ; i++){
//     document.querySelectorAll(".btn-primary")[i].addEventListener("click", function() {
//         document.querySelector(".h3").classList.add("big-list"); 
//     });
// }

// the above js code is written using jquery as below

$(".btn-primary").click(function() {
    $("h3").css("color", "yellow");
    $("h3").css("background-color", "black");    
});

// $("input").keypress(function (e) { 
//     console.log(e.key);
//     $(".olist").addClass("big-list");
    
// });

$(document).keydown(function(e){ //inside the entire webpage when key is pressed change valu into e.key
    $(".changing-text").text(e.key);
});

$("#p-1").on("mouseover", function() {
    $("p-1").css("color", "pink") // another way to add eventlistener
    
});

$("#h1").before("<button>Before</button>");//adds the html content inside () before the element's opening tag
$("#h1").after("<button>After</button>");//adds the html content inside () after the element's closing tag
//adds the html content inside () before the beginning of the content inside element
$(".h2").prepend("<button>Prepend</button>");
//adds the html content inside () after the end of the content inside element
$("h3").append("<button>Append</button>");

$(".h1").remove(); //removes the element from the webpage

$(".hide").on("click", function(){
    $(".text").hide();//animation to hide the selected element
    $(".olist").toggle(); 
    $(".anchor").fadeOut();//animation to make element gradually disappear
    $(".ptag").slideUp(); //animation to make the element slideup
    $(".ulist").animate({opacity: 0.5}); // adding custom animations
    /*while adding custom animations inside {} we can oly add properties with numeric values adding
    {color: red} inside {} will result in error */ 
});

$(".show").click(function(){
    $(".text").show(); //animation to show the selected element
    $(".olist").toggle();
    $(".anchor").fadeIn();//animation to make element gradually reappear
    $(".ptag").slideDown();//animation to make the element slideup
    $(".changing-text").slideUp().slideDown().animate({opacity: 0.5})
});

//all these slide and fade animations have their corresponding slideToggle and fadeToggle.