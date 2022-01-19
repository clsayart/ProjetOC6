window.onload = async function() {

  var id = await getMovieById()
  console.log("ligne7", id)
  getFilmsAdventure()
  getFilmsAnimation()
  getFilmsRomance()
  getFilmsComedy()
  showBestFilm(id)

};

 const buttonRight = document.getElementById('slideRight');
    const buttonLeft = document.getElementById('slideLeft');

    buttonRight.onclick = function () {
      document.getElementById('container').scrollLeft += 20;
    };
    buttonLeft.onclick = function () {
      document.getElementById('container').scrollLeft -= 20;
    };


 const buttonRight1 = document.getElementById('slideRight-1');
    const buttonLeft1 = document.getElementById('slideLeft-1');

    buttonRight1.onclick = function () {
      document.getElementById('container-1').scrollLeft += 20;
    };
    buttonLeft1.onclick = function () {
      document.getElementById('container-1').scrollLeft -= 20;
    };

  const buttonRight2 = document.getElementById('slideRight-2');
    const buttonLeft2 = document.getElementById('slideLeft-2');

    buttonRight2.onclick = function () {
      document.getElementById('container-2').scrollLeft += 20;
    };
    buttonLeft2.onclick = function () {
      document.getElementById('container-2').scrollLeft -= 20;
    };

     const buttonRight3 = document.getElementById('slideRight-3');
    const buttonLeft3 = document.getElementById('slideLeft-3');

    buttonRight3.onclick = function () {
      document.getElementById('container-3').scrollLeft += 20;
    };
    buttonLeft3.onclick = function () {
      document.getElementById('container-3').scrollLeft -= 20;
    };


async function getMovieById() {
var id = await getBestFilm()

return id
}

async function getBestFilm() {
  try {
    const res = await fetch(
      "http://localhost:8000/api/v1/titles/?sort_by=-imdb_score"
    );
    if (!res.ok) {
      console.log("status: ", res.status);
      await getBestFilm();
    }
    const json = await res.json();
    console.log(json);
    return json.results[0].id
  } catch (error) {
    console.log("catch error", error);
    await getBestFilm();
  }
};


function showBestFilm(id) {

  fetch("http://localhost:8000/api/v1/titles/"+id)
  .then(function(res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function(value) {
    console.log("value best film", value)
     document
      .getElementById("image-best-film").src=value.image_url;
     document
      .getElementById("title-best-film")
      .innerText = value.title;
     document
      .getElementById("description-best-film")
      .innerText = value.description;

    //console.log("tu es là")
    return value.results
  })
  .catch(function(err) {
    // Une erreur est survenue
  });
}


function getFilmsAdventure() {
  fetch("http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&genre=adventure")
  .then(function(res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function(value) {
      console.log("value cat 1", value.results)
    for (let i = 0; i < 5; i++) {
    console.log("image-"+i)
     document
      .getElementById("image-"+i)
      .src=value.results[i].image_url
    document
      .getElementById("image-"+i)
      .setAttribute('class', value.results[i].id)}
    return value.results
  })
  .catch(function(err) {
    // Une erreur est survenue
  });
}

function getFilmsAnimation() {
  fetch("http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&genre=animation")
  .then(function(res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function(value) {
    console.log("value cat 2", value.results)
    for (let i = 0; i < 5; i++) {
    console.log("image-cat-deux-"+i)
     document
      .getElementById("image-cat-deux-"+i)
      .src=value.results[i].image_url
    document
      .getElementById("image-cat-deux-"+i)
      .setAttribute('class', value.results[i].id)}
    return value.results
  })
  .catch(function(err) {
    // Une erreur est survenue
  });
}

function getFilmsRomance() {
  fetch("http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&genre=romance")
  .then(function(res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function(value) {

     console.log("value cat 3", value.results)
    for (let i = 0; i < 5; i++) {
    console.log("image-cat-trois-"+i)
     document
      .getElementById("image-cat-trois-"+i)
      .src=value.results[i].image_url
    document
      .getElementById("image-cat-trois-"+i)
      .setAttribute('class', value.results[i].id)}
    return value.results
  })
  .catch(function(err) {
    // Une erreur est survenue
  });
}


function getFilmsComedy() {
  fetch("http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&genre=comedy")
  .then(function(res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function(value) {
    console.log("value cat test", value.results)
    for (let i = 0; i < 5; i++) {
    console.log("i", i)
    console.log("value id cat test", value.results[i].image_url)
    console.log("image-cat-quatre-"+i)
     document
      .getElementById("image-cat-quatre-"+i)
      .src=value.results[i].image_url
    document
      .getElementById("image-cat-quatre-"+i)
      .setAttribute('class', value.results[i].id)
}

    return value.results
  })
  .catch(function(err) {
    // Une erreur est survenue
  });
}


// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


document.querySelectorAll('.one-film-details').forEach(item => {
  item.addEventListener('click', event => {
    modal.style.display = "block"
    getFilmsDetails()
  })
})

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


function getFilmsDetails() {
    id = event.target.className
  fetch("http://localhost:8000/api/v1/titles/"+id)
  .then(function(res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function(value) {
    console.log("value 1 film", value)
     document
      .getElementById("image-detail").src=value.image_url;
    document
      .getElementById("title")
      .innerText = "Nom du film: "+value.title;
      document
      .getElementById("genre")
      .innerText = "Genre du film: "+value.genres;
       document
      .getElementById("date")
      .innerText = "Date de sortie du film: "+value.date_published;
      document
      .getElementById("rated")
      .innerText = "Rated: "+value.rated;
      document
      .getElementById("score")
      .innerText = "Score du film: "+value.imdb_score;
      document
      .getElementById("director")
      .innerText = "Réalisateur(s) du film: "+value.directors;
      document
      .getElementById("actors")
      .innerText = "Acteurs du film: "+value.actors;
      document
      .getElementById("duration")
      .innerText = "Durée du film: "+value.duration;
      document
      .getElementById("country")
      .innerText = "Pays du film: "+value.countries;
      document
      .getElementById("box-office")
      .innerText = "Box-office du film: "+value.worldwide_gross_income;
      document
      .getElementById("description")
      .innerText = "Résumé du film: "+value.description;

    //console.log("tu es là")
    return value.results
  })
  .catch(function(err) {
    // Une erreur est survenue
  });
}



