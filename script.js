
const checkboxAddFuction = () => {
    const cardBox = document.querySelectorAll('.card__box');
    const circleBlue = document.querySelector('.card__circle');
    const visibleTextCard = document.querySelector('.card__link--hover');
    const linkHover = document.querySelector('.card__text--hover');
    const cardNone = document.querySelector('.card__text--none');
    const cardLinkParent = document.querySelector('.card__link--parent');

    cardBox.forEach((el) => {
        el.addEventListener('click', () => {
            event.preventDefault();
            el.classList.toggle('card__box--select');
            circleBlue.classList.toggle('card__circle--pink');
            visibleTextCard.classList.toggle('card__link--hover-block');
            cardLinkParent.classList.toggle('card__link--none');
        })

        el.addEventListener('mouseenter', ()=> {
            linkHover.style="display:block";
            cardNone.style="display:none";
        })

        el.addEventListener('mouseleave', ()=> {
            linkHover.style="display:none";
            cardNone.style="display:block";
        })
    })
}
checkboxAddFuction();