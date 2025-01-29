import { QuantitySelector, Title } from "@/components";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import Link from "next/link";

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

export default function () {
  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <Title title="Order Verify" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Cart */}
          <div className="flex flex-col mt-5">
            <span className="text-xl">Edit Shopping Cart Items</span>
            <Link href="/cart" className="underline mb-5">
              Modify Cart Here!
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
                  <p className="font-semibold">${product.price} X 3</p>
                  
                  <p className="font-semibold">Subtotal: ${product.price * 3}</p>
                  <button className="underline mt-3">Remove</button>
                </div>
              </div>
            ))}
          </div>

          {/* CheckOut */}
          <div className="bg-white rounded-xl shadow-xl p-7 h-fit">
            
            <h2 className="text-2xl mb-2">
              Delivery Address
            </h2>
            <div className="mb-10">
              <p>Fullname: <span className="text-xl font-semibold">Mark Zuckerberg</span></p>
              <p>Address: Palo Alto, California 545</p>
              <p>City: Los Angeles</p>
              <p>State: California</p>
              <p>USA</p>
              <p>ZIP: 94020</p>
              <p>Phone: +1 999-753-159</p>
            </div>

            {/* line divider */}
            <div className="w-full h-0.5 rounded bg-gray-200 mb-10"/>
            
            
           
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

              {/* Disclaimer */}

              <p className="mb-5">
                <span className="text-xs">
                By clicking place order, you agree to our <a href="#" className="underline">terms and conditions</a> of use, <a href="#" className="underline">privacy policy</a>
              </span>
              </p>


              <Link 
                className="flex btn-primary justify-center"
                href="/orders/123"
              >
                Order Place
              </Link>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}
