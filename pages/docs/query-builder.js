import SyntaxHighlighter from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

const queryBuilder = () => {
  const codeHighlight1 = `\nconst inserted = await dorm
  .insert([
    { name: 'Hello World', email: 'user@dorm.com' },
    { name: 'Elvis', _id: 1, age: 50 },
  ])
  .table('user')
  .returning()
  .then((data: any) => data.rows)
  .catch((e: any) => e);\n`;
  const codeHighlight2 = `\ntry {
    const inserted = await dorm
    .insert([
      {
        'name':'Hello World',
        'email': 'user@dorm.com'
      },
      {
        name: 'Elvis',
        '_id': 1, age: 50
      }
    ])
    .table('user')
    .returning()
  }
  catch(e:any) {
    console.log(e);
  }\n`;
  const codeHighlight3 = `\nawait dorm
  .select('name')
  .from('people')
  .where('_id=1')
  .then((data: any) => {
    return data.rows;
  })
  .catch((e: any) => {
    throw e;
  });\n`;
  const codeHighlight4 = `\n.where("name = 'Jack \'\'Killer\'\' Chen' ");\n`;
  const codeHighlight5 = `\nawait dorm
  .update({ username: 'Dogs', email: 'iamnotagooddog@dogs.com' })
  .table('dropthis')
  .where('_id = 10')
  .returning()
  .then((data: any) => {
    return data.rows;
  })
  .catch((e: any) => e);\n`;
  const codeHighlight6 = `\nawait dorm
  .update({ username: 'Dogs', email: 'iamnotagooddog@dogs.com' })
  .table('dropthis')
  .where('_id = 10')
  .returning()
  .then((data: any) => {
    return data.rows;
  })
  .catch((e: any) => e);\n`;
  const codeHighlight7 = `\nawait dorm
  .delete()
  .from('dropthis')
  .where('"_id" = \${updateId}')
  .returning()
  .then((data: any) => {
    return data;
  })
  .catch((e: any) => e);\n`;
  const codeHighlight8 = `\n .innerJoin() OR .join();
  .leftOuterJoin() OR leftJoin();
  .rightOuterJoin() OR .rightJoin();
  .fullOuterJoin() OR .fullJoin();\n`;
  const codeHighlight9 = `\n await dorm
  .select()
  .from('people')
  .join('people_in_films')
  .on('people._id = people_in_films.person_id')
  .leftJoin('films')
  .on('people_in_films.film_id = films._id');;\n`;
  const codeHighlight10 = `\n const test = dorm
  .insert({'username':'Golden_Retreiver','password': 'golDenR','email':'iamagooddog@dogs.com'})
  .table('userprofile')
  .toObj()
  
  //expected output-->
  {
    text: "INSERT INTO userprofile (username, password, email) VALUES ($1, $2, $3)",
    values: [
      "Golden_Retreiver","golDenR","iamagooddog@dogs.com"
    ]
  }\n`;
  const codeHighlight11 = `\n const values = [1, ‘Bob’];
  const results = await dorm.raw(‘SELECT * FROM people WHERE id = $1 OR name = $2’, values)\n`;
  const codeHighlight12 = `\n const querystring = await dorm.select().from('people').where('id = 1');

  Returned: {
  text: 'SELECT * FROM people WHERE id = $1',
  values: [1]
  };\n`;

  return (
    <div>
      <h1 id={'insert'}>INSERT</h1>
      <p>
        <strong>dORM</strong> simplifies the process of inserting multiple
        values into multiple columns of a table. If you only have a single
        object, you can pass that in without putting it inside an array.
        `.returning()` with no arguments will function as returning all. To use
        top level await use try catch block:
      </p>
      <div>
        <SyntaxHighlighter
          className={'syntaxHighlighter'}
          language='javascript'
          style={nord}
        >
          {codeHighlight1}
        </SyntaxHighlighter>
      </div>
      <p>
        <strong>dORM</strong> simplifies the process of inserting multiple
        values into multiple columns of a table. If you only have a single
        object, you can pass that in without putting it inside an array. To use
        top level await use try catch block:
      </p>
      <div>
        <SyntaxHighlighter
          className={'syntaxHighlighter'}
          language='javascript'
          style={nord}
        >
          {codeHighlight2}
        </SyntaxHighlighter>
      </div>
      <h1 id={'select'}>SELECT</h1>
      <p>
        <em>.where()</em> takes as an argument a string that defines a
        condition. Conditions can contain logical operators such as `AND/OR`.
        Currently, a value in a <em>.where()</em> string can be a string(wrapped
        in single quotes), a number, null, or boolean. Double-quotes cannot be
        used inside a single-quoted string value, and neither single nor double
        quotes can be used anywhere else inside the condition string. Unicode
        tokens (\uxxxx.) currently cannot be used anywhere in the condition
        string.
      </p>
      <div>
        <SyntaxHighlighter
          className={'syntaxHighlighter'}
          language='javascript'
          style={nord}
        >
          {codeHighlight3}
        </SyntaxHighlighter>
      </div>
      <p>
        If you want to use single quotes inside your single-quoted string value,
        use two single-quotes in a row (using backslashes to escape) and be sure
        to use double-quotes around your `.where()` argument.
      </p>
      <div>
        <SyntaxHighlighter
          className={'syntaxHighlighter'}
          language='javascript'
          style={nord}
        >
          {codeHighlight4}
        </SyntaxHighlighter>
      </div>
      <h1 id={'update'}>UPDATE</h1>
      <div>
        <SyntaxHighlighter
          className={'syntaxHighlighter'}
          language='javascript'
          style={nord}
        >
          {codeHighlight5}
        </SyntaxHighlighter>
      </div>
      <p>
        The <em>.update()</em> method takes a single object, with the key/value
        pairs corresponding to the column names and values to update in the
        database.
      </p>
      <div>
        <SyntaxHighlighter
          className={'syntaxHighlighter'}
          language='javascript'
          style={nord}
        >
          {codeHighlight6}
        </SyntaxHighlighter>
      </div>
      <p>
        Our <em>.update()</em> method won’t work without a <em>.where()</em>{' '}
        attached. If you for some extravagant reason wanted to update your whole
        table in such a way, that’s fine: for your convenience and well-being,
        we’ve provided an <em>.updateAll()</em> method that requires (and
        accepts) no <em>.where()</em>. Here is an example of updating all rows
        using <strong>dORM</strong>:
      </p>
      <h1 id={'delete'}>DELETE</h1>
      <p>
        Similar to <em>.update()</em> and <em>.updateAll()</em>,{' '}
        <strong>dORM</strong> has <em>.delete()</em> and
        <em>.deleteAll()</em>. The <em>.delete()</em> method requires a{' '}
        <em>.where()</em> clause,
        <em>.deleteAll()</em> does not. And as an extra safeguard, if you do
        include a<em>.where()</em> with <em>.deleteAll()</em>,{' '}
        <strong>dORM</strong> will throw an error because it can read your mind
        and it knows you didn’t intend to do that.
      </p>
      <div>
        <SyntaxHighlighter
          className={'syntaxHighlighter'}
          language='javascript'
          style={nord}
        >
          {codeHighlight7}
        </SyntaxHighlighter>
      </div>
      <h1 id={'drop'}>DROP</h1>
      <p>
        <em>.drop()</em> for deleting tables. Pass the table as an argument to{' '}
        <em>.drop()</em>, or use the <em>.table()</em> method or one of its
        aliases: <em>.from()</em> or <em>.into()</em>. Please proceed with
        caution.
      </p>
      <div>
        <SyntaxHighlighter
          className={'syntaxHighlighter'}
          language='javascript'
          style={nord}
        >
          {codeHighlight8}
        </SyntaxHighlighter>
      </div>
      <h1 id={'joins'}>JOIN</h1>
      <p>
        <strong>dORM</strong> puts several join methods at your fingertips, each
        with an alias.
      </p>
      <div>
        <SyntaxHighlighter
          className={'syntaxHighlighter'}
          language='javascript'
          style={nord}
        >
          {codeHighlight9}
        </SyntaxHighlighter>
      </div>
      <p>
        <em>.on()</em> takes a string argument that defines a condition for the{' '}
        <em>.join()</em>. Although it’s probably most common to put the{' '}
        <em>.on()</em> directly after the <em>.join()</em> it refers to,{' '}
        <strong>dORM</strong> allows you considerable leeway here. As long as
        the number of <em>.on()</em> methods equals the number of{' '}
        <em>.join()</em> methods, <strong>dORM</strong> is happy. It will pair
        them up in the order they appear, ie. the first on with the first join,
        second on with second join, etc.
      </p>
      <h1 id={'parameterized-queries'}>PARAMETERIZED QUERIES</h1>
      <p>
        PostgresQL advised that all values in a query should be parameterized.
        Here’s how that works with <strong>dORM</strong>. With the{' '}
        <em>.insert()</em> or <em>.update()</em> methods, the values you include
        will be automatically parameterized. The passed-in object and the final
        query string sent to the database will look something like this:
      </p>
      <div>
        <SyntaxHighlighter
          className={'syntaxHighlighter'}
          language='javascript'
          style={nord}
        >
          {codeHighlight10}
        </SyntaxHighlighter>
      </div>
      <p>
        For <em>.where()</em> and <em>.on()</em> arguments, **dORM** will parse
        the argument and parameterize any _string, number, boolean,_ or _null
        values._ When <strong>dORM</strong> queries the database, it sends the
        parameterized query string as the first argument, and an array of values{' '}
        <em>(if any)</em> as the second argument. Postgres handles everything
        from there, scrubbing the values to ensure no SQL injection can occur.
      </p>
      <div>
        <SyntaxHighlighter
          className={'syntaxHighlighter'}
          language='javascript'
          style={nord}
        >
          {codeHighlight11}
        </SyntaxHighlighter>
      </div>
      <h1>TOSTRING / TOOBJECT</h1>
      <p>
        Perhaps there will be times when you want to create a query, but don’t
        want to send it off to the database just yet. <strong>dORM</strong> has
        a couple of methods to help you with that. A <strong>dORM</strong> query
        string is sent off to the database upon reaching a .then in the chain,
        or an await. You can intercept the query string with the `.toString()`
        method, which returns just the string with the values parameterized (ie.
        `'...WHERE id = $1'`). If you already have the values handy, that’s
        great, but if you’d want the values array returns as well, the
        `.toObject()` (alias .toObj) method will return an object with two
        properties: text and values.
      </p>
      <div>
        <SyntaxHighlighter
          className={'syntaxHighlighter'}
          language='javascript'
          style={nord}
        >
          {codeHighlight12}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default queryBuilder;
