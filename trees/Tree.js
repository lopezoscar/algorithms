"use strict";

class TreeNode {

    constructor(){
        this.value = null;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor(){
        this.root = null;
    }

    //based on https://www.nczonline.net/blog/2009/06/09/computer-science-in-javascript-binary-search-tree-part-1/
    insert(value){
        let node = new TreeNode();
        node.value = value;

        if(this.root === null){
            this.root = node;
        }else{
            let current = this.root;

            while( true ){//Si es el mismo valor, finalizo

                if(value < current.value){
                    //left
                    if(current.left === null){
                        current.left = node;//Asigno nodo
                        break;
                    }else{
                        current = current.left;//Avanzo lo mas a la izq
                    }

                }
                else if(value > current.value){
                    //right
                    if(current.right === null){
                        current.right = node;//Asigno nodo
                        break;
                    }else{
                        current = current.right;//Avanzo lo mas a la izq
                    }
                }else{
                    break;
                }
            }
        }

    }

    // insert(node, value){
    //
    //     if(node === null){
    //         node = new TreeNode();//Esto no asigna el valor porque no es pasado por referencia en recursion
    //         node.value = value;
    //         if(this.root === null) {
    //             this.root = node;
    //         }else{
    //
    //         }
    //     }else{
    //         if (value > node.value){
    //             //TODO I need to pass the reference, not the value
    //             this.insert(node.left,value);
    //         }else{
    //             //TODO I need to pass the reference, not the value
    //             this.insert(node.right,value);
    //         }
    //     }
    // }

    /**
     * root - left - right
     * @param node
     */
    preorder(node){
        if(node !== null){
            console.log(node.value);
            this.preorder(node.left);
            this.preorder(node.right);
        }
    }

    /**
     * left - root -right
     * @param node
     */
    inorder(node){
        if(node !== null) {
            this.inorder(node.left);
            console.log(node.value);
            this.inorder(node.right);
        }
    }

    postorder(node){
        if(node !== null) {
            this.inorder(node.left);
            this.inorder(node.right);
            console.log(node.value);
        }
    }

    avg(){
        var props = {
            acc: 0,
            counter:0
        };
        //Props passed by reference
        return (this.acc(this.root,props) / props.counter);
    }

    acc(node,props){

        if(node !== null){
            props.counter = props.counter+1;

            let res = this.acc(node.left,props);
            props.acc = res;
            res = this.acc(node.right,props);

            console.log("counter ",props.counter+1);
            let sum = res + node.value;
            console.log("acc",sum);
            return sum;

        }
        return props.acc;
    }

    get(key){

    }

    contains(key){
        return this.get(key) !== null;
    }

    isEmpty(){
        return this.size() === 0
    }

    size(){

    }

    keys(){

    }
}

function run() {

    console.log ("Trees");
    let tree = new Tree();

    let n = 4;
    for(var i = 1; i < n; i++){
        let v = Math.floor(Math.random()*(n*10));
        process.stdout.write(v+" ");
        tree.insert(v);
    }
    console.log("\n");
    console.log ("**************");
    console.log ("Traverse Tree");
    console.log ("**************");

    console.log ("**************");
    console.log ("Preorder Tree");
    console.log ("**************");
    tree.preorder(tree.root);

    console.log ("**************");
    console.log ("Inorder Tree");
    console.log ("**************");
    tree.inorder(tree.root);

    console.log ("**************");
    console.log ("Postorder Tree");
    console.log ("**************");
    tree.postorder(tree.root);

    console.log ("**************");
    console.log ("AVG Tree");
    console.log ("**************");

    let avg = tree.avg();
    console.log("AVG",avg);
}

run();