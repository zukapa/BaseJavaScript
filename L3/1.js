let i = 2;
let j = 0;
let count = [];
while (i < 101) {
    while (j < 101){
        if (i % j === 0){
            count.push(i);
        }
        j++;
    }
    j = 0;
    if (count.length === 2){
        console.log(i);
        count = [];
    }
    else {
        count = [];
    }
    i++;
}
