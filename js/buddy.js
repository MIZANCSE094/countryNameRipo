// console.log("connneted");

const loadBuddies = () => {
     fetch('https://randomuser.me/api/?results=5')
          .then(res => res.json())
          .then(data => displayBuddy(data));
}
loadBuddies();

const displayBuddy = data => {
     const buddy = data.results;
     console.log(buddy);
     const buddiesDiv = document.getElementById('buddies');
     for (const budy of buddy)
     {
          // console.log(budy.email)
          const p = document.createElement('p');
          p.innerText = `Name: ${ budy.name.title} ${budy.name.first} Country:  ${budy.location.city } Password: ${budy.login.password}`;
          buddiesDiv.appendChild(p);

     }
}







// const burilist = () => {
//      fetch("https://randomuser.me/api/?results=5")
//           .then(res => res.json())
//           .then(data => output(data));
// }
// burilist()

// const output = data => {
//      console.log(data);
// }
