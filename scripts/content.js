var nodes = document.querySelectorAll('[title="Copy full test name to clipboard"]');
nodes.forEach((node) => {
  node.setAttribute('onclick','alert("done")');
});
