const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displayCountry(data));
}
loadCountries();

const displayCountry = countis => {

    // console.log(countis);
    const countiesDiv = document.getElementById('countries');
    countis.forEach(countis => {
        // console.log(countis);
        const div = document.createElement('div');
        div.classList.add('styleing');

        // const h2 = document.createElement('h2');
        // h2.innerText = countis.name;               //   using inner text
        // div.appendChild(h2);

        // const p = document.createElement('p');
        // p.innerText = countis.capital;
        // div.appendChild(p);

// dynamicly using
        div.innerHTML = ` 
        <h1>${countis.name}</h1> 
        <p>${countis.capital}</p>
        <button onclick=loadData('${countis.name}')>Show detais </button>
        `
        countiesDiv.appendChild(div);
    });
}

const loadData = name=>{
    const url = `https://restcountries.eu/rest/v2/name/${name}`;
    fetch(url)
        .then(res => res.json())
        .then(data => countryDetais(data[0]));
}
const countryDetais = country => {
    // console.log(country);

    const countrydiv = document.getElementById('country-detais');
    countrydiv.innerHTML = `
    <h4>${country.name}</h4>
    <p>${country.population}</p>
    <img width="250px"  heiht="250px"  src="${country.flag}">`
}



// const displayCountry = counties => {
//     // console.log(counties);
// //     for (const country of counties)
// //     {
// //         console.log(country);
// // }
//     const countryDiv = document.getElementById('countries');
//     counties.forEach( country => {
//         // console.log(country);
//         const h3 = document.createElement('h3');
//         h3.innerText = country.name;
//         countryDiv.appendChild(h3);
//     });
    
// }
