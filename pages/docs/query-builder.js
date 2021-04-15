import Image from 'next/image';

const queryBuilder = () => {
  return (
    <div>
      <h1>UNDER CONSTRUCTION 🚧</h1>
      <Image src='/ucp.png' alt='ucp' width={700} height={394} />
    </div>
  );
};

export default queryBuilder;

// import SyntaxHighlighter from 'react-syntax-highlighter';
// import { nord } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
// const Component = () => {
//   const codeString = `
//   const inserted = await dorm
//     .insert([{'name':'Hello World', 'email': 'user@dorm.com'}, {name: 'Elvis', '_id': 1, age: 50}])
//     .table('user')
//     .returning()
//     .then((data: any) => data.rows)
//     .catch((e:any)=> e)
//   `;
//   // const test = JSON.stringify(codeString, null, 2);
//   return (
//     <div>
//       <SyntaxHighlighter
//         className={'syntaxHighlighter'}
//         language='javascript'
//         style={nord}
//       >
//         {codeString}
//       </SyntaxHighlighter>
//     </div>
//   );
// };
// export default Component;
