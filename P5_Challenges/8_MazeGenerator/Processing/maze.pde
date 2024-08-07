// Algorithms used:
// Recursive backtracker
// Depth-first search

int cols, rows;
int w = 20;
ArrayList<Cell> grid = new ArrayList<Cell>();

Cell current;

ArrayList<Cell> stack = new ArrayList<Cell>();

void setup(){
    size(600, 600);
    cols = floor(width/w);
    rows = floor(height/w);
    //frameRate(5);

    for (int j = 0; j < rows; j++){
        for (int i = 0; i < cols; i++){
            Cell cell = new Cell(i, j);
            grid.add(cell);
        }
    }
    current = grid.get(0);
}

void draw(){
    background(51);
    for (int i = 0; i < grid.size(); i++){
        grid.get(i).show();
    }
    current.visited = true;
    current.highlight();

    //Step 1
    Cell next = current.checkNeighbors();
    if (next != null){
        next.visited = true;

        //Step 2
        stack.add(current);

        //Step 3
        removeWalls(current, next);

        //Step 4
        current = next;
    } else if (stack.size() > 0){
        current = stack.remove(stack.size() - 1);
    }
}

int index(int i, int j){
    if (i < 0 || j < 0 || i > cols-1 || j > rows-1){
        return 0;
    }
    return i + j * cols;
}

void removeWalls(Cell a, Cell b){
    int x = a.i - b.i;
    if (x == 1){
        // left wall of cell
        a.walls[3] = false;
        // right wall of cell
        b.walls[1] = false;
    } else if (x == -1){
        a.walls[1] = false;
        b.walls[3] = false;
    }

    int y = a.j - b.j;
    if (y == 1){
        // top of cell
        a.walls[0] = false;
        // bottom wall of cell
        b.walls[2] = false;
    } else if (y == -1){
        a.walls[2] = false;
        b.walls[0] = false;
    }
}