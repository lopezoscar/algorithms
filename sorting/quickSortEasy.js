"use strict";

/**
 * Based on https://www.nczonline.net/blog/2012/11/27/computer-science-in-javascript-quicksort/
 *
 * O(n log n)
 * Worst-case scenario: O(n^2). Worst Pivot in an already ordered array
 * Best-case scenario: O(n log n). All the pivot are the median from each subarray
 * Average Time: O (n log n). Based o E (P( random pivot) )
 */
class QuickSort {


    randomInt(min, max){
        //https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Math/random
        return Math.floor(Math.random() * (max - min)) + min;
    }

    swap(input,a,b){
        let aux = input[a];
        input[a] = input[b];
        input[b] = aux;
    }

    run(input){
        this.sort(input,0,input.length -1);
    }

    sort(input,left,right){
        if(input.length == 0){
            return ; //base case
        }

        let j = this.partition(input,left,right);

        if(left  < j -1){
            this.sort(input,left, j-1 );//Es j -1 porque es el limite superior, el length del array -1
        }

        if(j < right ){
            this.sort(input,j,right);//Por qué no es j+1?
        }
    }

    partition(input, left, right){
        let pivot = input[this.randomInt(left,right)];// "average n log n"

        let i = left;
        let j = right;

        while( i <= j){

            //Aumenta el lower bound
            while(input[i] < pivot){
                i++;
            }

            //Disminuye el high bound
            while(input[j] > pivot){
                j--;
            }

            //Después de aumentar i y disminuir j. Hay que hacer swap de j a i. De unpartitioned a partitioned.
            if(i <= j){
                this.swap(input,i,j);
                i++;
                j--;
            }
        }
        return i;
    }
}

var quicksort = new QuickSort();
var input = [1,3,2,8,6,4];
quicksort.run(input);
console.log(input);