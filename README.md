<p align="center">
<a href="https://www.npmjs.com/package/uninspect" target="_blank" rel="noopener noreferrer">
<img src="https://api.iconify.design/mingcute:inspect-line.svg?color=%23fdb4e2" alt="logo" width='100'/></a>
</p>

<p align="center">
  A library detect inspect element and disable it
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/uninspect" target="_blank" rel="noopener noreferrer"><img src="https://badge.fury.io/js/csvs-parsers.svg" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/package/uninspect" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/npm/dt/csvs-parsers.svg?logo=npm" alt="NPM Downloads" /></a>
  <a href="https://bundlephobia.com/result?p=uninspect" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/bundlephobia/minzip/uninspect" alt="Minizip" /></a>
  <a href="https://github.com/hunghg255/uninspect/graphs/contributors" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/all_contributors-1-orange.svg" alt="Contributors" /></a>
  <a href="https://github.com/hunghg255/uninspect/blob/main/LICENSE" target="_blank" rel="noopener noreferrer"><img src="https://badgen.net/github/license/hunghg255/uninspect" alt="License" /></a>
</p>

## Usage

In html:

```html
<head>
  <!-- ... -->
  <script type="module" src="https://cdn.jsdelivr.net/npm/uninspect@0.0.3/dist/index.mjs"></script>
  <script type="module">
    // custom options
    ConsoleBan.init({
      redirect: '/play/404.html'
    })
  </script>
</head>
```

Or in bundle project:

```bash
npm i uninspect
```

```js
import { init } from 'uninspect'

init(options)
```

## Strategy

### Redirect

```js
ConsoleBan.init({
  // Redirect to /404 relative url
  redirect: '/404',
  // Redirect to absolute url
  redirect: 'http://domain.com/path'
})
```

Use redirect to guide users to a site introduction page or a purely static 404 page

P.S. In SPA route push scene, detect will not take effect again.

### Rewrite

```js
var div = document.createElement('div')
div.innerHTML = 'Stop'

ConsoleBan.init({
  // Rewrite the <body></body> as a string
  write: '<h1> Stop </h1>',
  // or rewrite a element
  write: div
})
```

Rewriting strategies can completely block web site content, but are less friendly and are not recommended.

### Custom callback

```js
ConsoleBan.init({
  callback: () => {
    // ...
  }
})
```

The callback function supports custom policies after the console is opened.

## Options

|    name     | required |       type        | default | description                                           |
| :---------: | :------: | :---------------: | :-----: | :---------------------------------------------------- |
|   `clear`   |    no    |      boolean      | `true`  | Disable `console.clear`                               |
|   `debug`   |    no    |      boolean      | `true`  | Whether to enable infinity `debugger`                 |
| `debugTime` |    no    |      number       | `3000`  | The `debugger` execution interval                     |
| `redirect`  |    no    |      string       |   `-`   | Redirect url when console is opend                    |
|   `write`   |    no    | string \| Element |   `-`   | Rewrite `document.body` content when console is opend |
| `callback`  |    no    |     Function      |   `-`   | Custom callback when console is opend                 |
|  `bfcache`  |    no    |      boolean      | `true`  | Disable bfcache                                       |

P.S. `redirect`, `write`, `callback` only one will work, priority use `callback`.

## Support

| browser core | support |
| :----------: | :-----: |
|    chrome    |    ✓    |
|   firefox    |    ✓    |
|    safari    |    ✓    |
