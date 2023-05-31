(function () {
  const tagEl = document.querySelector(".tags");
  tagEl.innerHTML = tagEl.innerHTML
    .split(" ")
    .map((tag) => '<span class="tag">' + tag + "</span>")
    .join(" ");

  const textEl = document.querySelector("p");
  textEl.innerHTML = textEl.innerHTML.replace(
    / › /g,
    ' <span class="context-separator">›</span> '
  );
})();
