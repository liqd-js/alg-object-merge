import ObjectMerge from '../src/merge';

const x = { headers: { foo: 'bar' } }

console.log(  ObjectMerge({}, x ));

console.log( x );

