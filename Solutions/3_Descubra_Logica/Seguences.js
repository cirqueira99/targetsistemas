const seq_a = ( array ) => {
  // q = n2 - n1
  // n3 = n2 + q

  const q = array[array.length - 1] - array[array.length - 2];

  const new_num = array[array.length - 1] + q;

  console.log(`[ ${new_num} ]`);
}

const seq_b = (array) => {
  // n2 = n1 * 2
  
  const new_num = array[array.length - 1] * 2;

  console.log(`[ ${new_num} ]`);
}

const seq_c = (array) => {
  // q = (n2 - n1) + 2
  // n3 = n2 + q

  const q = (array[array.length - 1] - array[array.length - 2]) + 2
  const new_num = array[array.length - 1] + q;

  console.log(`[ ${new_num} ]`);
}

const seq_d = (array) => {
  // q = (n2 - n1) + 8
  // n3 = n2 + q
  
  const q = (array[array.length - 1] - array[array.length - 2]) + 8
  const new_num = array[array.length - 1] + q;

  console.log(`[ ${new_num} ]`);
}

const seq_e = (array) => {
  // n3 = n2 + n1
  const new_num = array[array.length - 1] + array[array.length - 2];

  console.log(`[ ${new_num} ]`);
}


seq_a( [1, 3, 5, 7] );
console.log("-");

seq_b( [2, 4, 8, 16, 32, 64, 4, 8, 16, 32, 64] );
console.log("-");

seq_c( [ 0, 1, 4, 9, 16, 25, 36] );
console.log("-");

seq_d( [4, 16, 36, 64] );
console.log("-");

seq_e( [1, 1, 2, 3, 5, 8] );
console.log("-");

