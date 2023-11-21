import { openBlock, createElementBlock, createElementVNode, Fragment, renderList, createBlock, resolveDynamicComponent, normalizeClass, withCtx, renderSlot, createCommentVNode } from "vue";
import { ReactiveLocalStorage } from "@unrest/vue-storage";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = {
  name: "UnrestToolbar",
  props: {
    storage: Object
  },
  computed: {
    tools() {
      return this.storage.listTools();
    },
    selected_tool() {
      const { tool, variant } = this.storage.state.selected;
      if (variant) {
        return this.tools.find((t) => t.slug === tool && t.variants.includes(variant));
      }
      return this.tools.find((t) => t.slug === tool);
    }
  }
};
const _hoisted_1 = { class: "ur-toolbar" };
const _hoisted_2 = { class: "ur-toolbar__row" };
const _hoisted_3 = { class: "btn-group" };
const _hoisted_4 = {
  key: 0,
  class: "ur-toolbar__separator btn -secondary"
};
const _hoisted_5 = {
  key: 0,
  class: "ur-toolbar__row btn-group"
};
const _hoisted_6 = ["onClick", "title"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _a;
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createElementVNode("div", _hoisted_2, [
      createElementVNode("div", _hoisted_3, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($options.tools, (tool) => {
          return openBlock(), createElementBlock(Fragment, {
            key: tool.name
          }, [
            tool === "separator" ? (openBlock(), createElementBlock("div", _hoisted_4)) : (openBlock(), createBlock(resolveDynamicComponent(tool.items ? "unrest-dropdown" : "div"), {
              key: 1,
              onClick: tool.click,
              items: tool.items,
              title: tool.name,
              class: normalizeClass(tool.class),
              id: tool.id
            }, {
              default: withCtx(() => [
                createElementVNode("i", {
                  class: normalizeClass(tool.icon)
                }, null, 2)
              ]),
              _: 2
            }, 1032, ["onClick", "items", "title", "class", "id"]))
          ], 64);
        }), 128)),
        renderSlot(_ctx.$slots, "buttons")
      ]),
      renderSlot(_ctx.$slots, "right")
    ]),
    ((_a = $options.selected_tool) == null ? void 0 : _a.children) ? (openBlock(), createElementBlock("div", _hoisted_5, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($options.selected_tool.children, (child) => {
        return openBlock(), createElementBlock("div", {
          key: child.slug,
          onClick: child.click,
          class: normalizeClass(child.class),
          title: child.slug
        }, [
          createElementVNode("i", {
            class: normalizeClass(child.icon)
          }, null, 2)
        ], 10, _hoisted_6);
      }), 128))
    ])) : createCommentVNode("", true),
    renderSlot(_ctx.$slots, "default")
  ]);
}
var UnrestToolbar = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var INFINITY = 1 / 0;
var symbolTag = "[object Symbol]";
var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
var rsAstralRange = "\\ud800-\\udfff", rsComboMarksRange = "\\u0300-\\u036f\\ufe20-\\ufe23", rsComboSymbolsRange = "\\u20d0-\\u20f0", rsDingbatRange = "\\u2700-\\u27bf", rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff", rsMathOpRange = "\\xac\\xb1\\xd7\\xf7", rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", rsPunctuationRange = "\\u2000-\\u206f", rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde", rsVarRange = "\\ufe0e\\ufe0f", rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
var rsApos = "['\u2019]", rsAstral = "[" + rsAstralRange + "]", rsBreak = "[" + rsBreakRange + "]", rsCombo = "[" + rsComboMarksRange + rsComboSymbolsRange + "]", rsDigits = "\\d+", rsDingbat = "[" + rsDingbatRange + "]", rsLower = "[" + rsLowerRange + "]", rsMisc = "[^" + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]", rsFitz = "\\ud83c[\\udffb-\\udfff]", rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")", rsNonAstral = "[^" + rsAstralRange + "]", rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsUpper = "[" + rsUpperRange + "]", rsZWJ = "\\u200d";
var rsLowerMisc = "(?:" + rsLower + "|" + rsMisc + ")", rsUpperMisc = "(?:" + rsUpper + "|" + rsMisc + ")", rsOptLowerContr = "(?:" + rsApos + "(?:d|ll|m|re|s|t|ve))?", rsOptUpperContr = "(?:" + rsApos + "(?:D|LL|M|RE|S|T|VE))?", reOptMod = rsModifier + "?", rsOptVar = "[" + rsVarRange + "]?", rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*", rsSeq = rsOptVar + reOptMod + rsOptJoin, rsEmoji = "(?:" + [rsDingbat, rsRegional, rsSurrPair].join("|") + ")" + rsSeq, rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
var reApos = RegExp(rsApos, "g");
var reComboMark = RegExp(rsCombo, "g");
var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
var reUnicodeWord = RegExp([
  rsUpper + "?" + rsLower + "+" + rsOptLowerContr + "(?=" + [rsBreak, rsUpper, "$"].join("|") + ")",
  rsUpperMisc + "+" + rsOptUpperContr + "(?=" + [rsBreak, rsUpper + rsLowerMisc, "$"].join("|") + ")",
  rsUpper + "?" + rsLowerMisc + "+" + rsOptLowerContr,
  rsUpper + "+" + rsOptUpperContr,
  rsDigits,
  rsEmoji
].join("|"), "g");
var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboMarksRange + rsComboSymbolsRange + rsVarRange + "]");
var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
var deburredLetters = {
  "\xC0": "A",
  "\xC1": "A",
  "\xC2": "A",
  "\xC3": "A",
  "\xC4": "A",
  "\xC5": "A",
  "\xE0": "a",
  "\xE1": "a",
  "\xE2": "a",
  "\xE3": "a",
  "\xE4": "a",
  "\xE5": "a",
  "\xC7": "C",
  "\xE7": "c",
  "\xD0": "D",
  "\xF0": "d",
  "\xC8": "E",
  "\xC9": "E",
  "\xCA": "E",
  "\xCB": "E",
  "\xE8": "e",
  "\xE9": "e",
  "\xEA": "e",
  "\xEB": "e",
  "\xCC": "I",
  "\xCD": "I",
  "\xCE": "I",
  "\xCF": "I",
  "\xEC": "i",
  "\xED": "i",
  "\xEE": "i",
  "\xEF": "i",
  "\xD1": "N",
  "\xF1": "n",
  "\xD2": "O",
  "\xD3": "O",
  "\xD4": "O",
  "\xD5": "O",
  "\xD6": "O",
  "\xD8": "O",
  "\xF2": "o",
  "\xF3": "o",
  "\xF4": "o",
  "\xF5": "o",
  "\xF6": "o",
  "\xF8": "o",
  "\xD9": "U",
  "\xDA": "U",
  "\xDB": "U",
  "\xDC": "U",
  "\xF9": "u",
  "\xFA": "u",
  "\xFB": "u",
  "\xFC": "u",
  "\xDD": "Y",
  "\xFD": "y",
  "\xFF": "y",
  "\xC6": "Ae",
  "\xE6": "ae",
  "\xDE": "Th",
  "\xFE": "th",
  "\xDF": "ss",
  "\u0100": "A",
  "\u0102": "A",
  "\u0104": "A",
  "\u0101": "a",
  "\u0103": "a",
  "\u0105": "a",
  "\u0106": "C",
  "\u0108": "C",
  "\u010A": "C",
  "\u010C": "C",
  "\u0107": "c",
  "\u0109": "c",
  "\u010B": "c",
  "\u010D": "c",
  "\u010E": "D",
  "\u0110": "D",
  "\u010F": "d",
  "\u0111": "d",
  "\u0112": "E",
  "\u0114": "E",
  "\u0116": "E",
  "\u0118": "E",
  "\u011A": "E",
  "\u0113": "e",
  "\u0115": "e",
  "\u0117": "e",
  "\u0119": "e",
  "\u011B": "e",
  "\u011C": "G",
  "\u011E": "G",
  "\u0120": "G",
  "\u0122": "G",
  "\u011D": "g",
  "\u011F": "g",
  "\u0121": "g",
  "\u0123": "g",
  "\u0124": "H",
  "\u0126": "H",
  "\u0125": "h",
  "\u0127": "h",
  "\u0128": "I",
  "\u012A": "I",
  "\u012C": "I",
  "\u012E": "I",
  "\u0130": "I",
  "\u0129": "i",
  "\u012B": "i",
  "\u012D": "i",
  "\u012F": "i",
  "\u0131": "i",
  "\u0134": "J",
  "\u0135": "j",
  "\u0136": "K",
  "\u0137": "k",
  "\u0138": "k",
  "\u0139": "L",
  "\u013B": "L",
  "\u013D": "L",
  "\u013F": "L",
  "\u0141": "L",
  "\u013A": "l",
  "\u013C": "l",
  "\u013E": "l",
  "\u0140": "l",
  "\u0142": "l",
  "\u0143": "N",
  "\u0145": "N",
  "\u0147": "N",
  "\u014A": "N",
  "\u0144": "n",
  "\u0146": "n",
  "\u0148": "n",
  "\u014B": "n",
  "\u014C": "O",
  "\u014E": "O",
  "\u0150": "O",
  "\u014D": "o",
  "\u014F": "o",
  "\u0151": "o",
  "\u0154": "R",
  "\u0156": "R",
  "\u0158": "R",
  "\u0155": "r",
  "\u0157": "r",
  "\u0159": "r",
  "\u015A": "S",
  "\u015C": "S",
  "\u015E": "S",
  "\u0160": "S",
  "\u015B": "s",
  "\u015D": "s",
  "\u015F": "s",
  "\u0161": "s",
  "\u0162": "T",
  "\u0164": "T",
  "\u0166": "T",
  "\u0163": "t",
  "\u0165": "t",
  "\u0167": "t",
  "\u0168": "U",
  "\u016A": "U",
  "\u016C": "U",
  "\u016E": "U",
  "\u0170": "U",
  "\u0172": "U",
  "\u0169": "u",
  "\u016B": "u",
  "\u016D": "u",
  "\u016F": "u",
  "\u0171": "u",
  "\u0173": "u",
  "\u0174": "W",
  "\u0175": "w",
  "\u0176": "Y",
  "\u0177": "y",
  "\u0178": "Y",
  "\u0179": "Z",
  "\u017B": "Z",
  "\u017D": "Z",
  "\u017A": "z",
  "\u017C": "z",
  "\u017E": "z",
  "\u0132": "IJ",
  "\u0133": "ij",
  "\u0152": "Oe",
  "\u0153": "oe",
  "\u0149": "'n",
  "\u017F": "ss"
};
var freeGlobal = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root = freeGlobal || freeSelf || Function("return this")();
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index2 = -1, length = array ? array.length : 0;
  if (initAccum && length) {
    accumulator = array[++index2];
  }
  while (++index2 < length) {
    accumulator = iteratee(accumulator, array[index2], index2, array);
  }
  return accumulator;
}
function asciiToArray(string) {
  return string.split("");
}
function asciiWords(string) {
  return string.match(reAsciiWord) || [];
}
function basePropertyOf(object) {
  return function(key) {
    return object == null ? void 0 : object[key];
  };
}
var deburrLetter = basePropertyOf(deburredLetters);
function hasUnicode(string) {
  return reHasUnicode.test(string);
}
function hasUnicodeWord(string) {
  return reHasUnicodeWord.test(string);
}
function stringToArray(string) {
  return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
}
function unicodeToArray(string) {
  return string.match(reUnicode) || [];
}
function unicodeWords(string) {
  return string.match(reUnicodeWord) || [];
}
var objectProto = Object.prototype;
var objectToString = objectProto.toString;
var Symbol$1 = root.Symbol;
var symbolProto = Symbol$1 ? Symbol$1.prototype : void 0, symbolToString = symbolProto ? symbolProto.toString : void 0;
function baseSlice(array, start, end) {
  var index2 = -1, length = array.length;
  if (start < 0) {
    start = -start > length ? 0 : length + start;
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : end - start >>> 0;
  start >>>= 0;
  var result = Array(length);
  while (++index2 < length) {
    result[index2] = array[index2 + start];
  }
  return result;
}
function baseToString(value) {
  if (typeof value == "string") {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : "";
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY ? "-0" : result;
}
function castSlice(array, start, end) {
  var length = array.length;
  end = end === void 0 ? length : end;
  return !start && end >= length ? array : baseSlice(array, start, end);
}
function createCaseFirst(methodName) {
  return function(string) {
    string = toString(string);
    var strSymbols = hasUnicode(string) ? stringToArray(string) : void 0;
    var chr = strSymbols ? strSymbols[0] : string.charAt(0);
    var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string.slice(1);
    return chr[methodName]() + trailing;
  };
}
function createCompounder(callback) {
  return function(string) {
    return arrayReduce(words(deburr(string).replace(reApos, "")), callback, "");
  };
}
function isObjectLike(value) {
  return !!value && typeof value == "object";
}
function isSymbol(value) {
  return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
}
function toString(value) {
  return value == null ? "" : baseToString(value);
}
function deburr(string) {
  string = toString(string);
  return string && string.replace(reLatin, deburrLetter).replace(reComboMark, "");
}
var startCase = createCompounder(function(result, word, index2) {
  return result + (index2 ? " " : "") + upperFirst(word);
});
var upperFirst = createCaseFirst("toUpperCase");
function words(string, pattern, guard) {
  string = toString(string);
  pattern = guard ? void 0 : pattern;
  if (pattern === void 0) {
    return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
  }
  return string.match(pattern) || [];
}
var lodash_startcase = startCase;
const _getIcon = (tool, variant) => {
  return `-tool_${tool} -variant_${variant}`;
};
const ToolStorage = (LS_KEY, { tools, initial = {} }) => {
  initial = { selected: {}, ...initial };
  const storage = ReactiveLocalStorage({ LS_KEY, initial });
  const makeTool = (options) => {
    if (options === "separator") {
      return options;
    }
    if (options.getIcon) {
      throw "DEPRECATED: Use icon instead of getIcon";
    }
    const { slug, name, variants = [], icon = _getIcon, items } = options;
    const select = (tool_slug, variant) => {
      if (typeof options.select === "function") {
        options.select(tool_slug, variant);
      } else if (options.select === TOGGLE) {
        storage.save({ [tool_slug]: !storage.state[tool_slug] });
      } else {
        storage.save({ selected: { tool: tool_slug, variant } });
      }
    };
    const getIcon = (t, v) => typeof icon === "function" ? icon(t, v) : icon;
    const { tool: selected_tool, variant: selected_variant } = storage.state.selected;
    const variant_selected = !variants.length || variants.includes(selected_variant);
    const selected = slug === selected_tool && variant_selected;
    const toggle_selected = options.select === TOGGLE && storage.state[slug];
    return {
      slug,
      id: options.id,
      icon: getIcon(selected_tool, variant_selected ? selected_variant : variants[0]),
      name: name || lodash_startcase(slug),
      class: `btn ${selected || toggle_selected ? "-primary" : "-secondary"}`,
      click: () => select(slug, variants[0]),
      variants,
      items,
      children: variants == null ? void 0 : variants.map((child_slug) => ({
        slug: child_slug,
        icon: getIcon(selected_tool, child_slug),
        class: ["btn", selected_variant === child_slug ? "-primary" : "-secondary"],
        click: () => select(slug, child_slug)
      }))
    };
  };
  storage.listTools = () => {
    const list = typeof tools === "function" ? tools(storage) : tools;
    return list.map(makeTool);
  };
  return storage;
};
const TOGGLE = ToolStorage.TOGGLE = "TOGGLE";
var index = {
  UnrestToolbar,
  ToolStorage,
  install(app) {
    app.component("UnrestToolbar", UnrestToolbar);
  }
};
export { index as default };
