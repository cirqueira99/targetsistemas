const soma = (num_one, num_two) => {
  const result = num_one + num_two;

  return result;
}

const checkNumberInSequence = (num) => {
  var nums_sequence = [0, 1];
  var check = false;
  var exist = false;
  var pos = 1;
  var message = '';

  while(!check){
    nums_sequence.push( soma(nums_sequence[pos-1], nums_sequence[pos]) );
    const found = nums_sequence.find( element => element == num);

    if(found) exist = true;
    
    if(num <= nums_sequence[pos+1]) check = true;

    pos += 1;
  }
  
  exist? message = 'O número SIM está na sequência' : message = 'O número NÃO está na sequência';

  console.log(message)
}

checkNumberInSequence(22);