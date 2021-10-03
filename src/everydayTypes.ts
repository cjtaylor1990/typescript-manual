// Examples of primatives with type declarations
const theNumber : number = 42
const theString : string = "Hello, World!"
const theBoolean : boolean = true

// One example of array declaration
const array1 : number[] = [1, 2, 3, 4]

// Another example of array declaration. Uses T<> generic notation.
const array2 : Array<number> = [1, 2, 3, 4]

// Example of using "any"
let obj : any = { x : 0 }
//obj() // Typescript won't throw error if you call it like a function
//obj.foo() // Typescript won't throw an error due to use of "any"
obj = "hello" // Lets you assign obj to string

// But you don't NEED declare the type. A lot of times, TypeScript can infer the type
const noTypeDeclarationNeeded = "TypeScript is smart!"

// Functions allow for parameter type annotations
function sumNumberArray(x : Array<number>) {
    return x.reduce((prev : number, current : number) => prev + current)
}

// They don't often need return type annotations, but can be helpful
function numberToString(x : number) : string {
    return x.toString()
}

// Example with modern arrow function
const arrowFunctionWithAnnotations = (x : number, y : number) : number => x + y

// Functions with object parameters (note, you can use semi-colon or comma to seperate properties)
const functionWithObjectParamer = (x : { firstName : string; lastName : string }) : string => {
    return `${x.firstName} ${x.lastName}`
}
console.log(functionWithObjectParamer({firstName : "Corbin", lastName : "Taylor"}))

// You can add "?" for optional object properties
const functionWithOptionalObjectProperty = (x : { firstName : string, lastName? : string }) : string => {
    return x.lastName ? x.firstName + " " + x.lastName : x.firstName
}
console.log(functionWithOptionalObjectProperty({ firstName : "Bob" }))
console.log(functionWithOptionalObjectProperty({ firstName : "Billy", lastName : "Bob" }))

// Union type. Can be either number or string.
const printId = (id: number | string) => {
    console.log("Your ID is: " + id)
}
printId("101")
printId(202)

// If you do something to a union type, it must be possible with all types
const printIdNew = (id: number | string) => {
    // but you can narrow the code
    if (typeof id === "string") {
        console.log(id.toUpperCase())
    } else {
        console.log(id)
    }
}
printIdNew(101)
printIdNew("meow")

// Another example of union type
const welcomePeople = (x: string[] | string) => {
    // with narrowing
    if (Array.isArray(x)) {
        console.log("Hello, " + x.join(" and "))
    } else {
        console.log("Welcome lone traveler " + x)
    }
}
welcomePeople(["Corbin", "Caleb", "Collin"])
welcomePeople("Corbin")

