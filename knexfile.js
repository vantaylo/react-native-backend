module.exports = {

  development: {
    client: "pg",
    connection: process.env.DB_URL,
    migrations: {
      directory: __dirname + "/knex/migrations",
    },
    seeds: {
      directory: __dirname + "/knex/seeds"
    }
  },

  production: {
		client: "pg",
		connection: process.env.DB_URL,
		migrations: {
			directory: "./knex/migrations",
		},
		seeds: {
			directory: "./knex/seeds",
		},
		pool: {      
			min: 2,      
			max: 10    
		}
	}

};
