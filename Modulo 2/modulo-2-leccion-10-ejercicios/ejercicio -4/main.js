"use strict";

// Tenemos que crear mostrar en una web el listado completo de los repositorios de una organización utilizando la api de github de https://api.github.com/orgs/{orgname}

// PASOS
// 1 -  Crear una referencia al input y al botón de buscar

// 2. Definir una función getOrg() :
//
//      - Petición al servidor de github para obtener información sobre la organización
//      -  Recoge la información de la URL donde consultar los repositorios de la organización y guardarla en una constante reposURL
//      -  Otra petición o segunda petición al servidor de github para obtener la información de los repositorios de la organización, utilizando los datos recogidos en el paso anterior (reposURL)
//      -  Con la información obtenida del segundo fetch, hacer un loop para que por CADA repo de la organización, se guarde la propiedad del "name" y lo podamos meter en cada li
//      - Pintar en nuestra web el nombre de todos los repositorios

// 4-  Añadirle al botón un eventListener de click que llame a una función getOrgRepos()

const button = document.querySelector(".btn");

function getOrg() {
  // Creamos referencia al valor del input y valor de la url

  const url = "https://api.github.com/orgs/";
  const organization = document.querySelector(".organization").value;

  // Primera petición fecth para acceder a la información.

  fetch(url + organization)
    // hacer el json() al response del servidor
    .then((response) => response.json())

    // esto nos devuelve todos los datos sobre la organización y nosotras guardaremos la información de la url de los repositorios de la organización "repos_url"

    .then((organizationData) => {
      const reposURL = organizationData.repos_url;
      // IMPORTANTE, como return lanzamos OTRO fetch, podemos usar la constante que hemos creado con la url
      return fetch(reposURL);
    })

    .then((repositoryResponse) => repositoryResponse.json())
    .then((repoData) => {
      // crearemos una lista para todos los nombres de los repositorios, primero crearemos esa lista vacia.
      const repoList = document.querySelector("ul");
      let listContent = "";

      // por cada item que haya en el repoData accederemos a cada nombre del repositorio

      for (const repo of repoData) {
        const repoName = `<li>${repo.name}</li>`;

        listContent += repoName;
      }
      repoList.innerHTML = listContent;
    });
}

button.addEventListener("click", getOrg);
