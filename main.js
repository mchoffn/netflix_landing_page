const tabItems = document.querySelectorAll('.tab-item');
const contentItems = document.querySelectorAll('.tab-content-item');

/* Select tab content item */
function selectItem(e) {
    /* Remove border */
    removeBorder();
    removeShow();

    /* Add border to current tab */
    this.classList.add('tab-border');
    // console.log(this.id)
    // console.log(this.classList)
    /* Grab content item from DOM */
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    /* Add show class */
    tabContentItem.classList.add('show');

}

function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeShow() {
    contentItems.forEach(item => item.classList.remove('show'));
}


/* Listen for tab click */
tabItems.forEach(item => item.addEventListener('click', selectItem));