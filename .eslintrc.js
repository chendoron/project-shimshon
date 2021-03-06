module.exports = {
    "env": {
        es6: true,
        node: true,
        "jest/globals": true
    },
    "extends": ["plugin:jest/recommended", "plugin:prettier/recommended"],
    "plugins": ["jest", "prettier"],
    "rules": {
        "jest/no-disabled-tests": "warn",
        "jest/no-focused-tests": "error",
        "jest/no-identical-title": "error",
        "jest/prefer-to-have-length": "warn",
        "jest/valid-expect": "error",

        'no-console': 2,
        'no-debugger': 2,
        'prefer-const': 2,

        'prettier/prettier': ['error', {
            semi: false,
            singleQuote: true,
            arrowParens: 'always',
        }],
    }
};