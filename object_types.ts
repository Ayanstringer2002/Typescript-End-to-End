// Here Car is the data Type
interface Car {
    make: string;
    model: string;
    year: number;
    electric?: boolean; // Optional property
}

const myCar: Car = {
    make: "Tesla",
    model: "Model S",
    year: 2022,
    electric: true
};

console.log(`I drive a ${myCar.year} ${myCar.make} ${myCar.model}.`);

// Output : I drive a 2022 Tesla Model S.