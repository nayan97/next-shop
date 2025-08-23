import React from "react";

const page = () => {
  return (
    <div class="max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow-lg">
      <h2 class="text-2xl font-bold mb-6 text-gray-800">Add New Product</h2>

      <form action="/api/products" method="POST" class="space-y-4">
        <div>
          <label class="block text-gray-700">Product Name</label>
          <input
            type="text"
            name="name"
            class="w-full border p-2 rounded-lg"
            required
          />
        </div>

        <div>
          <label class="block text-gray-700">Short Description</label>
          <input
            type="text"
            name="short_description"
            class="w-full border p-2 rounded-lg"
            required
          />
        </div>

        <div>
          <label class="block text-gray-700">Description</label>
          <textarea
            name="description"
            rows="5"
            class="w-full border p-2 rounded-lg"
            required
          ></textarea>
        </div>

        <div>
          <label class="block text-gray-700">Image URL</label>
          <input
            type="url"
            name="image"
            class="w-full border p-2 rounded-lg"
            required
          />
        </div>

        <div>
          <label class="block text-gray-700">Price ($)</label>
          <input
            type="number"
            name="price"
            class="w-full border p-2 rounded-lg"
            required
          />
        </div>

        <button
          type="submit"
          class="w-full bg-green-400 text-white py-2 rounded-lg hover:text-black transition"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default page;
