let petAge = document.getElementById('pet-age').value;
let btn = document.querySelector('.sub-btn');
let result = document.querySelector('.result__number');
let resultText = document.querySelector('.result__text');

btn.addEventListener("click", () => {
    let selected = document.querySelector("input[name='animals']:checked").value;
    petAge = document.getElementById('pet-age').value;
    Number.petAge;

    if (petAge > 0 && selected) {
        let earlyYears;
        let laterYears;
        let animalYears;

        function calculate() {
            let x = petAge - 2;
            let y = x * laterYears;
            animalYears = earlyYears + y;
            result.innerHTML = animalYears;
            resultText.classList.add('active');
            };

        switch (selected) {
            case 'dog':
                earlyYears = 24
                laterYears = 5
                calculate();
                break;
            case 'cat':
                earlyYears = 24
                laterYears = 4
                calculate();
                break;
            case 'rat':
                earlyYears = 30
                laterYears = 30
                calculate();
                break;
            case 'hamster':
                earlyYears = 35
                laterYears = 35
                calculate();
                break;
            case 'rabbit':
                earlyYears = 26
                laterYears = 6
                calculate();
                break;
            case 'horse':
                earlyYears = 13
                laterYears = 2.6
                calculate();
                break;
            case 'hen':
                earlyYears = 27
                laterYears = 10
                calculate();
                break;
            case 'pig':
                earlyYears = 22
                laterYears = 4
                calculate();
                break;
            case 'cow':
                earlyYears = 18
                laterYears = 4
                calculate();
                break;
            default:
        }

    } else {
        console.log('incorrect');
    }   
});







