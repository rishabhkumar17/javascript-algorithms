/* 
    Dealing with collisions
Even with a large array and a great hash function, collisions are inevitable.
There are many strategies for dealing with collisions, but we'll focus on two:

1. Separate Chaining
2. Linear Probing
*/

/* Separate Chaining
With separate chaining, at each index in our array we store values using a 
more sophisticated data structure(an array or a linked list)

This allows us to store multiple key-value pairs at the same index

    Linear Probing
With linear probing, when we find a collision, we search through the array 
to find the next empty slot.

Unlike with separate chaining, this allows us to store a single key-value
at each index
*/
