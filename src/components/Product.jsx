import products from "../../public/data/products.json"
import Link from "next/link"

export default function Product() {
  return (
    <main className="max-w-7xl mx-auto py-10 bg-base-200 my-6 rounded-2xl shadow-xl">
        <div className="p-2 rounded-2xl">
            <div className="text-center text-4xl font-bold py-7">
                <h2>Recent Products</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                
                {products.slice(0, 8).map((p) => (
                <div key={p.id} className="bg-base-100 rounded-2xl p-4">
                              <img
                src={p.image || "/placeholder.jpg"}
                alt={p.name}
                className="rounded-md h-40 w-full object-cover"
              />
                    <h2 className="text-lg font-bold">{p.name}</h2>
                    <p className="text-sm text-gray-600">{p.short_description}</p>
                    <div className="mt-2 font-medium">${p.price}</div>
                    <Link href={`/products/${p.id}`} className="btn bg-green-400 text-white rounded-full px-5 py-2 my-2">Details</Link>
                </div>
                ))}
            </div>
        </div>
    </main>
  )
}
