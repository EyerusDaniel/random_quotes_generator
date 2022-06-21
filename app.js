// console.log('connected')


let quotes = [
    `A person is a person who has had to listen to too many optimists.                 
    - Don Marquis`,
    `If I were two-faced, would I be wearing this one?                                  
    - Abraham Lincoln`,
    `The best thing about the future is that it comes one day at a time.                
    - Abraham Lincoln`,
    `An alcoholic is someone you don’t like who drinks as much as you do.               
    - Dylan Thomas`,
    `The difference between stupidity and genius is that genius has its limits.         
    - Albert Einstein`,
    `War is God’s way of teaching Americans geography.                              
    - Ambrose Pierce`,
    `If you want your children to listen, try talking softly to someone else.        
    - Ann Landers`,
    `I don’t believe in astrology; I’m a Sagittarius and we’re skeptical.         
    - Arthur C. Clarke`,
    `A bank is a place that will lend you money if you can prove that you don’t need it.
    - Bob Hope`,
    `My favorite machine at the gym is the vending machine.                     
    - Caroline Rhea`,
    `I always arrive late at the office, but I make up for it by leaving early.    
    -Charles Lamb`,
    `A day without laughter is a day wasted.                                      
    -Charlie Chaplin`,
    `Don’t worry about the world coming to an end today. It is already tomorrow in Australia.                                             
    -Charles Shulz`,
    
];



let button = document.getElementById('btn');
let quotes1 = document.getElementById('quote');



function quoteSelector() {
  let random = Math.floor(Math.random() * quotes.length);
    return quotes[random];
}


function showQuotes() {
    quotes1.innerHTML = quoteSelector();
    button.innerHTML = 'Show More Quotes';
    button.style.cursor = 'pointer';
    button.removeEventListener('mousedown', showQuotes); 
}


button.addEventListener('click', showQuotes);










