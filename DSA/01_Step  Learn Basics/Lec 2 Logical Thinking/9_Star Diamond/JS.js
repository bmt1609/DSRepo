const cin=require("prompt-sync")();
let n=parseInt(cin());
for(let i=0;i<n;i++){
    let s="";
    for(let j=0;j<(n-i-1);j++) s+=" ";
    for(let j=0;j<((i<<1)+1);j++) s+="*";
    for(let j=0;j<(n-i-1);j++) s+=" ";
    console.log(s);
}
for(let i=0;i<n;i++){
    let s="";
    for(let j=0;j<i;j++) s+=' ';
    for(let j=0;j< ((n<<1) - ( (i<<1) + 1)  ) ;j++) s+='*';
    for(let j=0;j<i;j++) s+=' ';
    console.log(s);
}