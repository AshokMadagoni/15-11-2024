// !.Answer

row=5
a=65
for(i=0;i<row;i++){
    empty=""
    for(j=0;j<=i;j++){
        empty+=String.fromCharCode(a)
        a++
    }
    console.log(empty)
}

// 2.Amswer

row=3
a=65
for(i=0;i<row;i++){
    string=""
    for(k=1;k<row-i;k++){
        string+=" "
    }
    for(j=0;j<=i;j++){
        string+=String.fromCharCode(a)+" "
        a++
    }
    console.log(string)
}