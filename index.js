/* Första delen */
const firstDiv = document.createElement("div");
document.body.appendChild(firstDiv);

for(let i=5; i>0; i--){
    const hEl = document.createElement(`h${i}`);
    const brEl = document.createElement("br");
    firstDiv.appendChild(hEl);
    firstDiv.appendChild(brEl);

    hEl.textContent = `Rad ${6-i}`;
    hEl.style.textAlign = "center";

    //ökar hue med 30 grader per steg, start på 120 (grön) och slut på 240 (blå)
    hEl.style.backgroundColor = `hsl(${120 + (5-i) * 30}, 100%, 50%)`; 
}

/* Andra delen */
const secondDiv = document.createElement("div");
document.body.appendChild(secondDiv);
secondDiv.classList.add('secondDivStyling');

const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const reverseNumbers = ['9', '8', '7', '6', '5', '4', '3', '2', '1', '0'];
const words = ['ett', 'två', 'tre', 'fyra', 'fem', 'sex', 'sju', 'åtta', 'nio', 'tio'];

for(let i=0; i<3; i++){
    const ulEl = document.createElement("ul");
    secondDiv.appendChild(ulEl);
    ulEl.classList.add('ulElementStyling');

    for(let j=0; j<10; j++){
        const liEl = document.createElement("li");
        ulEl.appendChild(liEl);
        liEl.style.width = '3rem';

        //Olika innehåll och styling på list-items beroende på vilken lista det är
        switch(i){
            case 0:
                liEl.textContent = numbers[j];
                if(j % 2 == 0) liEl.classList.add(numbers[j] == '4' ? 'purple':'black');
                break;
            
            case 1:
                liEl.textContent = reverseNumbers[j];
                liEl.style.textAlign = 'center';
                if(j % 2 == 1) liEl.classList.add(reverseNumbers[j] == '8' ? 'purple':'black');
                break;
            
            case 2:
                liEl.textContent = words[j];
                liEl.style.textAlign = 'right';
                if(words[j] == 'sex') liEl.classList.add('purple');
                else if(j % 2 == 0) liEl.classList.add('black');
                break;
        }
    }
}