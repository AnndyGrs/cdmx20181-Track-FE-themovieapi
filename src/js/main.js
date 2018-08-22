document.getElementById('searchButton').addEventListener('click', event => {
    let queryS = document.getElementById('search').value;
    queryS = queryS.replace(' ', '+');   
    getData(queryS);
})