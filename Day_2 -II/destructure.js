let box = [20, 30,200];
/**
 * Normal way
 */
// let pencil=box[0];
// let pen=box[1];
// console.log(pencil,pen)

/**
 * Array
 */
const [pen, notebook, pencil=100] = box;
console.log(pen, notebook, pencil);
// position or indexing is important;

/**
 * Objects
 */
let div = {
  pen: 20,
  pencil: 30,
  notebook: 100,
};
/**
 * Nomraml way
 */
// if I want pen value
// console.log(div.pencil);

/**
 * another way
 */
// const {pencil}=div;
// console.log(pencil,)

// Task
// Watch all the videos
