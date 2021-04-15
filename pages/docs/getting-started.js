import SyntaxHighlighter from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

const gettingStarted = () => {
  const codeHighlight1 = `\n$deno run --allow-read --allow-write --allow-net --unstable deno.land/x/dorm/models/init.ts\n`;
  const codeHighlight2 = `\nimport { Dorm } from 'https://deno.land/x/dorm/mod.ts'\n`;
  const codeHighlight3 = `\nimport { Dorm } from 'https://deno.land/x/dorm/mod.ts'\nimport { config } from 'https://deno.land/x/dotenv/mod.ts'
  \nconst env = config();
  \nconst URL = 'postgres://\${env.USERNAME}:\${env.PASSWORD}@\${env.SERVER}:5432/\${env.USERNAME}';
  \nconst dorm = new Dorm(URL)`;
  const codeHighlight4 = `\nimport { Dorm } from 'https://deno.land/x/dorm/mod.ts';
  \nconst URL = 'postgres://\${USERNAME}:\${PASSWORD}@\${SERVER}:5432/\${USERNAME}';
  \nconst dorm = new Dorm(URL);`;

  return (
    <div>
      <h1 id={'introduction'}>INTRODUCTION</h1>
      <p>
        We’ve noticed that many developers don’t want or need to spend their
        time crafting long, elaborate SQL queries with nary a comma out of
        place, let alone worry about parameterizing every value or concatenating
        every element from a front-end request object into a query string. SQL
        syntax can be intimidating, exhausting, overwhelming, awkward, clunky,
        and just plain no fun to write and reason about. It’s powerful, but
        requires extra cognitive load to transition from thinking in
        Javascript/Typescript syntax to thinking in SQL-style syntax…
      </p>
      <h2>Enter dORM</h2>
      <p>
        dORM is an uber-lightweight SQL query builder for postgresQL and is
        currently being expanded into a full-fledged object-relational mapping
        (ORM) tool. Its purpose is to make your life easier when making SQL
        queries and let you write queries in familiar Javascript/Typescript
        syntax and dot notation. dORM runs in Deno, a secure runtime environment
        which supports Typescript out of the box and offers cloud-based package
        management among other great features.
      </p>
      <p>
        You can chain our methods together, use .then() at the end of the query
        methods or simply await the results; you can even take advantage of
        Deno’s top-level await. dORM is promise-based and makes async database
        queries a breeze. It also handles creating the connection to the
        database server, using deno-postgres under the hood.
      </p>
      <p>
        This guide will cover the basics of getting started with dORM. Later on
        we will explore some of dORM’S newest features related to
        object-relational mapping, but first let’s dive into some essential CRUD
        functionality with dORM’s query builder.{' '}
      </p>

      <h1 id={'getting-started'}>GETTING STARTED</h1>
      <p>
        dORM can create an .env file for you to securely hold your postgres
        connection string. From anywhere in your project folder, you can execute
        this in your terminal:
      </p>
      <SyntaxHighlighter
        className={'syntaxHighlighter'}
        language='javascript'
        style={nord}
      >
        {codeHighlight1}
      </SyntaxHighlighter>
      <p>The .env file is created in your project’s root directory.</p>
      <p>In your project, import the dORM query builder with:</p>
      <SyntaxHighlighter
        className={'syntaxHighlighter'}
        language='javascript'
        style={nord}
      >
        {codeHighlight2}
      </SyntaxHighlighter>
      <p>If using a .env file, you can use config like so: </p>
      <SyntaxHighlighter
        className={'syntaxHighlighter'}
        language='javascript'
        style={nord}
      >
        {codeHighlight3}
      </SyntaxHighlighter>
      <p>
        If you don’t use .env (we recommend using it!), you can of course pass
        your database connection string directly to Dorm too:{' '}
      </p>
      <SyntaxHighlighter
        className={'syntaxHighlighter'}
        language='javascript'
        style={nord}
      >
        {codeHighlight4}
      </SyntaxHighlighter>

      <p>And that’s it—you’re ready to start making queries! </p>
    </div>
  );
};

export default gettingStarted;
