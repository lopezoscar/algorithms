"use strict";



class QuickSort {

    run(input){
        this.sort(input,0,input.length -1);
    }

    swap(input,a,b){
        let aux = input[a];
        input[a] = input[b];
        input[b] = aux;
    }

    randomInt(min,max){
        return Math.floor( Math.random() * (max - min) ) + min;
    }

    choosePivot(input,left,right){
        return input [this.randomInt(left,right)];
    }

    sort(input, left, right){
        if(input.length <= 1){
            return ; //base case
        }

        let j = this.partition(input,left,right);

        if( left < j-1){
            this.sort(input,left,j-1);//left side of partition
        }

        if(j < right){
            this.sort(input,j,right);
        }
    }

    partition(input, left, right){
        let pivot = this.choosePivot(input,left,right);

        let i = left;
        let j = right;

        while( i <= j){

            while( input[i] < pivot){
                i++;
            }

            while( input[j] > pivot){
                j--;
            }

            if( i <= j){
                this.swap(input,i,j);
                i++;
                j--;
            }
        }
        return i;
    }
}

var q = new QuickSort();
var input = [1,4,2,6,8];
q.run(input);
console.log(input);