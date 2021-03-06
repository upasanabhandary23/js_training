let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://syntaxdb.com/api/v1/languages/javascript/categories'); // we get the url of the xml http request file
xhr.send(); // we send the http request

xhr.onload = () => {

    // we use this and get it in text format 
    // but we need it in JSON format
    //console.log(xhr.response); so we write
    console.log(JSON.parse(xhr.response));
}

function categoriesDisplay() {
    var container = document.querySelector(".categories"); //selecting the categories part in the document 
    categories.forEach(element => {
        var ele = document.createElement("div"); // the elements in categories div class is created 
        ele.setAttribute('class', 'tests'); //setting attribute to the elements in categories
        ele.textContent = category["id"] + category["category_name"] + category["category_search"] + category["language_permalink"]; // text content contains the category fetched from the syntaxDB API
        container.appendChild(ele);
    });

}

function getCategory() {
    let cat_url = `https://syntaxdb.com/api/v1/languages/javascript/categories`; // api request url
}

// for concept its same as categories

function conceptDisplay() {
    var cont = document.querySelector(".concepts");
    concepts.forEach((concept) => {

        var ele2 = document.createElement("li");
        elem.setAttribute("class", "conceptDisplay");
        elem.textContent = concept["concept_name"];
        container.appendChild(ele2);
    });
}

function getConcept() {
    let con_url = `https://syntaxdb.com/api/v1/languages/javascript/categories/33/concepts`;
}

getCategory();