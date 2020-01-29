const url = require('url');

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

// Searlized URL
console.log(myUrl.href);
console.log(myUrl.toString());

// Host (root domain)
console.log(myUrl.host);

// Hostname (does not get port)
console.log(myUrl.hostname);

// Path name 
console.log(myUrl.pathname);

// Serialized Query
console.log(myUrl.search);
// Params object
console.log(myUrl.searchParams);

// Add param
myUrl.searchParams.append('ab','12');
console.log(myUrl.searchParams)

// Loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));

