const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displayCountry(data));
}
loadCountries();

const displayCountry = countis => {

    console.log(countis);
    const countiesDiv = document.getElementById('countries');
    countis.forEach(countis => {
        // console.log(countis);
        const div = document.createElement('div');
        div.classList.add('styleing');

        const h2 = document.createElement('h2');
        h2.innerText = countis.name;
        div.appendChild(h2);

        const p = document.createElement('p');
        p.innerText = countis.capital;
        div.appendChild(p);



        countiesDiv.appendChild(div);



    });
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
