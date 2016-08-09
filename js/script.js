// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);


//Quotes Array with Objects//
var quotes = [
	{
		quote: "The weak can never forgive. Forgiveness is the attribute of the strong.",
		source: "Mahatma Gandhi"
	},
	{
		quote: "There is nothing impossible to him who will try.",
		source: "Alexander The Great"
	},
	{
		quote: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
		source: "Aristotle"
	},
	{
		quote: "Imagination is more important than knowledge.",
		source: "Albert Einstein"
	},
	{
		quote: "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.",
		source: "Dr. Martin Luther King Jr."
	},
	{
		quote: "You can't separate peace from freedom because no one can be at peace unless he has his freedom.",
		source: "Malcom X"
	},
	{
		quote: "You don't learn to walk by following rules. You learn by doing, and by falling over.",
		source: "Richard Branson"
	},
	{
		quote: "I have never let my schooling interfere with my education.",
		source: "Mark Twain"
	},
	{
		quote: "I hated every minute of training, but I said, 'Don't quit. Suffer now and live the rest of your life as a champion.",
		source: "Muhammad Ali"
	}
];

//Gets Random Quotes//
function getRandomQuote () {
	for (var i = 0; i < quotes.length; i++) {
		var randomizer = Math.floor(Math.random() * quotes.length);
		return quotes[randomizer];
	}
}

//Function prints quotes to the page//
function printQuote () {
	var randomQuotes = getRandomQuote();
	var printHTML = '<p class="quote">' + randomQuotes.quote + '</p>';
	printHTML += '<p class="source">' + randomQuotes.source;
	document.getElementById("quote-box").innerHTML = printHTML;
}
