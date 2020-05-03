# lina_dicto_wemd dictionary for espearanto

<img src="https://raw.githubusercontent.com/MichinariNukazawa/mouse-dictionary/esperanto-variant-lina-dicto/static/options/logo.png" title="Mouse Dictionary" width="400" height="229">

lina_dicto_wemd is dictionary for esperanto to japanese.

Ride [Mouse Dictionary](https://mouse-dictionary.netlify.com/en/) WebExtensions is a super fast dictionary for Chrome and Firefox.

Download it.

- [For Chrome]( https://chrome.google.com/webstore/detail/mlladnmekfebjllfgofppdaekfabfdgi/publish-accepted?authuser=0&hl=ja )
- [For Firefox]( https://addons.mozilla.org/ja/firefox/addon/lina_dicto-wemd/ )

Use it:

- [Getting started](https://github.com/wtetsu/mouse-dictionary/wiki/Getting-started)

## Screenshots

### English-Japanese

![20200503.png]( https://raw.githubusercontent.com/MichinariNukazawa/mouse-dictionary/esperanto-variant-lina-dicto/lina_dicto/document/image/20200503.png )

## How to develop

see [MouseDictionary]( https://github.com/wtetsu/mouse-dictionary )

## Cross-extension messaging

```js
// const MD_EXTENSION_ID = "dnclbikcihnpjohihfcmmldgkjnebgnj"; // MouseDictionary
const MD_EXTENSION_ID = "mlladnmekfebjllfgofppdaekfabfdgi"; // lina_dicto_wemd

chrome.runtime.sendMessage(MD_EXTENSION_ID, {
  type: "text",
  text: "rained cats and dogs"
});
```

## License

lina_dicto_wemd is published under the MIT license.

## Third-party data

This project includes some third-party data:

### Dictionary data

[辞書データについて]( https://github.com/MichinariNukazawa/lina_dicto/blob/master/lina_dicto/dictionary/esperanto/DictionaryChanges.md )

### Images

bookmark icon, gear icon

- https://www.iconfinder.com/iconsets/wpzoom-developer-icon-set
- License: [Creative Commons (Attribution-Share Alike 3.0 Unported)](https://creativecommons.org/licenses/by-sa/3.0/)

## See also

[Chrome 拡張の高速な英語辞書ツールをつくりました](https://qiita.com/wtetsu/items/c43232c6c44918e977c9)(a Japanese tutorial)
