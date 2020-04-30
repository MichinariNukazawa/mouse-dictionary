/**
 * Mouse Dictionary (https://github.com/wtetsu/mouse-dictionary/)
 * Copyright 2018-present wtetsu
 * Licensed under MIT
 */

import entryGeneratorJa from "./entry/ja";
import entryGeneratorEn from "./entry/en";

const build = (text, withCapitalized, mustIncludeOriginalText) => {
  // 書き換え範囲が大きくなりすぎるので、基本的に"en", "English"のままとする。
  const lang = isEnglishText(text) ? "en" : "ja";
  let entries;
  switch (lang) {
    case "en":
      entries = entryGeneratorEn(text, withCapitalized, mustIncludeOriginalText);
      break;
    case "ja":
      entries = entryGeneratorJa(text, withCapitalized, mustIncludeOriginalText);
      break;
  }
  return { entries, lang };
};

const isEnglishText = str => {
  let result = true;
  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i);
    const isEnglishLike = (0x20 <= code && code <= 0x7e)
      || (0x0108 <= code && code <= 0x016d)
      || code === 0x028c
      || code === 0x2011 || code === 0x200c;
    if (!isEnglishLike) {
      result = false;
      break;
    }
  }
  return result;
};

export default { build };
