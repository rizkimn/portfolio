const menuList = document.querySelectorAll('main .right .menu li');
const lineList = document.querySelector('main .right .menu .underline');
const heroImg = document.querySelector('main .left .hero');
const content = document.querySelector('main .right .content');
const typographies = document.querySelectorAll('main .right .typography');

function removeActiveInMenu() {
    menuList.forEach(list => {
        if(list.classList.contains('active')) {
            list.classList.remove('active');
        }
    });
}

function isElActive(element) {
    return element.classList.contains('active')
}

menuList.forEach(list => {
    list.addEventListener('click', (e) => {
        let listClasses = e.target.className.split(' ')
        if(!isElActive(e.target)) {
            removeActiveInMenu();
            e.target.classList.add('active');

        }
        if(e.target.classList.contains('who')) {
            heroImg.style.transform = "translateY(0)";
            content.style.transform = "translateX(0)";
            typographies[0].style.transform = "scale(1)";
            typographies[0].style.opacity = "1";
            typographies[1].style.transform = "scale(.5)";
            typographies[1].style.opacity = "0";

        } else if(e.target.classList.contains('where')) {
            heroImg.style.transform = "translateY(-50%)";
            content.style.transform = "translateX(-50%)";
            typographies[0].style.transform = "scale(.5)";
            typographies[0].style.opacity = "0";
            typographies[1].style.transform = "scale(1)";
            typographies[1].style.opacity = "1";
        }

        lineList.classList.remove(lineList.className.split(' ')[1]);
        lineList.classList.add(listClasses[0]);
    });
});