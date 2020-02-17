import "@babel/polyfill";
import cssVars from "css-vars-ponyfill";

if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

// проверяем поддержку
if (!Element.prototype.closest) {

  // реализуем
  Element.prototype.closest = function(css) {
    var node = this;

    while (node) {
      if (node.matches(css)) return node;
      else node = node.parentElement;
    }
    return null;
  };
}

// Document
cssVars({
  rootElement: document // default
});
