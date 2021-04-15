// const queryBuilder = () => {
//   const test =
//     "const inserted = await dorm .insert([{'name':'Hello World', 'email': 'user@dorm.com'}, {name: 'Elvis', '_id': 1, age: 50}]).table('user').returning().then((data: any) =&gt; data.rows).catch((e:any)=&gt; e)";

//   return (
//     <div>
//       <h1>CRUD:</h1>
//       <h2>CRUD—the foundation, right?</h2>
//       <h3>.insert()</h3>
//       <p>
//         Let’s start with the C: create. You want to insert some data into your
//         db. Maybe you have a request object from the client. If you build your
//         objects in dORM’s straightforward column:value insertion format, it’s as
//         easy as plugging an array of objects into the .insert() method.
//       </p>
//       <div>
//         <pre>
//           {/* <var>const inserted = await dorm</var> */}
//           {/* <code>{test}</code> */}
//           {/* <samp>.insert([{'name':'Hello World', 'email': 'user@dorm.com'},</samp> */}
//           {/* <code>"{name: 'Elvis', '_id': 1, age: 50}])"</code> */}
//           {/* <code>.table('user')</code>
//           <code>.returning()</code>
//           <code>.then((data: any) => data.rows)</code>
//           <code>.catch((e:any)=> e)</code> */}
//         </pre>
//       </div>
//     </div>
//   );
// };

// export default queryBuilder;

import SyntaxHighlighter from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
const Component = () => {
  const codeString = `
  const inserted = await dorm
    .insert([{'name':'Hello World', 'email': 'user@dorm.com'}, {name: 'Elvis', '_id': 1, age: 50}])
    .table('user')
    .returning()
    .then((data: any) => data.rows)
    .catch((e:any)=> e)
  `;
  // const test = JSON.stringify(codeString, null, 2);
  return (
    <div>
      <SyntaxHighlighter
        className={'syntaxHighlighter'}
        language='javascript'
        style={nord}
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};
export default Component;
