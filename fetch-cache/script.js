
const url = "https://jsonplaceholder.typicode.com/users";

onClickUserData();
async function onClickUserData () {
    // const userData = await fetchUserData();
    // console.log(userData);
    console.clear();
    const userDataCache = await fetchUserDataCache();
    console.log(userDataCache);
}

function fetchUserData(){
    return fetch(url, {
        method:"GET"
    }).then(res => {
        return res.json();
    }).then(res => {
        return res;
    }).catch(err => {
        return err;
    })
}

function fetchUserDataCache(){

    var myHeaders = new Headers();
    myHeaders.append('pragma', 'reload');
    myHeaders.append('cache-control', 'max-age=100');

    return fetch(url, {
        method:"GET",
        headers: myHeaders
    }).then(res => {
        console.log(res)
        res.headers.forEach(function(val, key) { console.log(key + ' -> ' + val); })
        return res.json();
    }).then(res => {
        return res;
    }).catch(err => {
        return err;
    })
}