const title = 'Romeo and Juliet '
const author = 'Sheikhspeare'
const follower = 10000000000;

//concatenation string way
let result = ' The Story named ' + title + ' by ' +author+ ' has ' +follower+ ' follower.';
console.log(result);

//template string way
let result1 = `The Story named ${title} by ${author} has ${follower} follower.`;
console.log(result1);

//creating HTML templates
let HTML=`
<h2>${title}</h2>
<p> ${author}</p>
<span>The story has ${follower} follower</span>
`;

console.log(HTML);

