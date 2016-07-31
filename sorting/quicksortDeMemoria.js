"use strict";

class QuickSort {

    randomInt(min,max){
        return Math.floor( Math.random() * (max-min) )+min;
    }

    swap(input,a,b){
        let t = input[a];
        input[a] = input[b];
        input[b] = t;
    }

    run(input) {
        this.sort(input, 0, input.length - 1);
    }

    partition(input, left, right) {
        let pivot = input[ this.randomInt(left,right) ];

        let i = left;
        let j = right;

        while( i <= j) {
            while (input[i] < pivot) {
                i++;
            }
            while (input[j] > pivot) {
                j--;
            }

            if (i <= j) {
                this.swap(input, i, j);
                i++;
                j--;
            }
        }
        return i;
    }

    sort(input, left, right) {
        if (input.length == 0) {
            return; //base case
        }

        let j = this.partition(input, left, right);

        if(left < j-1){
            this.sort(input, left, j-1);
        }

        if(j < right){
            this.sort(input, j, right);
        }
    }
}

var q = new QuickSort();
var input = [1,3,2,8,6,4];
q.run(input);
console.log(input)