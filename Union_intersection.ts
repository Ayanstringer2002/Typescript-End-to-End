// Union type 
// type Animal = "DOG" | "CAT" | "Bird"

// Intersection Type
// type person = {name : string} & {age : number};

// Convert Union to Intersection type
// i) Distribute conditional Type
// ii) Conditional Template Literals

// Distribute Conditional Type
type UnionToIntersection<U> = (
    U extends any ? (k: U) => void : never
) extends (k: infer I) => void
    ? I
    : never;

// Example usage
type UnionType = { a: number } | { b: string } | { c: boolean };

type IntersectionType = UnionToIntersection<UnionType>;

// Example object of IntersectionType
const myObject: IntersectionType = {
    a: 42,
    b: "hello",
    c: true
};

console.log(myObject);

