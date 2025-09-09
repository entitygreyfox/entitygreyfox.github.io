document.getElementById("btnGIS").addEventListener("click", () => {
  event.preventDefault();
  
  let sitepage = document.getElementById("searchatext").value;
  
  let searchatext = `https://entitygreyfox.github.io/${sitepage}/`;

  window.location.href = searchatext;
});
