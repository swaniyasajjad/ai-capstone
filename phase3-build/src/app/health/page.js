async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");

  return res.json();
}

export default async function Health() {
  const data = await getData();

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-4">Health Check</h1>

      <p><strong>Title:</strong> {data.title}</p>

      <p><strong>Status:</strong> API Connected ✅</p>
    </div>
  );
}