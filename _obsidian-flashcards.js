(function () {
  const tagEl = document.querySelector(".tags");
  if (tagEl !== null) {
    tagEl.innerHTML = tagEl.innerHTML
      .split(" ")
      .map((tag) => '<span class="tag">' + tag + "</span>")
      .join(" ");
  }

  const textEl = document.querySelector("p");
  if (textEl !== null) {
    const parts = textEl.innerHTML.split(" › ");
    if (parts.length > 1) {
      textEl.innerHTML =
        parts
          .slice(0, parts.length - 1)
          .join(' <span class="context-separator">›</span> ') +
        ' <span class="context-separator last">›</span> ' +
        parts[parts.length - 1];
    }
  }
})();
