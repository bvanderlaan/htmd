function init() {
    buildTOC();
    returnToTop();
}

function buildTOC() {
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

function returnToTop() {
    // Fade return-to-top in or out based on scroll position
    $(window).scroll(() => {
        if ($(this).scrollTop() >= 200) {
            $('#return-to-top').fadeIn(200);
        } else {
            $('#return-to-top').fadeOut(200);
        }
    });

    // Bind onclick handler to return-to-top button
    $('#return-to-top').click(() => {
        $('body,html').animate(
            {
              scrollTop : 0
            },
            500
        );
    });
}