function Item({name, isPacked}) {
  return (
    <li className="item">
      {name} {isPacked && '☑️'}
    </li>
  );
}

function PackingListAnd() {
  return (
    <section>
      <h1>Trek Packing List And</h1>
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

export default PackingListAnd;