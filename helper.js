const randomChoice = (num) => {
    if(num === 0){
        num = 10;
    }
    return Math.floor(Math.random() * num);
}


const toCode = (func, num = 25) => {

    const arr = [];
    const letters = 'abcdefghijklmnopkrstuvwxyz';
    let randomNumber = func(num)

    for (let i = 0; i <= randomNumber; i++){
    
        let index = func(num);
        arr.push(letters.charCodeAt(index));
    
    }
    return arr
}

const toText = (func, arr, num = 5) => {
    
    let text = '';
    console.log('hola')
    for (let i of arr) {
        
        let randomNumber = func(num);
        const value = i - randomNumber;
        text += String.fromCharCode(value);
        console.log(text)
    } 
}

const algo = toCode(randomChoice);

toText(randomChoice, algo);