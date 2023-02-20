const genreList = document.querySelector('.categories-list');
const songList = document.querySelectorAll('.product-list');
const songdisc = document.querySelectorAll('.card ');

genreList.addEventListener('click', (event) => {
    const target = event.target;

    if (target.classList.value.includes('item-link')) {
        closeMenu(songList);
        event.target.nextElementSibling.classList.remove('display-none');
    } else if (target.classList.value.includes('item-discription')) {
        closeMenu(songdisc);
        event.target.nextElementSibling.classList.remove('display-none');
    }
});

for (let item of document.querySelectorAll('.buy ')){
    item.addEventListener('click', () => {
        closeMenu(songList);
        closeMenu(songdisc);
        alert ('You bought this vynil!');
    });
} 

function closeMenu(array) {
    for (let i = 0; i < array.length; i++) {
        if (!array[i].classList.contains('display-none')) {
            array[i].classList.add('display-none');
        } 
    }
}



