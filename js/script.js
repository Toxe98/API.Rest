const apiRick = async (pagina) => {
  let url = "https://rickandmortyapi.com/api/character/?page=" + pagina;
  const api = await fetch(url);
  const data = await api.json();
  console.log(data);
  resDiv = document.querySelector('#resultado')
  resDiv.innerHTML ="";
  data.results.map(item => {
    itemDiv = document.createElement("div");
    itemDiv.innerHTML = `
    <div class="card" style="width: 18rem;">
        <img src="${item.image}" class="card-img-top">
        <div class="card-body">
        <h5 class="card-title">${item.name}</h5>
        <p class="card-text"><b>Estado:</b> ${item.status}</p>
        <p class="card-text"><b>Especie:</b> ${item.species}</p>
        <p class="card-text"><b>Genero:</b> ${item.gender}</p>
        <p class="card-text"><b>Origen:</b> ${item.origin.name}</p>
      </div>
    </div>
    `;
    resDiv.appendChild(itemDiv)
  });
};

apiRick(1);
