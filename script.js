const cards =  document.getElementsByClassName('card');
let allImages = document.getElementsByClassName('card-image');
let movesDisplay = document.querySelector('.move-counter');
let toggledCardsArray = [];
let move = 0;
let winCount = 0;
const restart = document.getElementById('restart');

const imagesLinkArray = [
    {
        id: 1,
        image: 
'https://cdn-icons-png.flaticon.com/128/3076/3076153.png',
        newAlt: 'Angular Image'
    },
    {
        id: 2,
        image: 
'https://cdn-icons-png.flaticon.com/128/4065/4065171.png',
        newAlt: 'HTML Image'
    },
    {
        id: 3,
        image: 
'https://cdn-icons-png.flaticon.com/128/1791/1791354.png',
        newAlt: 'JavaScript Image'
    },
    {
        id: 4,
        image: 
'https://cdn-icons-png.flaticon.com/128/6866/6866562.png',
        newAlt: 'React Image'
    },
    {
        id: 5,
        image: 
'https://cdn-icons-png.flaticon.com/128/3137/3137038.png',
        newAlt: 'Vue Image'
    },
    {
        id: 6,
        image: 
'https://cdn-icons-png.flaticon.com/128/1791/1791354.png',
        newAlt: 'JavaScript Image'
    },
    {
        id: 7,
        image: 
'https://cdn-icons-png.flaticon.com/128/3137/3137038.png',
        newAlt: 'Vue Image'
    },
    {
        id: 8,
        image: 
'https://cdn-icons-png.flaticon.com/128/4065/4065171.png',
        newAlt: 'HTML Image'
    },
    {
        id: 9,
        image: 
'https://cdn-icons-png.flaticon.com/128/3151/3151121.png',
        newAlt: 'CSS Image'
    },
    {
        id: 10,
        image: 
'https://cdn-icons-png.flaticon.com/128/3076/3076153.png',
        newAlt: 'Angular Image'
    },
    {
        id: 11,
        image: 
'https://cdn-icons-png.flaticon.com/128/3151/3151121.png',
        newAlt: 'CSS Image'
    },
    {
        id: 12,
        image: 
'https://cdn-icons-png.flaticon.com/128/6866/6866562.png',
        newAlt: 'React Image'
    }
]


const restartGame = () => {
    let toggledCard = 
        document.getElementsByClassName('card toggled');
    imagesLinkArray.sort(() => Math.random() - 0.5);
    Object.values(toggledCard).forEach(function (el) {
        setTimeout(() => {
            el.classList.remove("toggled");
        }, 0);
    })
    toggledCardsArray.length = 0;
    move = 0;
    winCount=0;
    movesDisplay.innerText = `Moves: ${move}`;
    let allImagesSrc = document.getElementsByClassName('card-image');
    Object.values(allImagesSrc).forEach((el, index)=>{
        el.src = imagesLinkArray[index].image;
        el.alt = imagesLinkArray[index].newAlt;
        el.id = imagesLinkArray[index].id
    }) 
}
restart.addEventListener('click', restartGame);


for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', function () {
        this.classList.add("toggled");
        toggledCardsArray.push(this);
        let thisImgSrc = this.querySelector('.card-image').src;
        let previousImgSrc = 
        toggledCardsArray[toggledCardsArray.length - 2].querySelector('.card-image').src;
        if(thisImgSrc !== previousImgSrc) {
            toggledCardsArray.forEach(function (el) {
                setTimeout(() => {
                    el.classList.remove("toggled");
                }, 500);
            })
            toggledCardsArray.length = 0;
            move++;
        }
        else{
            toggledCardsArray.length = 0;
            move++;
            winCount++;
        }
        
    })
}