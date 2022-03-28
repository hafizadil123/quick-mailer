# quick-mailer

quick Mailer is a node.js for sending emails instantly using one line of code with your own configurations.

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/). Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```sh
$ npm install quick-mailer
```
## Usage

```javascript
  const config = {
		service: 'Gmail', 
		user: 'admin@gmail.com', // you can replace your authtentication
		pass: 'admin123'
		
	}
  const options = {
		from: 'admin@gmail.com', // sender address
		to: 'test@gmail.com', // list of receivers
		subject: 'Testing Quick Mailer', // Subject line
		//text: 'Hello world?', // plain text body
		html: `<h1>Testing quick mailer</h1>` // Make sure you are passing html body in template literal
	};
 await quickMailer(config, options)

```

