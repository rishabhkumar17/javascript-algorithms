/* 
BFS ->  takes more space when the BST is very wide
        Works well when BST is deep
DFS ->  takes more space when the BST is very deep
        Works well when BST is wider

                10
            6         15
        3       8          20
DFS
    InOrder ->  Used commonly with BSTs when we want to get all nodes in the 
                tree in their underlying order 
                [3, 6, 8, 10, 15, 20]
    
                PreOrder -> Can be used to clone, export or duplicate a tree
                [10, 6, 3, 8, 15, 20]
*/
