const favmovie  = "avatar";
let guess = prompt("guess my favorite movie");
while((guess != favmovie) && ("guess != quit")) {

    guess = prompt("wrong guess please try again");
}

if(guess = favmovie) {
    console.log("congrations!!");
}

else {
    console.log("you quit");
}
