"use strict";
/**
 * QuickSort based on Book Algorithms 4th Edition
 * O(n log n)
 * Worst-case scenario: O(n^2). Worst Pivot in an already ordered array
 * Best-case scenario: O(n log n). All the pivot are the median from each subarray
 * Average Time: O (n log n). Based o E (P( random pivot) )
 */
class QuickSort{

    randomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    less(a,b){
        return a-b < 0;
    }

    swap(input, i, j){
        let t = input[i];
        input[i] = input[j];
        input[j] = t;
    }

    sort(input,lo,hi){
        if( hi <= lo)
            return ; //Base case. if higher bound is less than or equals to lower bound, end of recursion

        let j = this.partition(input,lo,hi);
        this.sort(input,lo,j-1); // Sort left part a[lo .. j-1].
        this.sort(input,j+1,hi); // Sort right part a[j+1 .. hi].
    }

    /**
     *
     * Quicksort is a recursive program that sorts a subarray a[lo...hi]
     * by using a partition() method that puts a[i] into position and arranges
     * the rest of the entries such that the recursive calls finish the sort.
     * @param input
     * @param lo
     * @param hi
     */
    partition(input,lo,hi){
        // Partition into a[lo..i-1], a[i], a[i+1..hi].
        let i = lo;
        let j = hi+1;// left and right scan indices

        let v = input[ lo ];//First var ?? //Should be Random.

        while(true){
            while( this.less(input[++i],v ) ){ //i increases while be minor to pivot
                if(i == hi){
                    break;
                }
            }
            while( this.less(v , input[--j]) ){//j decreases until j be equals to lo
                if(j == lo){
                    break;
                }
            }
            //all are paritioned break
            if (i >= j)
                break;

            //Swap elements that are not partioned
            this.swap(input, i, j);
        }

        //Swap elements that are not partioned
        this.swap(input, lo, j);// Put v = a[j] into position
        return j;// with a[lo..j-1] <= a[j] <= a[j+1..hi].
    }

    run(input){
        this.sort(input,0,input.length-1);
    }
}

var quicksort = new QuickSort();
var input = [1,3,2,8,6,4];
quicksort.run(input);
console.log(input);

