import { useState } from "react";

export default function RadharaniKitchenWebsite() { const [page, setPage] = useState("home");

return ( <div className="min-h-screen bg-orange-50 text-gray-800"> {/* Navbar */} <nav className="bg-green-900 text-white px-6 py-4 shadow-lg sticky top-0 z-50"> <div className="max-w-7xl mx-auto flex justify-between items-center"> <div className="flex items-center gap-3"> <img
src="https://i.ibb.co/8DqvKQ4/radharani-logo.png"
alt="Radharani Kitchen Logo"
className="w-14 h-14 rounded-full object-cover border-2 border-yellow-300"
/> <h1 className="text-2xl font-bold tracking-wide"> Radharani Kitchen </h1> </div>

<div className="flex gap-3 md:gap-6 text-sm md:text-lg font-medium">
        <button onClick={() => setPage("home")} className="hover:text-yellow-300 transition">
          Home
        </button>
        <button onClick={() => setPage("menu")} className="hover:text-yellow-300 transition">
          Menu
        </button>
        <button onClick={() => setPage("contact")} className="hover:text-yellow-300 transition">
          Contact
        </button>
      </div>
    </div>
  </nav>

  {/* HOME PAGE */}
  {page === "home" && (
    <div>
      <section className="bg-gradient-to-r from-green-900 to-green-700 text-white py-24 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center justify-center mb-6">
            <img
              src="https://i.ibb.co/8DqvKQ4/radharani-logo.png"
              alt="Radharani Kitchen Logo"
              className="w-40 h-40 rounded-full object-cover border-4 border-yellow-300 shadow-2xl mb-6"
            />

            <h1 className="text-5xl md:text-7xl font-bold mb-2">
              Radharani Kitchen
            </h1>
          </div>

          <p className="text-2xl md:text-3xl mb-4 text-yellow-200">
            Pure Food. Pure Love.
          </p>

          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-gray-100 mb-8">
            Fresh homemade sattvik prasadam prepared with devotion, hygiene, and pure ingredients — completely without onion & garlic.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/917735847966"
              className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-2xl text-lg font-bold shadow-lg transition"
            >
              Order on WhatsApp
            </a>

            <button
              onClick={() => setPage("menu")}
              className="bg-white text-green-900 px-8 py-4 rounded-2xl text-lg font-semibold shadow-lg"
            >
              Explore Menu
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-orange-50 rounded-3xl p-8 shadow-md text-center">
            <div className="text-5xl mb-4">🌿</div>
            <h3 className="text-2xl font-bold text-green-800 mb-3">
              Without Onion & Garlic
            </h3>
            <p className="text-gray-600">
              Completely sattvik and pure vegetarian food.
            </p>
          </div>

          <div className="bg-orange-50 rounded-3xl p-8 shadow-md text-center">
            <div className="text-5xl mb-4">🍱</div>
            <h3 className="text-2xl font-bold text-green-800 mb-3">
              Fresh Homemade Meals
            </h3>
            <p className="text-gray-600">
              Hygienic food prepared fresh every day.
            </p>
          </div>

          <div className="bg-orange-50 rounded-3xl p-8 shadow-md text-center">
            <div className="text-5xl mb-4">🚆</div>
            <h3 className="text-2xl font-bold text-green-800 mb-3">
              Rail Prasadam Service
            </h3>
            <p className="text-gray-600">
              Delivery available at Rourkela Railway Station.
            </p>
          </div>
        </div>
      </section>
    </div>
  )}

  {/* MENU PAGE */
  {page === "menu" && (
    <section className="py-16 px-6 bg-orange-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-green-800 mb-12">
          Complete Menu
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h3 className="text-3xl font-bold text-orange-600 mb-5">Breakfast</h3>
            <div className="space-y-2 text-lg">
              <p>Upma with Sambar — ₹70</p>
              <p>Roti (4 pcs) with Seasonal Veg Fry — ₹80</p>
              <p>Idli (5 pcs) with Sambar & Chutney — ₹80</p>
              <p>Aloo Paratha (2 pcs) — ₹90</p>
              <p>Gobi Paratha (2 pcs) — ₹90</p>
              <p>Muli Paratha (2 pcs) — ₹90</p>
              <p>Poori with Aloo Sabji — ₹90</p>
              <p>Poori with Chole Sabji — ₹90</p>
              <p>Paneer Paratha — ₹120</p>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h3 className="text-3xl font-bold text-green-700 mb-5">Lunch / Dinner</h3>
            <div className="space-y-2 text-lg">
              <p>Bhendi Fry — ₹80</p>
              <p>Baigan Bharta — ₹70</p>
              <p>Khichdi with Papad & Pickle — ₹100</p>
              <p>Aloo Soyabean Sabji — ₹120</p>
              <p>Aloo Gobi Matar — ₹130</p>
              <p>Mix Veg — ₹140</p>
              <p>Paneer Butter Masala — ₹160</p>
              <p>Matar Paneer — ₹160</p>
              <p>Paneer Capsicum Masala — ₹170</p>
              <p>Paneer Bharta — ₹170</p>
              <p>Special Veg Thali — ₹160</p>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h3 className="text-3xl font-bold text-purple-700 mb-5">Roti & Paratha</h3>
            <div className="space-y-2 text-lg">
              <p>Tawa Roti — ₹7</p>
              <p>Butter Roti — ₹10</p>
              <p>Plain Paratha — ₹12</p>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h3 className="text-3xl font-bold text-blue-700 mb-5">Rice</h3>
            <div className="space-y-2 text-lg">
              <p>Steam Rice — ₹40</p>
              <p>Jeera Rice — ₹70</p>
              <p>Curd Rice — ₹80</p>
              <p>Lemon Rice — ₹100</p>
              <p>Veg Fried Rice — ₹100</p>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h3 className="text-3xl font-bold text-red-600 mb-5">Chinese / Indo-Chinese</h3>
            <div className="space-y-2 text-lg">
              <p>Veg Chowmein — ₹80</p>
              <p>Veg Manchurian — ₹80</p>
              <p>Potato Chilly — ₹80</p>
              <p>Channa Chilly — ₹140</p>
              <p>Soyabean Chilly — ₹140</p>
              <p>Paneer Chilly — ₹160</p>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h3 className="text-3xl font-bold text-pink-600 mb-5">Sweets</h3>
            <div className="space-y-2 text-lg">
              <p>Suji Halwa — ₹50</p>
              <p>Atta Halwa — ₹60</p>
              <p>Rice Kheer — ₹80</p>
              <p>Chhena Kheer — ₹100</p>
              <p>Suji Kakara — ₹10</p>
              <p>Atta Kakara — ₹10</p>
              <p>Monda Pitha — ₹10</p>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-yellow-100 border-2 border-yellow-400 rounded-3xl p-10 text-center shadow-lg">
          <h3 className="text-4xl font-bold text-green-800 mb-4">
            Ekadashi Prasad Available
          </h3>
          <p className="text-xl text-gray-700 leading-relaxed">
            Special Ekadashi sattvik prasadam prepared with devotion and purity. Advance booking available for Ekadashi meals and rail prasadam delivery.
          </p>
        </div>
      </div>
    </section>
  )}

  {/* BILLING PAGE */}
  {page === "contact" && (
    <section className="py-20 px-6 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-green-800 mb-10">
          Billing & Order Confirmation
        </h2>

        <div className="bg-orange-50 rounded-3xl shadow-xl p-10 space-y-6">
          <div>
            <label className="block text-lg font-semibold mb-2">Customer Name</label>
            <input type="text" placeholder="Enter your name" className="w-full p-4 rounded-xl border border-gray-300" />
          </div>

          <div>
            <label className="block text-lg font-semibold mb-2">Phone Number</label>
            <input type="text" placeholder="Enter phone number" className="w-full p-4 rounded-xl border border-gray-300" />
          </div>

          <div>
            <label className="block text-lg font-semibold mb-2">Delivery Address</label>
            <textarea placeholder="Enter delivery address" className="w-full p-4 rounded-xl border border-gray-300 h-32"></textarea>
          </div>

          <div>
            <label className="block text-lg font-semibold mb-2">Select Delivery Type</label>
            <select className="w-full p-4 rounded-xl border border-gray-300">
              <option>Home Delivery</option>
              <option>Swiggy</option>
              <option>Zomato</option>
              <option>Rail Prasadam - Rourkela Railway Station</option>
            </select>
          </div>

          <div>
            <label className="block text-lg font-semibold mb-2">Order Details</label>
            <textarea placeholder="Write your order here" className="w-full p-4 rounded-xl border border-gray-300 h-32"></textarea>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md text-lg space-y-2">
            <p>📞 Contact: 7735847966</p>
            <p>📍 S/11 Sector 19 IGH Colony, Rourkela, Odisha - 769003</p>
            <p>⏰ Timing: 8:00 AM to 9:00 PM</p>
          </div>

          <a
            href="https://wa.me/917735847966"
            className="block text-center bg-green-800 hover:bg-green-900 text-white text-xl font-bold py-5 rounded-2xl shadow-lg"
          >
            Confirm Order on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )}

  /* CONTACT PAGE */}
  {page === "contact" && (
    <section className="py-20 px-6 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-green-800 mb-8">
          Contact Us
        </h2>

        <div className="bg-orange-50 rounded-3xl shadow-xl p-10 space-y-6 text-lg md:text-xl">
          <p>
            📞 WhatsApp / Contact: <strong>7735847966</strong>
          </p>

          <p>
            📍 Address: S/11 Sector 19 IGH Colony, Rourkela, Sundargarh, Odisha - 769003
          </p>

          <p>
            🚆 Rail Prasadam available at Rourkela Railway Station
          </p>

          <p>
            🛵 Delivery Available on Swiggy & Zomato
          </p>

          <p>
            ⏰ Timing: Morning 8:00 AM to Evening 9:00 PM
          </p>

          <a
            href="https://wa.me/917735847966"
            className="inline-block mt-6 bg-green-800 hover:bg-green-900 text-white px-10 py-4 rounded-2xl text-xl font-semibold shadow-lg"
          >
            Order Now on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )}
</div>

); }
