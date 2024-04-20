// let numbers = [8, 3, 4, 5, 7];
// let str = ["hello", "world", "John"];

// let result = 0;
// numbers.forEach(item => result+=item);
// console.log(result);

// numbers = numbers.every(num => num % 2 === 0);
// console.log(numbers);

// numbers = numbers.some(num => num % 2 === 0);
// console.log(numbers);

// str = str.every(item => item.indexOf("n") !== -1);
// console.log(str);


// let numbers = [8, 3, 4, 5, 7];
// numbers = numbers.sort((a, b) => console.log(a, b));
// numbers = numbers.sort((a, b) => a - b);
// numbers = numbers.sort((a, b) => b - a);
// console.log(numbers);

// let numbers = [8, 3, 4, 5, 7];

// let result = numbers.reduce(function(accumulator, currentValue){
//     console.log(accumulator, currentValue);

//     return accumulator + currentValue
// }, 0)
// console.log(result);

// function reduceV2(array, callback, initValue){
//     let accumulator = initValue !== undefined ? initValue : array[0];

//     let startIndex = initValue !== undefined ? 0 : 1;

//     for (let i = startIndex; i < array.length; i++) {
//         accumulator = callback(accumulator, array[i])
//     }

//     return accumulator;
// }

// console.log(reduceV2(numbers, (accumulator, currentValue) => accumulator + currentValue, 0));

// let books = document.querySelector(".books");
// books.style.background = "red"
// books.style = "background:orange;"
// console.log(books);

// let items = document.querySelectorAll(".item");
// console.log(items);

// let divElement = document.createElement("div"); // <div></div>
//     divElement.classList.add("item", "item-4"); // <div class="item item-4"></div>
//     divElement.innerText = "Book 4"; // <div class="box">Book 4</div>

//     // document.body.prepend(divElement);
//     // document.body.append(divElement);

//     document.querySelector(".books").append(divElement);


// let books = ["Book 1", "Book 2", "Book 3", "Book 4", "Book 5"];

// function createBooks(){
//     document.querySelector(".books").innerHTML = "";

//     books.forEach((book, index) => {
//         let divElement = document.createElement("div");
//         divElement.classList.add("item", `item-${index}`);
//         divElement.innerText = book;

//         let buttonElement = document.createElement("button");
//         buttonElement.innerText = "remove";

//         // buttonElement.setAttribute("class", "btn");
//         // buttonElement.getAttribute("class");

//         buttonElement.onclick = () => removeBook(book);

//         divElement.append(buttonElement);

//         document.querySelector(".books").append(divElement);
//     })
// }

// function removeBook(bookName){
//     books = books.filter(item => item !== bookName);

//     createBooks();
// }

// let btn = document.querySelector(".btn");
// btn.onclick = addBook;

// function addBook(){
//     let value = document.querySelector(".input-1").value;

//     books.push(value);

//     createBooks();

//     document.querySelector(".input-1").value = "";
// }

// createBooks();


let products = [
    // id, title, image, price
    ["1", "GoPro HERO12 Black", "https://m.media-amazon.com/images/I/71p5V8+OnfL._AC_UL320_.jpg", 349],
    ["2", "TP-Link Tapo 1080P", "https://m.media-amazon.com/images/I/61gJcez9unL._AC_UL320_.jpg", 17],
    ["3", "KODAK PIXPRO WPZ2", "https://m.media-amazon.com/images/I/5186bjryKaL._AC_UL320_.jpg", 149],
    ["4", "WYZE 2K HDR Wireless", "https://m.media-amazon.com/images/I/61ixGPWFxlL._AC_UL320_.jpg", 76],
    ["5", "Arlo Essential Spotlight", "https://m.media-amazon.com/images/I/61vjkXGNuQL._AC_UL320_.jpg", 176],
];

{/* <div class="item">
<img src="https://m.media-amazon.com/images/I/71p5V8+OnfL._AC_UL320_.jpg" alt="">

<h3>GoPro HERO12 Black</h3>
<p>$ 349</p>

<button class="btn">Add to cart</button>
</div> */}

function createProducts() {
    let productsElement = document.querySelector(".products");

    productsElement.innerHTML = "";

    products.forEach(product => {
        let itemElement = document.createElement("div");
            itemElement.classList.add("item")

        let imageElement = document.createElement("img");
            imageElement.src = product[2];
            // imageElement.setAttribute("src", product[2]);

        let titleElement = document.createElement("h3");
            titleElement.innerText = product[1];
        
        let priceElement = document.createElement("p");
            priceElement.innerText = `$ ${product[3]}`;

        let buttonElement = document.createElement("button");
            buttonElement.classList.add("btn");
            buttonElement.innerText = "ADD TO CART";

            itemElement.append(imageElement, titleElement, priceElement, buttonElement);
            // productElement.append(titleElement);
            // productElement.append(priceElement);

            productsElement.append(itemElement);
    })
}

createProducts();

// let title = document.querySelector(".title");
// title.innerText = "";