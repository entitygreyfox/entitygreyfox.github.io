document.getElementById("btnGIS").addEventListener("click", () => {
  event.preventDefault();
  
  let sitepage = document.getElementById("searchatext").value;
  
  let searchatext = `entitygreyfox.github.io/${sitepage}/`;  

  window.location.href = searchatext;
});
