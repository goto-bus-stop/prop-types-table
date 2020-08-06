# prop-types-table

create a markdown table documenting a React component's `propTypes`

> Adapted from material-ui's `PropTypeDescription` component:
> https://github.com/callemall/material-ui/blob/82482758573dc714b210529dcf092dab904db0ba/docs/src/app/components/PropTypeDescription.js

[Install](#install) - [Usage](#usage) - [License: Apache-2.0](#license)

[![npm][npm-image]][npm-url]
[![travis][travis-image]][travis-url]
[![standard][standard-image]][standard-url]

[npm-image]: https://img.shields.io/npm/v/prop-types-table.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/prop-types-table
[travis-image]: https://img.shields.io/travis/goto-bus-stop/prop-types-table.svg?style=flat-square
[travis-url]: https://travis-ci.org/goto-bus-stop/prop-types-table
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: http://npm.im/standard

## Install

```
npm install prop-types-table
```

## Usage

```bash
prop-types-table src/index.js > generated-docs.md
```

The result looks a bit like this:

| Name | Type | Default | Description |
|:-----|:-----|:-----|:-----|
| video | string |  | An 11-character string representing a YouTube video ID.. |
| id | string |  | DOM ID for the player element. |
| className | string |  | CSS className for the player element. |
| width | number, string |  | Width of the player element. |
| height | number, string |  | Height of the player element. |
| onCued | function | () => {} | Sent when the video is cued and ready to play. |
| onBuffering | function | () => {} | Sent when the video is buffering. |

You can use this together with [md-insert][] to put prop type documentation for
components into your markdown readme.

```bash
prop-types-table src/index.js | md-insert -i README.md --header Props
```

## License

[Apache-2.0](LICENSE.md)

[md-insert]: https://github.com/goto-bus-stop/md-insert#readme
