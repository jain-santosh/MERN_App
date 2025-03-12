function Item({name, isPacked}) {
  return (
    <li className="item">
      {isPacked ? (
        <del>
          {name + ' ✅'}
        </del>
      ) : (
        name
      )}
    </li>
  );
}

function PackingListTernary() {
  return (
    <section>
      <h1>Trek Packing List Ternary</h1>
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

export default PackingListTernary;