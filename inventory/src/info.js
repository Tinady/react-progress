function Info() {
  const showtitle = true;
  const Title = "this is my title";

  return (
    <div>
      <h1>{showtitle ? Title : "no title"}</h1>
      <h1>Inventory system</h1>
      <p>Manage your stuff.</p>
    </div>
  );
}

export default Info;
