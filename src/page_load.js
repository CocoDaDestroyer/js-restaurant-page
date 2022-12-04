export function load_page() {

    const contentDiv = document.querySelector("#content");
    const heading = document.createElement("h1");
    heading.textContent = "Possum Cae";
    heading.classList.add("titles");
    contentDiv.appendChild(heading);

    const topImage = document.createElement("img");
    topImage.classList.add("images");
    topImage.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzVfFx3ZYqN-RcSJaxBBJIhQCL4yRBEhDSSw&usqp=CAU";
    contentDiv.appendChild(topImage);

    const para = document.createElement("p");
    para.classList.add("info");
    para.textContent = "Here at Possum Cafe, we make the highest quality food for possums";
    contentDiv.appendChild(para);

}