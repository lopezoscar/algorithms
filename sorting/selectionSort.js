"use strict";
/**
 * First, find the smallest item in the array and exchange it with the first entry
 * (itself if the first entry is already the smallest).
 * Then, find the next smallest item and exchange it with the second entry.
 * Continue in this way until the entire array is sorted.
 *
 * This method is called selection sort because it works by repeatedly selecting the smallest remaining item.
 *
 * O(n^2)
 */
class SelectionSort {
    swap(input,a,b){
        let aux = input[a];
        input[a] = input[b];
        input[b] = aux;
    }

    /**
     *
     * For each i, this implementation puts the ith smallest item in a[i].
     * The entries to the left of position i are the i smallest items in the array
     * and are not examined again.

     * @param input
     */
    sort(input){
        for(var i = 0; i < input.length; i++){
            let min = i;

            for(var j = i+1; j < input.length; j++){
                if( input[j] < input[min] ){
                    min = j;
                }
            }

            this.swap(input,i,min);
        }
    }
}

let selectionSort = new SelectionSort();
var input = [3,1,5,7,2,4];
selectionSort.sort(input);
console.log(input);