let n = +prompt("input");
let line='';
if(Number.isInteger(n) && n>0){
    for(let i=0; i<n;i++){
        
        for (let j=0;j<n;j++){
            line+='* ';
        }
        line+='\n';
    }
    console.log(line);
}