tools = {
	/**
	 * Converts a string to its html characters completely.
	 *
	 * @param {String} str String with unescaped HTML characters
	 **/
	encode: function (str) {
		const element = document.createElement('div');
		element.textContent = str;
		return element.innerHTML;
	},
	qotd: function () {
		return fetch('https://favqs.com/api/qotd');
	}
};
