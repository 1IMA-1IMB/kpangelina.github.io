console.log('Dette er en test for å se om JS- filen min fungerer, Og det gjør den!')


async function logMovies() {
    const response = await fetch("http://localhost:3000/getallstudents");
    const movies = await response.json();
    console.log(movies);
  }

  logMovies();