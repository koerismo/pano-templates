module.exports = {
	root: true,
	ignorePatterns: ['.build/', 'node_modules/', '.eslintrc.js'],

	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: true
	},

	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/strict-type-checked',
		'plugin:@typescript-eslint/stylistic-type-checked',
		'prettier'
	],

	plugins: [
		'@typescript-eslint',
		'prettier'
	],

	rules: {
		'@typescript-eslint/no-unused-vars': 'off'
	}
}