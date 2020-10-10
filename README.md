# PRESENTA Starter Block

This is a `starter` scaffonding to help develop your own PRESENTA block.

There are some parts you need to edit before publishing your own block:

- update the `name`, `version`, `unpkg` and `module` in `package.json`
- update the `file` and `name` in `rollup.config.js`
- update all the `starter` references in `src` and `test`

The following is a template documentation for the end user that needs to be integrated as well.

## Installation

Please read the installation istructions for official plugins [here](https://lib.presenta.cc/extend/#install-an-official-plugin) using this unique identifier: `block-starter`

## Usage

To configure this block use this setting:

```js
{
    type: 'starter',
    name: 'John'
}
```


## Development

Run the watcher:

    npm start

and the local webserver

    npm run test
