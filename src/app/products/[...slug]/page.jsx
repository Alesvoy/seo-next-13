import Image from "next/image";
import Link from "next/link";
import { getProduct } from "../../api/route";

export default async function ProductPage({ params: { slug } }) {
  const product = await getProduct(slug);

  return (
    <div>
      <h1>{product.title}</h1>
      <div>
        <Image
          src={product.image}
          alt={product.title}
          width={500}
          height={500}
        />
      </div>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <Link href="/products">Back</Link>
    </div>
  );
}

export async function generateMetadata({ params: { slug } }) {
  const product = await getProduct(slug);

  return {
    title: product.title,
    description: product.description,
  };
}
