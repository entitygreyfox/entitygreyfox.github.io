document.getElementById("btnGIS").addEventListener("click", () => {
  event.preventDefault();
  
  let sitepage = document.getElementById("searchatext").value;
  
  let searchatext = `https://www.google.com/search?q=${sitepage}`;  

  window.location.href = searchatext;
});
