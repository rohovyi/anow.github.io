export function navigationPage() {
    let navEvent = {};

    navEvent.toggleToActiveLink = (target) => {
        let links = document.querySelectorAll('.__nav-item'),
            showedSection = target.dataset.link;
        links.forEach((link) => {
            if (link.classList.contains('__nav-item-active')) {
                link.classList.remove('__nav-item-active');
            }
        });
        target.classList.add('__nav-item-active');
        console.log(showedSection);
        scrollToActiveSection(showedSection);
    };

    let scrollToActiveSection = (showedSection) => {
        document.location.href = `/${showedSection}.html`;
        console.log(showedSection);
    };

    DARKNESS.navigation = navEvent;
}