enum Direction {
    Up,
    Down,
    Left,
    Right

}
let move: Direction = Direction.Up;
console.log(move);

// Heteregenous Enums
enum Status {
    Active = 1,
    Inactive = "INACTIVE",
    Pending = 2,
    Cancelled = "CANCELLED"

}
let currentStatus : Status = Status.Active; 
console.log(currentStatus);    // Output -> 1
let cancelledStatus : Status = Status.Cancelled;   // Output -> CANCELLED
console.log(cancelledStatus); 