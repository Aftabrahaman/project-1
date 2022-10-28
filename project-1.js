let btn = document.querySelector("#new-button");
let quiote = document.querySelector(".quote");
let persom = document.querySelector(".person");

const word=[{
    quiote:`“Dont settle for average. Bring your best to the moment. Then whether it fails or succeeds, at least you know you gave all you had.”`,
    persom: `Angela Bassett`
},{
    quiote: `“First forget inspiration. Habit is more dependable. Habit will sustain you whether youre inspired or not. Habit will help you finish and polish your stories. Inspiration wont. Habit is persistence in practice.”`,
    persom: `―Octavia Butler`
},{
    quiote:`“If there is no struggle, there is no progress.”`,
    persom: `—Frederick Douglass`
},{
    quiote: `"I never look back, darling. It distracts from the now."`,
    persom: `—Edna Mode`
}];

btn.addEventListener("click",function(){
    let random=Math.floor(Math.random()* word.length);
    quiote.innerText=word[random].quiote;
    persom.innerText=word[random].persom;
})