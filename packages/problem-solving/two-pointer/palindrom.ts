const inputs = ["malayalam", "dad", "mother"];

const checkPalindrom = (input: string) => {
    const strArry = input.split("");
    let  i = 0, j = strArry.length -1;
    while ( i < j) {
        if(strArry[i] !== strArry[j]) {
            return  "no palindrom";
        }
        i++;
        j--;
    }
    return "is palindrom";
}

inputs.forEach(input => {
    console.log(`${input} - ${checkPalindrom(input)}`)
})
