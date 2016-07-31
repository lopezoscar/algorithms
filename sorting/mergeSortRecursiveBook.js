"use strict";

/**
 * Merge Sort based on Book Algorithms 4th edition.
 * O(n log n)
 */
class MergeSort {

    less(a,b){
        return a-b < 0;
    }

    run(input){
        this.aux = [];
        this.sort(input,0, input.length-1);
    }

    /**
     *
     * Abstract in-place merge
     *
     * This method merges by first copying into the auxiliary array aux[]
     * then merging back to a[]. In the merge (the second for loop),
     * there are four conditions: left half exhausted (take from the right),
     * right half exhausted (take from the left),
     * current key on right less than current key on left (take from the right),
     * and current key on right greater than or equal to current key on left (take from the left).
     *
     * @param input
     * @param lo
     * @param mid
     * @param hi
     */
    merge(input, lo, mid, hi){
        // Merge a[lo..mid] with a[mid+1..hi].

        let i = lo;
        let j = mid+1;//Se divide en 2 el array
        let k;

        for(k = lo; k <= hi; k++){// Copy a[lo..hi] to aux[lo..hi].
            this.aux[k] = input[k];
        }

        for (k = lo; k <= hi; k++) {   // Merge back to a[lo..hi].

            if (i > mid){
                input[k] = this.aux[j++];
            }
            else if (j > hi){
                input[k] = this.aux[i++];
            }
            else if (this.less(this.aux[j], this.aux[i])){
                input[k] = this.aux[j++];
            }
            else {
                input[k] = this.aux[i++];
            }
        }

    }

    /**
     *
     * Top-down mergesort
     *
     * To sort a subarray a[lo..hi] we divide it into two parts: a[lo..mid] and a[mid+1..hi],
     * sort them independently (via recursive calls),
     * and merge the resulting ordered subarrays to produce the result.
     *
     * @param input
     * @param lo
     * @param hi
     */
    sort(input, lo, hi){
        if( hi <= lo){
            return ; //base case
        }
        let mid = Math.floor(lo + (hi - lo)/2);
        this.sort(input,lo,mid);// Sort left half.
        this.sort(input,mid+1,hi); // Sort right half.
        this.merge(input,lo,mid,hi); // Merge results
    }
}

var mergeSort = new MergeSort();
var input = [1,3,2,8,6,4];
mergeSort.run(input);
console.log(input);