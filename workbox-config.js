module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{png,htnl,json,js}'
	],
	swDest: '(sw.js)',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};