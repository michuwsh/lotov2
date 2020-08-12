//Global variable
const btn = document.querySelector(".btn");
const numbersField = document.querySelector("#numbers");

//function which random number from 1 to 49
const randNumber = () => {
    let number = Math.round(Math.random()*48);
    return number+1;
};
//function which change array to string
const changeArrayToString = (array) => {
    let text = '';
    for(let i=0; i<array.length; i++) {
        if(i<array.length-1) {
            text+=`${array[i]}, `;
        } else {
            //if element is last elemnt array save variable without common.
            text+=array[i];
        }
    }
    //return text 
    return text;
};
//function which replay function randNumber and function which is adding about event click. Main function
const randNumbers = () => {
    //declare array randomNumbers and clear it.
    const randomNumbers = [];
    //loop which will be doing random 6 numbers. 
    for(let i=0; i<5; i++) {
        //random numbers
        let number = randNumber();
        //check are number not is now saved in array if yes than random number again.
        while(randomNumbers.indexOf(number) != -1) {
            number = randNumber();
        }
        //save to array random number
        randomNumbers.push(number);
    }
    //sort array from min to max value
    randomNumbers.sort((a,b) => {
        return a-b;
    });
    //save random numbert to filed output
    numbersField.innerText = changeArrayToString(randomNumbers);
    
};
// Add even listern for button btn 
btn.addEventListener('click', randNumbers);