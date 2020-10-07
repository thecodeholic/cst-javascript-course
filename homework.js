// =======================================
// Challenge 1
// =======================================

// Form validation plugin


// =======================================
// Challenge 2
// =======================================

// Create Context menu


// =======================================
// Challenge 3
// =======================================

// Picture puzzle game


// =======================================
// Challenge 4
// =======================================

// Dragging ball

// =======================================
// Must do challenge
// =======================================

function traverseDOM(el) {
    const children = el.childNodes;
    
    children.forEach(child => {
        traverseDOM(child)
    })
}

traverseDOM(document.body)

const words = [
    {
        word: 'Iphone 11', 
        image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-11-pro-select-2019-family_GEO_EMEA?wid=882&amp;hei=1058&amp;fmt=jpeg&amp;qlt=80&amp;op_usm=0.5,0.5&amp;.v=1567812929188',
        description: 'The best phone'
    },
    {
        word: 'messi', 
        description: 'Messi has 40M EUR salary in a year'
    },
    {
        word: 'Elon Mask', 
        description: 'Elon Mask lost $16B'
    },
];
const CLASSNAME = 'thecodeholic-ad';
const body = document.body;
const style = document.createElement('style');
style.innerHTML = `.${CLASSNAME} {
    border-bottom: 1px solid blue;
    background-color: cyan;
}`
body.appendChild(style);
words.forEach(w => {
    body.innerHTML = body.innerHTML.replace(new RegExp(`${w.word}`, 'g'), `<span class="${CLASSNAME}" image="${w.image}" description="${w.description}">${w.word}</span>`)
});
const adBanner = document.createElement('div');
adBanner.style.padding = '10px';
adBanner.style.backgroundColor = 'cyan';
adBanner.style.border = '1px solid blue';
adBanner.style.width = '160px';
adBanner.style.position = 'absolute';
adBanner.style.display = 'none';
document.body.appendChild(adBanner)

const ads = document.querySelectorAll(`.${CLASSNAME}`);
ads.forEach(ad => {
    ad.addEventListener('mouseover',  ev => {
        adBanner.style.display = 'block';
        adBanner.style.left = ev.layerX+`px`;
        adBanner.style.top = ev.layerY+`px`;
        adBanner.innerHTML = `
            <img src="${ev.target.getAttribute('image')}" style="max-width: 100%"/>
            <p>${ev.target.getAttribute('description')}</p>   
        `;
    })
    ad.addEventListener('mouseout', ev => {
        adBanner.style.display = 'none';
    })
})


// Traverse DOM and show texts on mouse over for words.

// =======================================
// Bonus: Create Calculator
// =======================================
