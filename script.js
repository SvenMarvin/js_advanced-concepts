window.onload = () => {
    let inputField = document.querySelector('#search');
    inputField.addEventListener('keyup', searchHandler);
};

let jsonData = null;
fetch("./menu.json")
.then(response => {
    let json = null;
   return response.json();
})
.then(data => createMenu(data));

// Create Menu Handler
createMenu = (jsonData) => {
    // Object.keys -> ersten objekt wert
    // Object.values -> werte eines obejkts 
    // Object.entries onbjekt wert und werte des objekts 
    let arrayData = Object.values(jsonData.javascript);

    const menulist = document.querySelector('#menulist');
    arrayData.forEach(element => {
        let list = document.createElement('li');
        let link = document.createElement('a');
        list.classList.add('menulink');
        link.setAttribute('onclick','redirectTo(this);');
        let contnet = element;

        link.innerHTML = element;
        list.appendChild(link);
        menulist.appendChild(list);
    });
};

// Redirect Handler
redirectTo = (el) => {
    let text = el.innerHTML;
    location.replace('./' + text);
};

// Search 
searchHandler = () => {
    let inputText = document.querySelector('#search').value;
    let menuLinks = document.querySelectorAll('.menulink')
    menuLinks.forEach((el) => {
        el.remove();
    });
    console.log(inputText);
};

