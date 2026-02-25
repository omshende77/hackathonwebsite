import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import Confetti from "react-confetti";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    teamName: "",
    leaderName: "",
    email: "",
    phone: "",
    college: "",
    track: "AI & Machine Learning",
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [generatedId, setGeneratedId] = useState("");

  const saveRegistration = async () => {
    const registrationId = "SGI-" + Date.now().toString().slice(-6);

    await addDoc(collection(db, "registrations"), {
      ...formData,
      status: "Pending",
      registrationId,
      paymentStatus: "Paid",
    });

    setGeneratedId(registrationId);
    setShowSuccess(true);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePayment = async () => {
    if (
      !formData.teamName ||
      !formData.leaderName ||
      !formData.email ||
      !formData.phone ||
      !formData.college
    ) {
      alert("Please fill all fields");
      return;
    }
    const response = await fetch("http://localhost:5000/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: 1 }), // change later
    });

    const order = await response.json();

    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: "INR",
      name: "SGI Hackathon 2026",
      description: "Registration Fee",
      order_id: order.id,
      handler: async function (response) {
        const verify = await fetch("http://localhost:5000/verify-payment", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(response),
        });

        const result = await verify.json();

        if (result.success) {
          // NOW save to Firestore
          saveRegistration();
        } else {
          alert("Payment verification failed");
        }
      },
      theme: {
        color: "#06b6d4",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };
  return (
    <div className="relative min-h-screen bg-black text-white pt-28 pb-28 overflow-hidden">
      <div className="relative max-w-3xl mx-auto px-6">
        <h1
          className="text-5xl font-extrabold text-center 
        bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 py-4"
        >
          Hackathon Registration
        </h1>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handlePayment();
          }}
          className="mt-14 bg-white/5 backdrop-blur-xl p-10 rounded-3xl 
          border border-white/10 shadow-[0_0_40px_rgba(0,255,255,0.2)] space-y-6"
        >
          {/* Team Name */}
          <div>
            <label className="block text-sm text-gray-300">Team Name</label>
            <input
              name="teamName"
              value={formData.teamName}
              onChange={handleChange}
              type="text"
              className="mt-2 w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10
              focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40"
            />
          </div>

          {/* Leader Name */}
          <div>
            <label className="block text-sm text-gray-300">
              Team Leader Name
            </label>
            <input
              name="leaderName"
              value={formData.leaderName}
              onChange={handleChange}
              type="text"
              className="mt-2 w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10
              focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm text-gray-300">Email</label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              className="mt-2 w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10
              focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm text-gray-300">Phone</label>
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              type="tel"
              className="mt-2 w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10
              focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40"
            />
          </div>

          {/* College */}
          <div>
            <label className="block text-sm text-gray-300">College</label>
            <input
              name="college"
              value={formData.college}
              onChange={handleChange}
              type="text"
              className="mt-2 w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10
              focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40"
            />
          </div>

          {/* Track */}
          <div>
            <label className="block text-sm text-gray-300">Track</label>
            <select
              name="track"
              value={formData.track}
              onChange={handleChange}
              className="mt-2 w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10
              focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40"
            >
              <option className="bg-black">AI & Machine Learning</option>
              <option className="bg-black">Web & App Development</option>
              <option className="bg-black">Cybersecurity</option>
              <option className="bg-black">Open Innovation</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full mt-6 py-4 rounded-2xl font-semibold text-lg
            bg-gradient-to-r from-cyan-500 to-blue-600
            hover:scale-105 transition duration-300"
          >
            Proceed to Payment
          </button>
        </form>
        {showSuccess && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
            <Confetti numberOfPieces={200} recycle={false} />

            <div className="bg-white/10 backdrop-blur-xl p-10 rounded-3xl border border-white/20 text-center max-w-md w-full animate-fadeIn">
              <div className="text-5xl mb-4">🎉</div>

              <h2 className="text-2xl font-bold text-white">
                Registration Successful!
              </h2>

              <p className="text-gray-400 mt-4">Your Registration ID:</p>

              <p className="text-cyan-400 font-bold text-xl mt-2">
                {generatedId}
              </p>

              <p className="text-gray-500 mt-4 text-sm">
                A confirmation email has been sent.
              </p>

              <div className="mt-6 flex gap-4 justify-center">
                <button
                  onClick={() => setShowSuccess(false)}
                  className="px-6 py-3 rounded-xl bg-gray-700 hover:bg-gray-600 transition"
                >
                  Close
                </button>

                <button
                  onClick={() => navigate("/")}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 transition"
                >
                  Back to Homepage
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
