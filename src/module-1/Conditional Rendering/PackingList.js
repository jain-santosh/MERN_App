function Item({name, isPacked}) {

  if(isPacked) {
    return <li className="item"> {name} ☑️</li>;
  }
  else {
    return <li className="item"> {name}</li>;
  }
}

function PackingList() {
  return (
    <section>
      <h1>Trek Packing List</h1>
      <ul>
        <Item 
          isPacked={true}
          name="Water Bottle"
        />

        <Item 
          isPacked={true}
          name="Shoes"
        />

        <Item 
          isPacked={false}
          name="Snacks"
        />
      </ul>
    </section>
  );
}

export default PackingList;