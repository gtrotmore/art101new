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

// Step 3: Display array data in the first div
let arrayContent = "<h2>📋 My Commute Options (Array)</h2>";
arrayContent += "<p>I have <span class='highlight'>" + myCommutes.length + "</span> different ways to commute:</p>";
arrayContent += "<ul>";

// Loop through all commutes in the array
for (let i = 0; i < myCommutes.length; i++) {
    arrayContent += "<li>Option " + (i + 1) + ": " + myCommutes[i] + "</li>";
}
arrayContent += "</ul>";

arrayContent += "<p>My top two choices are: <span class='highlight'>" + myCommutes[0] + "</span> and <span class='highlight'>" + myCommutes[5] + "</span></p>";

// Append to the arrayOutput div
$("#arrayOutput").append(arrayContent);

// Step 4: Display object data in the second div
let objectContent = "<h2> My Favorite Commute (Object)</h2>";
objectContent += "<p><strong>Type:</strong> " + myFavouriteCommute.type + "</p>";
objectContent += "<p><strong>Route Number:</strong> " + myFavouriteCommute.route + "</p>";
objectContent += "<p><strong>Print Name:</strong> " + myFavouriteCommute.print + "</p>";
objectContent += "<p><strong>Has Middle Door:</strong> " + (myFavouriteCommute.hasMiddleDoor ? "Yes ✓" : "No ✗") + "</p>";
objectContent += "<p><strong>Drivers:</strong></p><ul>";

// Loop through all drivers in the drivers array
for (let j = 0; j < myFavouriteCommute.drivers.length; j++) {
    objectContent += "<li>" + myFavouriteCommute.drivers[j];
    if (j === 0) {
        objectContent += " <span class='highlight'>(Best Driver!)</span>";
    }
    objectContent += "</li>";
}
objectContent += "</ul>";

// Append to the objectOutput div
$("#objectOutput").append(objectContent);

// Step 5: Create a combined summary in the third div
let combinedContent = "<h2> Summary</h2>";
combinedContent += "<p>Out of all my commute options, my absolute favorite is the <span class='highlight'>" + myFavouriteCommute.type + "</span> ";
combinedContent += "(specifically the " + myFavouriteCommute.print + " on route " + myFavouriteCommute.route + "). ";
combinedContent += "When " + myFavouriteCommute.drivers[0] + " is driving, it's the best! ";
combinedContent += "But I also enjoy taking the " + myCommutes[2] + " when the weather is nice.</p>";

// Append to the combinedOutput div
$("#combinedOutput").append(combinedContent);

-->