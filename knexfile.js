// const connectionString = process.env.DATABASE_URL || "postgresql://luis:pass@localhost/blog";  // ADD the username and password to an ENV variable 

const connectionString = process.env.DATABASE_URL || "postgresql://postgres:secretpassword@localhost:5433/blog";


module.exports = {
  development: {
    client: 'sqlite3',
    // client: 'pg',
    useNullAsDefault: true, 
    connection: {
      filename: './data/blog.db3',
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
    // needed when using foreign keys
    pool: {
      afterCreate: (conn, done) => {
        // runs after a connection is made to the sqlite engine
        conn.run('PRAGMA foreign_keys = ON', done); // turn on FK enforcement
      },
    },
  },

  staging: {
    client: 'pg',
    connection: {
      host: 'local',  // add this 
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './data/migrations',
    }
  },

  production: {
    client: 'pg',  // remember to npm i pg
    connection: connectionString,
    // connection: {
    //   database: 'blog',
    //   user: 'postgres',
    //   password: 'secretpassword',
    //   port: 5433
    // },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './data/migrations',
    }
  }
};
