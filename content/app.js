let apikey = '65f3d74ddbc09973d3c235e8de1581fc';
let APIurl = 'https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=in&max=10&apikey=65f3d74ddbc09973d3c235e8de1581fc';
let ul = document.querySelector(".list_container");
let im = document.querySelector("img");

function addElement(i,create,add,Class){
    let element = document.createElement(create);
    // element.innerText = ` ELEMENT ${i}`;
    add.appendChild(element);
    element.classList.add(Class)
    return element;
}

fetch(APIurl)
.then(async (respose)=>{
    return respose.json()
    .then((data)=>{
        console.log(data.articles);
        for (let i = 0; i < data.articles.length; i++) {

            let list = addElement(i,"li",ul,"content");
            let link = addElement(i,"a",list,"anchor");
            let div1 = addElement(i,"div",link,"img_content");
            let div2 = addElement(i,"div",link,"text_content");
            let image = addElement(i,"img",div1,"news_image");
            let title = addElement(i,"p",div2,"news_title");
            let description = addElement(i,"p",div2,"news_description");
            link.href = data.articles[i].url;
            link.target = "_blank"; // open in new tab
            image.alt = "image";
            image.src = data.articles[i].image || "fallback.jpg";
            title.innerText = data.articles[i].title;
            description.innerText = data.articles[i].description || "Thanks for Visit...";
        }
    })
})
.catch((err)=>{
    console.log(err);
});   




        // for(let i = 0; i < 6; i++){
        //     let item = document.createElement("p");
        //     item.innerText = data.articles[i].url;
        //     ul.appendChild(item);
            
        // }  

            // let link = document.createElement("a");
            
            // link.innerText = data.articles[i].title || "View Article";
            
        
            // let p = document.createElement("p");
            // p.classList.add("box");
            // p.appendChild(link);
            // ul.appendChild(p);

            // let image = document.createElement("img");
            // image.classList.add("image");
            // 
            // ;
            // p.prepend(image);        