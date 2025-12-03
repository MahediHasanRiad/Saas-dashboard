

function ProductItem({ image, productName, price, rating: Rating }) {
  return (
    <section className="flex content-center my-4">
      <div>
        <img src={image} alt="" className="rounded w-25 h-25"/>
      </div>
      <div className="ms-6">
        <p className="font-semibold m-1">{productName}</p>
        <p className="m-1"><Rating /></p>
        <p className="font-semibold m-1">{price}</p>
      </div>
      <hr />
    </section>
  )
}

export default ProductItem
