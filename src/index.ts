import { SearchFunc } from './interfaces';


// BEGIN INTERFACES REGION
// const myObj = { size: 10, label: 'Size 10 Object' };
// printLabel(myObj);

// const mySquare = createSquare({ color: 'black', width: 100 });
// console.log(mySquare);

// It is no need of the function name params being equals to the names
// defined on interface
const mySearch: SearchFunc = function (src: string, sub: string): boolean {
  const result = src.search(sub);
  return result > -1;
};

console.log(mySearch('Hello world', 'world'));
// END INTERFACES REGION
