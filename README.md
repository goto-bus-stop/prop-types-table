# @goto-bus-stop/document-prop-types

create a markdown table documenting a React component's propTypes

[Install](#install) - [Usage](#usage) - [License: Apache-2.0](#license)

[![npm][npm-image]][npm-url]
[![travis][travis-image]][travis-url]
[![standard][standard-image]][standard-url]

[npm-image]: https://img.shields.io/npm/v/@goto-bus-stop%2Fdocument-prop-types.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/@goto-bus-stop%2Fdocument-prop-types
[travis-image]: https://img.shields.io/travis/goto-bus-stop/document-prop-types.svg?style=flat-square
[travis-url]: https://travis-ci.org/goto-bus-stop/document-prop-types
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: http://npm.im/standard

## Install

```
npm install @goto-bus-stop/document-prop-types
```

## Usage

```bash
document-prop-types src/index.js > generated-docs.md
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
document-prop-types src/index.js | md-insert -i README.md --header Props
```

## License

[Apache-2.0](LICENSE.md)

[md-insert]: https://github.com/goto-bus-stop/md-insert#readme
