var n=8;
var i=1;
var j=0;
let str="";
for(i=1;i<=n;i++){
    for(j=0;j<i;j++)
    {
        if(i===n)
        {
            str+="*"
        }
        else{
            if(j===0||j===i-1)
            
            {
                str+="*";
            }
            else{

                str+=" "
            }
           
        }

    }


str+='\n';
}
console.log(str);