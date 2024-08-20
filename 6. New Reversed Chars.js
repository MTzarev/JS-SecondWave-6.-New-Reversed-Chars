function reversedChars(info) {
    let newArr=[];
for (let i=0; i<info.length; i++){
    let symbol = info[i];
    newArr.push(symbol);
}
newArr=newArr.reverse()
let final = newArr.join(``);
    console.log(final);
    
}
reversedChars(`Information`);
