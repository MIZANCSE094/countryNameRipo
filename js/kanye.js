// console.log("hello bangladesh");

const load = () => {
     fetch("https://api.kanye.rest/")
          .then((res) => res.json())
          .then((data) => displayQuite(data));
};

const displayQuite = (quote) => {
     const quoteElement = document.getElementById("quote");
     quoteElement.innerText = quote.quote;
};
