"use strict";
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {

    constructor(){
        this.head = null;
        this.length = 0;
    }

    isEmpty(){
        return this.head == null;
    }

    iterate(){
        let current = this.head;
        while( current.next !== null ){
            console.log(current.value);
            current = current.next;
        }
        console.log(current.value);
    }

    tail(){
        let node = this.head;
        while(node.next !== null) {
            node = node.next;
        }
        return node;
    }

    add(value){
        if( this.isEmpty() ){
            this.head = new Node(value);
            return;
        }
        this.tail().next = new Node(value);
        this.length++;
    }

    addAll(list){

    }

    insertAfter(node,newNode){

    }

    insertBeginning(list,newNode){

    }

    removeAfter(node){// remove node past this one

    }

    removeBeginning(list,newNode){

    }


    reverse(){
        if(this.isEmpty()){
            return ;
        }
        let prev = null;
        let current = this.head;

        while(current !== null){
            let next = current.next;//Aux
            current.next = prev;//swap. (1st time is root node)
            prev = current;//swap
            current = next;
        }
        this.head = prev;
    }

    reverseRecursive(current){
        if(current === null){
            return null;
        }else if(current.next === null){
            this.head = current;
        }else{
            this.reverseRecursive(current.next);
            current.next.next = current;
            current.next = null; //set "old" next pointer to NULL
        }
    }

    search(value){
        
    }

    remove(value){
        if(this.isEmpty()){
            return;
        }

        let current = this.head;

        if(current.value == value){//No hay free en javascript. Pasa GC
            this.head = this.head.next;
        }else{
            let prev;

            while(current.value !== value && current.next !== null){
                prev = current;
                current = current.next;
            }
            if(current.next !== null){
                prev.next = current.next; //No hay free en javascript. Pasa GC
                console.log("Value "+value+" deleted");
            }else{
                console.log("Cannot find value "+value);
            }
        }

    }
}


var list = new LinkedList();
var n = 10;
for(var i = 1; i < n; i++){
    list.add(i);
}
// list.remove(998);
// list.reverse();
// list.iterate();
list.reverseRecursive(list.head);

list.iterate();