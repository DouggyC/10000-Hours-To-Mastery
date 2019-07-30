/**
Terminology:
Node - Data point
Edges - Connections

Types of Graphs: 
Directed - Directional flow of graph connection structure.

Undirected - Without directional edges connections

// EXAMPLES

Adjacency List
a - b - c
let undirectedG = {
  Node1: ["Node2", "Node3"],
  Node2: ["Node3"],
  Node3: ["Node3"]
}

Adjacency Matrix : Undirected
a - b - c
____________
   a | b | c 
a| 0 | 1 | 0
b| 1 | 0 | 1
c| 0 | 1 | 0
￣￣￣￣￣￣￣
let adjMatU = [
  [0, 1, 1],
  [0, 0, 0],
  [1, 0, 0],
]

Adjacency Matrix : Directed
a <- b <- c
____________
   a | b | c 
a| 0 | 0 | 0
b| 1 | 0 | 0
c| 0 | 1 | 0
￣￣￣￣￣￣￣
let adjMatD = [
a|  [0, 0, 0],
b|  [1, 0, 0],
c|  [0, 1, 0],
    ]

Incidence Matrix : 
- Rows represent Nodes
- Columns represent Edges

Undirected
________________
   1 | 2 | 3 | 4 
a| 1 | 0 | 1 | 1
b| 1 | 1 | 0 | 0
c| 0 | 1 | 1 | 0
d| 0 | 0 | 0 | 1
￣￣￣￣￣￣￣￣￣

Directed
_______________________
    1  |  2  |  3  |  4 
a|  1  |  0  |  -1 |  1
b| -1  |  1  |  0  |  0
c|  0  |  -1 |  1  |  0
d|  0  |  0  |  0  | -1
￣￣￣￣￣￣￣￣￣￣￣￣￣￣
let incMatDir = [
a|    [ 1, 0, -1, 1],
b|    [-1, 1, 0, 0],
c|    [0, -1, 1, 0],
d|    [0, 0, 0, -1],
    ]


 */
