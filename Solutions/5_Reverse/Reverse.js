const reverse = (s) => {
  var new_string = '';

  for(let i = s.length-1; i>=0; i--) {
    new_string += s[i];
  }

  return new_string;
}

const string_array = 'PATO';

console.log(reverse(string_array))