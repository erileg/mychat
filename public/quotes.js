const quoteCollection = {
	getRandomQuote: function () {
		const index = Math.floor(Math.random() * 12) + 1;
		return this[index];
	},

	1: {
		"words": "Thou art notified that thy kind has infiltrated the galaxy too far already. Thou art directed to return to thine own solar system immediately.",
		"source": "Q"
	},

	2: {
		"words": "You judge yourselves against the pitiful adversaries you've encountered so far: the Romulans, the Klingons... They're nothing compared to what's waiting. Picard, you are about to move into areas of the galaxy containing wonders more incredible than you can possibly imagine... and terrors to freeze your soul. I offer myself as a guide -- only to be rejected out of hand.",
		"source": "Q"
	},

	3: {
		"words": "Micro-brain! Growl for me, let me know you still care!",
		"source": "Q"
	},

	4: {
		"words": "My people encountered them a century ago. They destroyed our cities, scattered my people throughout the galaxy. They're called the Borg. Protect yourself, Captain, or they'll destroy you.",
		"source": "Guinan"
	},

	5: {
		"words": "The Borg is the ultimate user. They're unlike any threat your Federation has ever faced. They're not interested in political conquest, wealth or power as you know it. They're simply interested in your ship. Its technology. They've identified it as something they can consume.",
		"source": "Q"
	},

	6: {
		"words": "If you can't take a little bloody nose, maybe you ought to go back home, and crawl under your bed. It's not safe out here! It's wondrous...with treasures to satiate desires both subtle and gross; but it's not for the timid.",
		"source": "Q"
	},

	7: {
		"words": "Con permiso, Capitan. The hall is rented; the orchestra engaged. Now it's time to see if you can dance. ",
		"source": "Q"
	},

	8: {
		"words": "Because in all the universe, you are the closest thing I have to a friend, Jean-Luc.",
		"source": "Q"
	},

	9: {
		"words": "Oh, very clever, Worf. Eat any good books lately?",
		"source": "Q"
	},

	10: {
		"words": "I'm not good in groups. It's hard to work in groups when you're omnipotent.",
		"source": "Q"
	},

	11: {
		"words": "Oh, you're so stolid! You weren't like that before the beard.",
		"source": "Q"
	},

	12: {
		"words": "Welcome to the Afterlife Jean-Luc...You're dead!",
		"source": "Q"
	}
};