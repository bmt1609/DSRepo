const cin=require("prompt-sync")();
class Node{
    constructor(data){
        this.data=data;
        this.left=null;
        this.right=null;
    }
}
function levelOrder(root){
    const q=[];
    q.push(root);
    while(q.length){
        let n=q.length;
        for(let i=0;i<n;i++){
            const temp=q.shift();
            process.stdout.write(temp.data+" ");
            if(temp.left)q.push(temp.left);
            if(temp.right)q.push(temp.right);
        }
        console.log();
    }
}
function nonRecursiveTreeCreation(){
    console.log("Enter Data for Root : ");
    let data=parseInt(cin());
    let root=new Node(data);
    const q = [];
    q.push(root);
    while (q.length) {
        const temp = q.shift();
        process.stdout.write(`Enter the data for the left child of ${temp.data}  `);
        data=parseInt(cin());
        if(data){
            temp.left=new Node(data);
            q.push(temp.left);
        }
        process.stdout.write(`Enter the data for the right child of ${temp.data}  `);
        data=parseInt(cin());
        if(data){
            temp.right=new Node(data);
            q.push(temp.right);
        }
    }
    return root;
}
function RecursiveTreeCreation(root){
    if(!root){
        let data=parseInt(cin());
        if(!data)return null;
        root=new Node(data);
    }
    process.stdout.write("Enter the data for the left children of "+root.data+" ");
    root.left=RecursiveTreeCreation(root.left);
    process.stdout.write("Enter the data for the right children of "+root.data+" ");
    root.right=RecursiveTreeCreation(root.right);
    return root;
}
function height(root, ans) {
    if (root === null) return 0;
    let a = height(root.left, ans);
    let b = height(root.right, ans);
    if (Math.abs(a - b) > 1) ans.isBalanced = false;
    return 1 + Math.max(a, b);
}
function isBalanced(root) {
    if (root === null) return true;
    let ans = { isBalanced: true };
    height(root, ans);
    return ans.isBalanced;
}
// let root=nonRecursiveTreeCreation();
// levelOrder(root);

console.log("Enter Data for the Root : ");
let root=null;
root=RecursiveTreeCreation(root);
// levelOrder(root);
console.log(isBalanced(root));
