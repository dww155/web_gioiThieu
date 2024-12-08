function showPage(page) {
    let active_pages = document.querySelectorAll(".show");
    let page_toShow = document.getElementById(page);

    active_pages.forEach((page) => {
        page.classList.remove("show")
    })
    page_toShow.classList.add("show");
}
showPage('home')