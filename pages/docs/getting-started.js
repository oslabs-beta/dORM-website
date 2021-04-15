import Highlight from 'react-highlight';

const gettingStarted = () => {
  const test =
    "const inserted = await dorm .insert([{'name':'Hello World', 'email': 'user@dorm.com'}, {name: 'Elvis', '_id': 1, age: 50}]).table('user').returning().then((data: any) =&gt; data.rows).catch((e:any)=&gt; e)";
  return (
    <div>
      <h1>Introduction</h1>
      <Highlight language='javascript'>
        {`function foo() { return 'bar' }`}
      </Highlight>
      <h1>testing</h1>
    </div>
  );
};

export default gettingStarted;
