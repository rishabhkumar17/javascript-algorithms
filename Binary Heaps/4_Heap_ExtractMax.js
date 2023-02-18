// EXTRACT MAX ELEMENT

/* 
Swap the first value in the values property with the last one.
Pop from the values property, so you can return the value at the end
Have the new root "sink down" to the correct spot..
    Your parent index starts at 0 (root)
    Find the index of the left child: 2 * index + 1 (make sure its not out of bounds)
    Find the index of the right child: 2 * index + 2 (make sure its not out of bounds)
    If the left or right child is greater than the element.. swap. If both left and right child are larger, swap with the largest child.
    The child index you swapped to now becomes the new parent index.
    Keep looping and swapping until neither child is larger than the element.
    Return the old root.
*/
