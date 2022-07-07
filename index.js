const fetch = require('node-fetch');

async function getData() {
    const myArgv = process.argv.slice(2);
    const name = myArgv[0];

    const url = await `https://api.nationalize.io/?name=${name}`;
    const res = await fetch(url);
    const data = await res.json();
    

    if(data.country.length === 0){
        console.log("sorry! no information found!");
    }
    else{
        const countryId = data.country[0].country_id;
        const posibility = data.country[0].posibility.toFixed(4);
        console.log('The person '+ name + ' is ' + 'most likely to be from the country ' + countryId + ' with a posibility of ' + posibility);
    }

}

getData();