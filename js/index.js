var featureTarget = document.getElementById("featureSection");
var featureData = [];

// Get The POST data
fetch('//5e079c5b87c6b400147a76e7.mockapi.io/Posts')
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    featureData = myJson;
    var el = buildfeatureElement(featureData[0]);
    addToUI(featureTarget, el);
  });


//build ui components for the data

function buildfeatureElement(data){
  var featureTemplate = `
<hr class="featurette-divider">
<div class="row featurette">
          <div class="col-md-7">
            <h2 class="featurette-heading">First featurette heading. <span class="text-muted">${data.title}.</span></h2>
            <p class="lead">${data.body}</p>
          </div>
          <div class="col-md-5">
            <img class="featurette-image img-fluid mx-auto" data-src="${data.image}" alt="Generic placeholder image">
          </div>
        </div>`;
  return featureTemplate;
}

function addToUI(target, content){

  target.innerHTML = content;
}






