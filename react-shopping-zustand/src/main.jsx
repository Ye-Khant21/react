import { createElement } from "react";
import "./index.css"
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import router from "./routes/router";

// const categories = [
//     "electrics",
//     "clothes",
//     "shoes",
//     "computers",
//     "books",

// ]


// const app = createElement("div",{id:"category-section", className:"p-4"},createElement("p",{className:"text-2xl text-gray-500"},"Product Categories"),createElement("div",null,categories.map((category) => createElement("button",{className:"bg-gray-500 text-white p-2 m-2 rounded"},category))));

const root = document.querySelector("#root");


createRoot(root).render(<RouterProvider router={router}/>);


// const title = document.createElement("p");


// title.innerText = "Product Categories"

// title.classList.add("text-2xl","text-gray-500")
// const categoryButton =(categoryName) => {
//     const btn = document.createElement("button");
//     btn.innerText = categoryName;
//     btn.classList.add("bg-gray-500","text-white","p-2","m-2","rounded")
//     return btn;
    
// }
// root.append(title);

// categories.forEach((category) => {
//     root.append(categoryButton(category));
// })



