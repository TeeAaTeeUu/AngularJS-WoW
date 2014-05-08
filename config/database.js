module.exports = {

// the database url to connect
url : process.env.MONGOLAB_URI ||
  	process.env.MONGOHQ_URL ||
	'mongodb://localhost/test'
}