let container = document.querySelector(".container")
let url = `https://jsonplaceholder.typicode.com/photos`
let page = 1;
let flag = false;
async function fetchData(page){
try{
    let res = await fetch (`${url}?_page=${page}&_limit=15`)
    let data = await res.json();
    console.log(data)
    displayData(data);
    flag = true;
}catch(err){
    console.log("error found")
}
}
 function displayData(data){
    // container.innerHTML = ""
  data.forEach(element => {
let box = document.createElement("div")
box.classList.add("box")
    let heading = document.createElement("h1")
heading.innerHTML = element.title
    let picture = document.createElement("img")
    picture.src = element.url
    box.append(picture , heading)
    container.append(box)  
  });
}
fetchData(page);
window.addEventListener("scroll", () => {
    let client_height = document.documentElement.clientHeight;
    let scroll_height = document.documentElement.scrollHeight;
    let scrollTop = document.documentElement.scrollTop;
    
    console.log(client_height,  scroll_height ,scrollTop);
    if(Math.ceil(scroll_height-client_height)<= Math.ceil(scrollTop)){
        console.log("touched the base")
        page++
fetchData(page);
flag = false
    }
});
