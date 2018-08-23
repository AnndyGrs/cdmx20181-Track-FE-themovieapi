window.getData = (queryS) => {
    let apikey = 'http://www.omdbapi.com/?s=';
    let finalURL = '&apikey=9cbd3088&s&type=series';
    let url = apikey + queryS + finalURL;
    fetch(url)
        .then(series => series.json())
        .then(res => {
            getSeries(res);
        })
        .catch((error) => {
            console.log(error);
        });
};

window.getSeries = (series) => {
    let drawContent = document.getElementById('content');
    let searchSeries = series.Search;
    if (searchSeries == null) {
        drawContent.innerHTML = 'No hay series disponibles!';
    } else {
        let i;
        for (i = 0; i < searchSeries.length; i++) {
            let image = searchSeries[i].Poster;
            if (image == 'N/A') {
                image = '../images/perrito.jpg'
            }
            drawContent.innerHTML += `
        <div class="card">
            <img class="card-img-top" src=${image} alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${searchSeries[i].Title}</h5>
                <a href="#" class="btn btn-info" data-toggle="modal" data-target="#${searchSeries[i].imdbID}">Informacion</a>
            </div>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="${searchSeries[i].imdbID}" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalCenterTitle">${searchSeries[i].Title}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p>Anio: ${searchSeries[i].Year}</p>
                        <p>ID IMDb: ${searchSeries[i].imdbID}</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                    </div>
                </div>
            </div>
        </div>
        `;
        }
    }
};

window.logOut = () => {
    firebase.auth().signOut().then(function () {
        console.log('Saliendo...');
        location.replace('../index.html');
    }).catch(function (error) {
        console.log(error);
    });
};