document.getElementById('searchButton').addEventListener('click', event => {
    document.getElementById('content').innerHTML = '';
    let queryS = document.getElementById('search').value;   
    getData(queryS);
    document.getElementById('search').value = '';
})