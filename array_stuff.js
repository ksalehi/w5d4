"use strict"

function myUniq(array) {
  let counter = {};
  array.forEach( function(n) {
    if (!counter[n]) {
      counter[parseInt(n)] = 1;
    } else {
      counter[parseInt(n)] += 1;
    }
  });
  return Object.keys(counter).forEach(n => {return parseInt(n)});
}

// console.log(myUniq([1, 1, 2, 3]));


Array.prototype.myUniq = function() {
  let unique_array = [];

  for (var i = 0; i < this.length; i++) {
    if (unique_array.indexOf(this[i]) === -1) {
      unique_array.push(this[i]);
    }
  }
  return unique_array;
}

// console.log([1,1,2,3,3].myUniq());

Array.prototype.twoSum = function () {
  let twoSums = [];
  for (let i = 0; i < this.length - 1; i++) {
    for (let j = i + 1; j < this.length; j++) {
      if (this[j] + this[i] === 0) {
        twoSums.push([i, j]);
      }
    }
  }
  return twoSums;
};

// console.log([1, -1, 2, 0, -2].twoSum());

Array.prototype.transpose = function () {
  let transposed = [];
  for (var col_idx = 0; col_idx < this[0].length; col_idx++) {
    let row = [];
    for (var row_idx = 0; row_idx < this.length; row_idx++) {
      row.push(this[row_idx][col_idx]);
    }
    transposed.push(row);
  }
  return transposed;
};

//console.log([[1, 2, 3], [4, 5, 6]].transpose());
// clb_function(n)
Array.prototype.my_each = function (clb_function) {
  for (var i = 0; i < this.length; i++) {
    clb_function(this[i]);
  }
}

// let arr = [1, 2, 3];
//
// function pp (n) {
//   console.log(n);
// }
// arr.my_each((n) => {console.log(2*n)});

Array.prototype.my_map = function (clb_function) {
  let mapped = [];
  this.my_each((n) => mapped.push(clb_function(n)));
  return mapped;
};

// function timesTwo (n) {
//   return n*2;
// }

Array.prototype.my_inject = function (clb_function, acc) {
  var sliced;
  if (isNaN(acc)){
    acc = this[0];
    sliced = this.slice(1, this.length);
  }
  else {
    sliced = this;
  }
  sliced.my_each((n) => acc = clb_function(n, acc));
  return acc;
};

// arr = [1, 2, 3];

// console.log(arr.my_inject(add));
//
// function add (n,m) {
//   return n+m;
// }

Array.prototype.bubbleSort = function () {
  let unsorted = true;
  while (unsorted) {
    let swapped = false
    for (var i = 0; i < this.length - 1; i++) {
      if (this[i] > this[i + 1]) {
        this[i + 1] = [this[i], this[i] = this[i + 1]][0];
        swapped = true;
      }
    }
    if (swapped === false) {
      unsorted = false;
    }
  }
}

// let arr = [5,2,4,8,6,2,3,5,7,3,1];
// arr.bubbleSort();
// console.log(arr);

String.prototype.substrings = function () {
  let list = [];
  let chars = this.split('');
  for (var i = 0; i < chars.length; i++) {
    for (var j = i + 1; j <= chars.length; j++) {
      let substr = chars.slice(i,j).join('');
      if (!list.includes(substr)) {
        list.push(substr);
      }
    }
  }
  return list;
};

// console.log("catat".substrings());


function range (start, end) {
  if (end === start) {
    console.log("got to the end === start thing");
    return [end];
  } else if (end < start) {
    return [];
  }
  // console.log(end);
  let subrange = range(start, end-1);
  // console.log(subrange);
  // console.log(end);
  subrange.push(end);
  return subrange;
}

// console.log(range(1,8));

function sum (array) {
  if (array.length === 1) {
    return array[0];
  }
  let subtotal = sum(array.slice(0, array.length-1));
  let total = subtotal + array[array.length - 1];
  return total;
}

// console.log(sum([1, 2, 3]));

function exponent (num, exp) {
  if (exp === 0) {
    return 1;
  } else if (exp === 1) {
    return num;
  }
  let total = num * exponent(num, exp - 1);
  return total;
}

// console.log(exponent(2, 3));

function exponent2 (num, exp) {
  if (exp === 0) {
    return 1;
  } else if (exp === 1) {
    return num;
  }
  if (exp % 2 === 0) {
    let even = exponent2(num, exp/2);
    let even_sq = even*even;
    return even_sq;
  } else {
    let odd = exponent2(num, (exp-1)/2);
    let odd_sq = odd*odd*num;
    return odd_sq;
  }
}

// console.log(exponent2(2, 3));

function fib_r (n) {
  if (n === 0) {
    return [];
  } else if (n === 1) {
    return [1] ;
  } else if (n === 2) {
    return [1, 1];
  }
  let sub_fib = fib_r(n-1);
  let fib_num = sub_fib[sub_fib.length - 1] + sub_fib[sub_fib.length - 2];
  sub_fib.push(fib_num);
  return sub_fib;
}

// console.log(fib_r(5));

function fib_i (n) {
  if (n === 0) {
    return [];
  } else if (n === 1) {
    return [1] ;
  } else if (n === 2) {
    return [1, 1];
  }
  let fib = [1,1]
  while (fib.length < n) {
    fib.push(fib[fib.length-1] + fib[fib.length-2]);
  }

  return fib;
}
// console.log(fib_i(5));

function b_search (array, target) {
  if (array.length === 1) {
    if (array[0] === target) {
      return 0;
    } else {
      return NaN;
    }
  }
  let pivot = Math.floor(array.length / 2);
  // console.log(pivot)
  if (array[pivot] === target) {
    // console.log(`pivot is ${pivot}`)
    return pivot;
  }
  let a_left = array.slice(0, pivot);
  let a_right = array.slice(pivot, array.length);
  if (target < array[pivot]) {
    // console.log('went left')
    let target_loc = b_search(a_left, target);
    // console.log(target_loc);
    return target_loc;
  } else if (target > array[pivot]) {
    // console.log('went right')
    let target_loc = b_search(a_right, target);
    // console.log(target_loc);
    return target_loc + pivot;
  }
}

// console.log(b_search([1, 2, 3, 4, 5, 6, 7], 2));
// console.log(b_search([1, 2, 3, 4, 5, 6, 7], 1));
// console.log(b_search([1, 2, 3, 4, 5, 6, 7], 3));
// console.log(b_search([1, 2, 3, 4, 5, 6, 7], 7));
// console.log(b_search([1, 2, 3, 4, 5, 6, 7], 5));
// console.log(b_search([1, 2, 3, 4, 5, 6, 7], 9));

function Cat (name, owner) {
  this.name = name;
  this.owner = owner;
  // this.notcutestatement = function(){
  //   return `${this.owner} loves ${this.name}`;
}
Cat.prototype.cuteStatement = function() {
  return `Everybody loves ${this.name}`;
};

Cat.prototype.meow = function() {
  return `${this.name} says meow!`;
};
// Cat.prototype.cuteStatement = () => this
//   //return `${this.owner} loves ${this.name}`;
// //};
let cat = new Cat('munster', 'kia');
console.log(cat.cuteStatement());
console.log(cat.meow());

let cat2 = new Cat('leo', 'kabir');
cat2.meow = function () {return `MEOW`};

console.log(cat2.meow());

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }
  let pivot = Math.floor(array.length / 2);
  // let a_l = array.slice(0, pivot);
  // console.log(a_l);
  let a_left = mergeSort(array.slice(0, pivot));
  // let a_r = array.slice(pivot, array.length);
  // console.log(a_r);
  let a_right = mergeSort(array.slice(pivot, array.length));
  let sorted = mergeHelper(a_left, a_right);
  // let sorted = mergeHelper(mergeSort(a_l), mergeSort(a_r));
  return sorted;
}

function mergeHelper(a_left, a_right) {
  let merged = [];
  while (!(a_left.length === 0 || a_right.length === 0)) {
    console.log(merged);
    let a = a_left[0];
    let b = a_right[0];
    if (a < b) {
      merged.push(a_left.shift());
    } else {
      merged.push(a_right.shift());
    }

  }
  if (a_left.length === 0) {
    merged = merged.concat(a_right);
  } else if (a_right.length === 0) {
    merged = merged.concat(a_left);
  }
  return merged;
}

console.log(mergeSort([1,5,3,6,8,9,3,45,7,3,4]));

function subSets(array) {
  if (array.length === 0) {
    return [array];
  }
  let subs = subSets(array.slice(0, array.length - 1));
  let sets = subs;
  subs.forEach(arr => {
    sets.push(arr.concat(array[array.length - 1]));
  });
  return sets;
}

console.log(subSets([1, 2, 3]))
