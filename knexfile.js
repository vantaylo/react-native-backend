module.exports = {

  development: {
    client: "pg",
    connection: {
      host: process.env.HOST,
      user: process.env.USER,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      charset: "utf8"
    },
    migrations: {
      directory: __dirname + "/knex/migrations",
    },
    seeds: {
      directory: __dirname + "/knex/seeds"
    }
  },

  production: {
		client: "pg",
		connection: process.env.DATABASE,
		migrations: {
			directory: "./data/migrations",
		},
		seeds: {
			directory: "./data/seeds",
		},
		pool: {      
			min: 2,      
			max: 10    
		}
	}

};
