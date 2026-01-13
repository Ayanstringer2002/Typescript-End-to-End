/*

function function_name<type_parameter>(
    parameter_name: data_type_parameter
): return_type_parameter {
    // Rest of the code
}

*/

function displayData <type_parameter> 
    (parameter :type_parameter) : type_parameter{
      return parameter;
  }

let result1 = displayData <string> ("GeeksforGeeks");
let result2 = displayData <string> ("Hello World !!");
let result3 = displayData <number> (1234567890);

console.log(result1);
console.log(result2);
console.log(result3);

