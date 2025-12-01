// Step 1: Declaring an array with commute options
let myCommutes = ["metro bus", "UCSC taps bus", "personal bike", "rental bike", "some random car", "friends"];

// Step 2: Declaring an object describing favorite commute
let myFavouriteCommute = {
    type: "Bus",
    route: 1,
    print: "Mountain Lion",
    hasMiddleDoor: true,
    drivers: ["Elena", "Alex", "the guy with a red beard"],
};

megaSentence = "<p>My top two choices are: <span class='highlight'>" + myCommutes[0] + "</span> and <span class='highlight'>" + myCommutes[5] + "</span></p>";

megaSentence = megaSentence + "<p>My favourite commute possesses such characteristics: type - " + myFavouriteCommute.type + ", route number " + myFavouriteCommute.route + ", the best driver: " + myFavouriteCommute.drivers[0] + "</p>";

$("#output").html(megaSentence);
