function init() {
    let sections = Array.from(document.getElementsByTagName('section'));
    let menu = document.getElementById('tocmenu');

    if (sections && menu) {
        sections.forEach((sec) => {
            let text = document.createTextNode(sec.id.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()));
            let link = document.createElement('a');
            link.appendChild(text);
            link.setAttribute('href', `#${sec.id}`)

            let menuItem = document.createElement('li');
            menuItem.appendChild(link);
            menu.appendChild(menuItem);
        })
    }
}