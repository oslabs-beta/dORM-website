import SyntaxHighlighter from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

const model = () => {
  const codeHighlight1 = `\n$deno run --allow-read --allow-write --allow-net --unstable deno.land/x/dorm/models/init.ts\n`;
  const codeHighlight2 = `\ndorm_databaseURL =
  'postgresql://USERNAME:PASSWORD@localhost:5432/DATABASENAME?schema=public\n`;
  const codeHighlight3 = `\n$deno run --allow-read --allow-write --allow-net --unstable deno.land/x/dorm/models/model-generator.ts\n`;
  return (
    <div>
      <h1 id={model}>MODEL INSTANCES</h1>
      <p>
        <strong>dORM</strong> can create model instances from your database. Run
        this in your command line terminal:
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
        This will create a <em>.env</em> file for you in your app root directory
        and create place holder for database url. If the <em>.env</em> file is
        already created, it will be appendeded.
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
      <p>
        Replace <em>USERNAME</em>, <em>PASSWORD </em> and <em>DATABASENAME</em>{' '}
        with your database information.
      </p>
      <p>
        After the <em>.env</em> file was created, execute the following command
        to get all the relations from your database
        <em>
          (you will also see this instruction in<em>.env</em> file)
        </em>
        :
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
        This will create a dorm folder containing all of your table relations as
        model instance files.
      </p>
      <h1>🚧 UNDER CONSTRUCTION 🚧</h1>
      <h1>🚧 UNDER CONSTRUCTION 🚧</h1>
      <h1>🚧 UNDER CONSTRUCTION 🚧</h1>
    </div>
  );
};

export default model;
