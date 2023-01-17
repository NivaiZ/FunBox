
const checkboxAddFuction = () => {
    const cardBox = document.querySelectorAll('.card__box');
    
    cardBox.forEach((el) => {
        el.addEventListener('click', () => {
            event.preventDefault();
            el.classList.toggle('card__box--select');

            el.querySelector('.card__circle').classList.toggle('card__circle--pink');
            el.querySelector('.card__link--hover').classList.toggle('card__link--hover-block');
            el.querySelector('.card__link--parent').classList.toggle('card__link--none');
        });

        el.addEventListener('mouseover', () => {
            el.querySelector('.card__text--none').classList.toggle('card__text-hover--delete');
            el.querySelector('.card__text--hover').classList.toggle('card__text-hover--closed');
        })

        el.addEventListener('mouseout', () => {
            el.querySelector('.card__text--none').classList.toggle('card__text-hover--delete');
            el.querySelector('.card__text--hover').classList.toggle('card__text-hover--closed');
        })
    })
}

checkboxAddFuction();