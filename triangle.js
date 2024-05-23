var n=5;
var i=1;
var j=0;
let str="";
for(i=1;i<=n;i++){
    for(j=0;j<i;j++)
    {
        if(i===n)
        {
            str+=""
        }
        else{
            if(j===0||j===i-1)
            
            {
                str+="*";
            }
            else{
                

                str+="1 "
            }
           
           
        }

    }


str+='\n';
}

console.log(str);
// for (let i = n - 1; i >= 1; i--) {
//     let str= '*';

//     for (let j = 1; j <= i; j++) {
//         str += j;
//     }

//     for (let j = i - 1; j >= 1; j--) {
//         str+= j;
//     }

//     str+= '*';
//     console.log(str);
// }

// console.log('*');

