import { QuantitySelector, Title } from "@/components";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

export default function () {
  //TODO: Apply redirect next/navigation 
  //In case you have not made any purchase
  //redirect('/empty') //FIXME:
  //Return never
  //It will never be rendered
  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <Title title="Cart" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Cart */}
          <div className="flex flex-col mt-5">
            <span className="text-xl">Add More Product Items</span>
            <Link href="/" className="underline mb-5">
              Please continue shopping!
            </Link>

            {/* Items */}
            {productsInCart.map((product) => (
              <div key={product.slug} className="flex mb-5">
                <Image
                  src={`/products/${product.images[0]}`}
                  alt={product.title}
                  width={125}
                  height={100}
                  // style={{
                  //   width: '100px',
                  //   height: '100px'
                  // }}
                  className="mr-5 rounded h-fit w-fit"
                />

                <div>
                  <p className="text-xl">{product.title}</p>
                  <p className="font-semibold">${product.price}</p>
                  <QuantitySelector quantity={3} />

                  <button className="underline mt-3">Remove</button>
                </div>
              </div>
            ))}
          </div>

          {/* CheckOut */}
          <div className="bg-white rounded-xl shadow-xl p-7 h-fit">
            <h2 className="text-2xl mb-2">Order Details</h2>

            <div className="grid grid-cols-2">
              <span> Product Numbers</span>
              <span className="text-right">3 articles</span>

              <span>Subtotal</span>
              <span className="text-right">$100</span>

              <span>Tax: (15%)</span>
              <span className="text-right">$100</span>

              <span className="mt-5 text-2xl">Total:</span>
              <span className="mt-5 text-2xl text-right">$100</span>
            </div>
            <div className="mt-5 mb-2 w-full">
              <Link 
                className="flex btn-primary justify-center"
                href="/checkout/address"
              >
                Checkout
              </Link>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}
