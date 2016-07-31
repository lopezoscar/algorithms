"use strict";

/**
 *
 *  public class Insertion
 {
    public static void sort(Comparable[] a)
    {  // Sort a[] into increasing order.
       int N = a.length;
       for (int i = 1; i < N; i++)
       {  // Insert a[i] among a[i-1], a[i-2], a[i-3]... ..
          for (int j = i; j > 0 && less(a[j], a[j-1]); j--)
             exch(a, j, j-1);
} }
    // See page 245 for less(), exch(), isSorted(), and main().
}

 **/

/**
 *
 * The algorithm that people often use to sort bridge hands is to consider the cards one at a time,
 * inserting each into its proper place among those already considered
 * (keeping them sorted). In a computer implementation,
 * we need to make space to insert the current item by moving larger items one position to the right,
 * before inserting the current item into the vacated position
 *
 * Se inserta entre medio de las que se consideran ordenadas, hay que hacer espacio moviendo elementos
 * del array.
 *
 * Insertion sort is slow for large unordered arrays because the only exchanges it does involve adjacent entries,
 * so items can move through the array only one place at a time.
 * 
 * O(n^2)
 */
class Insertion {

    swap(input,a,b){
        let aux = input[a];
        input[a] = input[b];
        input[b] = aux;
    }

    /**
     * For each i from 0 to N-1, exchange a[i] with the entries that are smaller in a[0] through a[i-1].
     * As the index i travels from left to right, the entries to its left are in sorted order in the array,
     * so the array is fully sorted when i reaches the right end.
     * @param input
     */
    sort(input){
        let n = input.length;
        for(var i = 0; i < n; i++){
            // Insert a[i] among a[i-1], a[i-2], a[i-3]... ..
            for(var j = i; j > 0 && input[j] < input[j-1] ; j++ ){
                console.log("swap ",input[j],input[j-1]);
                this.swap(input,j,j-1);
            }
        }
    }
}

var insertion = new Insertion();
var input = [1,3,2,8,6,4];
console.log(input);
insertion.sort(input);
console.log(input);