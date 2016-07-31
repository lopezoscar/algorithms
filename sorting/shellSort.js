"use strict";

/**
 * Shellsort is a simple extension of insertion sort
 * that gains speed by allowing exchanges of array entries that are far apart,
 * to produce partially sorted arrays that can be efficiently sorted,
 * eventually by insertion sort.
 *
 * O( n(log(n))^2 )
 *
 * Is faster than SelectionSort and InsertionSort
 */
class ShellSort {

    swap(input,a,b){
        let aux = input[a];
        input[a] = input[b];
        input[b] = aux;
    }

    sort(input){

        let n = input.length;
        let h = 1;

        while (h < n/3) h = 3*h + 1; // 1, 4, 13, 40, 121, 364, 1093, ...

        while (h >= 1)
        {  // h-sort the array.
            for (var i = h; i < n; i++){  // Insert input[i] among input[i-h], input[i-2*h], input[i-3*h]... .

                for (var j = i; j >= h && input[j] < input[ j-h ]; j -= h){
                    this.swap(input, j, j-h);
                }
            }
            h = h/3;
        }
    }
}

var shellSort = new ShellSort();
var input = [1,3,2,8,6,4];
console.log(input);
shellSort.sort(input);
console.log(input);