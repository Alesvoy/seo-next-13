import Image from "next/image";
import { getProducts } from "../api/route";

export default async function Page() {
  const products = await getProducts();
  return (
    <div>
      <h1>This is the products page!</h1>
      <section>
        {products.map((product) => (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <div>
              <Image
                src={product.image}
                alt={product.title}
                width={50}
                height={50}
              />
            </div>
            <p>{product.description}</p>
            <p>${product.price}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
