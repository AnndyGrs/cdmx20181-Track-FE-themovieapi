document.getElementById('searchButton').addEventListener('click', event => {
    let queryS = document.getElementById('search').value;   
    getData(queryS);
})