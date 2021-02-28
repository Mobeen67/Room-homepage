const roomData = [
    {
        imageURL: `https://upload.cc/i1/2021/02/16/u2sO8z.jpg`,
        roomTitle: 'Discover innovative ways to decorate',
        roomIntro: `We provide unmatched quality, comfort, and style for property owners across the country.
    Our experts combine form and function in bringing your vision to life. Create a room in your
    own style with our collection and make your property a reflection of you and what you love.`
    },
    {
        imageURL: `https://upload.cc/i1/2021/02/16/2zrioE.jpg`,
        roomTitle: 'We are available all across the globe',
        roomIntro: `With stores all over the world, it's easy for you to find furniture for your home or place of business.
Locally, we’re in most major cities throughout the country. Find the branch nearest you using our
store locator. Any questions? Don't hesitate to contact us today.`
    },
    {
        imageURL: `https://upload.cc/i1/2021/02/16/ce1mb4.jpg`,
        roomTitle: 'Manufactured with the best materials',
        roomIntro: `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology
to ensure that every product is made as perfect and as consistent as possible. With three decades of
experience in this industry, we understand what customers want for their home and office.`
    }
];


let dataNum = 0;
const previousButton = document.querySelector('.main__right');
const nextButton = document.querySelector('.main__left');
const BackgroundImage = document.querySelector('.main__img');
const roomTitle = document.querySelector('.main__txt h1');
const roomIntro = document.querySelector('.main__txt p');

function changeData() {
    BackgroundImage.setAttribute('style', `background-image: url('${roomData[`${dataNum}`].imageURL}');`);
    roomTitle.textContent = `${roomData[`${dataNum}`].roomTitle}`;
    roomIntro.textContent = `${roomData[`${dataNum}`].roomIntro}`;
}

nextButton.addEventListener('click', function () {
    if (dataNum >= 0 && dataNum < (roomData.length - 1)) {
        dataNum++;
    }
    changeData();
});

previousButton.addEventListener('click', function () {
    if (dataNum >= 0 && dataNum < roomData.length) {
        dataNum--;
    }
    changeData();
})

