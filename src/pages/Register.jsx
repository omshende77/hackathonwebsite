import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, addDoc, doc, getDoc } from "firebase/firestore";
import Confetti from "react-confetti";
import { useNavigate, Link } from "react-router-dom";
import { serverTimestamp } from "firebase/firestore";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Register() {
  const navigate = useNavigate();
  const [agree, setAgree] = useState(false);
  const [registrationOpen, setRegistrationOpen] = useState(true);
  const [copied, setCopied] = useState(false);

  const [teamName, setTeamName] = useState("");
  const [track, setTrack] = useState("AI & Machine Learning");

  const [members, setMembers] = useState([
    { name: "", email: "", phone: "", college: "", role: "Leader" },
    { name: "", email: "", phone: "", college: "", role: "Member" },
  ]);

  const [showSuccess, setShowSuccess] = useState(false);
  const [generatedId, setGeneratedId] = useState("");

  useEffect(() => {
    AOS.init({ duration: 800, once: true });

    const fetchConfig = async () => {
      const docRef = doc(db, "settings", "eventConfig");
      const snapshot = await getDoc(docRef);
      if (snapshot.exists()) {
        setRegistrationOpen(snapshot.data().registrationOpen);
      }
    };

    fetchConfig();
  }, []);

  const addMember = () => {
    if (members.length < 4) {
      setMembers([
        ...members,
        { name: "", email: "", phone: "", college: "", role: "Member" },
      ]);
    }
  };

  const removeMember = (index) => {
    if (members.length > 2) {
      const updated = members.filter((_, i) => i !== index);
      setMembers(updated);
    }
  };

  const handleMemberChange = (index, field, value) => {
    const updated = [...members];
    updated[index][field] = value;
    setMembers(updated);
  };

  const saveRegistration = async () => {
    const registrationId = "SGI-" + Date.now().toString().slice(-6);

    await addDoc(collection(db, "registrations"), {
      teamName,
      theme: track,
      members,
      registrationId,
      paymentStatus: "Paid",
      round1Status: "Pending",
      finalStatus: "Not Started",
      createdAt: serverTimestamp(),
    });

    setGeneratedId(registrationId);
    setShowSuccess(true);
  };

  const handlePayment = async () => {
    if (!agree) {
      alert("Please accept the declaration before proceeding.");
      return;
    }
    if (!teamName) {
      alert("Please enter team name");
      return;
    }

    for (let member of members) {
      if (!member.name || !member.email || !member.phone || !member.college) {
        alert("Please fill all member details");
        return;
      }
    }

    const response = await fetch("http://localhost:5000/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: 1000 }),
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
          saveRegistration();
        } else {
          alert("Payment verification failed");
        }
      },
      theme: { color: "#06b6d4" },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="min-h-screen bg-black text-white pt-28 pb-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div data-aos="fade-down" className="text-center">
          <h1 className="text-3xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            Hackathon Registration
          </h1>
          <p className="text-gray-400 mt-4 text-sm sm:text-base">
            Team of 2–4 members | Registration Fee ₹1000
          </p>
        </div>

        {registrationOpen ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handlePayment();
            }}
            data-aos="fade-up"
            className="mt-12 bg-white/5 backdrop-blur-xl p-6 sm:p-10 rounded-3xl border border-white/10 space-y-8"
          >
            {/* Team Name */}
            <input
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              placeholder="Team Name"
              className="w-full px-4 py-3 rounded-xl 
              bg-black/60 text-white placeholder-gray-400
              border border-white/20
              focus:outline-none focus:border-cyan-400 
              focus:ring-2 focus:ring-cyan-400/40 transition"
            />

            {/* Members */}
            {members.map((member, index) => (
              <div
                key={index}
                className="p-5 sm:p-6 rounded-2xl bg-black/50 border border-white/10 space-y-4"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-base sm:text-lg font-semibold text-cyan-400">
                    {member.role} {index >= 2 && `(Member ${index + 1})`}
                  </h3>

                  {index >= 2 && (
                    <button
                      type="button"
                      onClick={() => removeMember(index)}
                      className="text-red-400 text-sm hover:text-red-500"
                    >
                      Remove
                    </button>
                  )}
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {["name", "email", "phone", "college"].map((field, i) => (
                    <input
                      key={i}
                      type={
                        field === "email"
                          ? "email"
                          : field === "phone"
                            ? "tel"
                            : "text"
                      }
                      placeholder={
                        field === "name"
                          ? "Full Name"
                          : field === "email"
                            ? "Email"
                            : field === "phone"
                              ? "Phone"
                              : "College Name"
                      }
                      value={member[field]}
                      onChange={(e) =>
                        handleMemberChange(index, field, e.target.value)
                      }
                      className="w-full px-4 py-3 rounded-xl 
                      bg-black/60 text-white placeholder-gray-400
                      border border-white/20
                      focus:outline-none focus:border-cyan-400 
                      focus:ring-2 focus:ring-cyan-400/40 transition"
                    />
                  ))}
                </div>
              </div>
            ))}

            {members.length < 4 && (
              <button
                type="button"
                onClick={addMember}
                className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-xl font-semibold transition"
              >
                + Add Member
              </button>
            )}

            {/* Track */}
            <select
              value={track}
              onChange={(e) => setTrack(e.target.value)}
              className="w-full px-4 py-3 rounded-xl 
              bg-black/60 text-white
              border border-white/20
              focus:outline-none focus:border-cyan-400 
              focus:ring-2 focus:ring-cyan-400/40 transition"
            >
              <option className="bg-black">
                AGRITECH REVOLUTION – Smart Farming & Food Innovation
              </option>
              <option className="bg-black">
                NEXT-GEN HEALTHTECH – Digital Care & Smart Diagnosis
              </option>
              <option className="bg-black">
                GREENTECH & CLIMATE ACTION – Sustainable Innovation
              </option>
              <option className="bg-black">
                WOMEN SAFETY & EMPOWERMENT TECH – Secure & Empower
              </option>
              <option className="bg-black">
                MINDTECH – Mental Wellness Innovation
              </option>
            </select>

            <div className="flex items-start gap-3 text-sm text-gray-300">
              <input
                type="checkbox"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                className="mt-1 accent-cyan-500"
              />
              <p>
                I confirm that all details are correct and agree to the
                hackathon rules.
              </p>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 font-semibold hover:scale-[1.02] transition"
            >
              Proceed to Payment
            </button>
          </form>
        ) : (
          <div className="text-center text-red-400 text-xl mt-10">
            🚫 Registration is currently closed.
          </div>
        )}

        {/* SUCCESS MODAL — UNTOUCHED */}
        {showSuccess && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 px-6">
            <Confetti
              numberOfPieces={400}
              recycle={false}
              gravity={0.5}
              initialVelocityY={20}
              tweenDuration={3000}
            />
            <div className="bg-white/10 backdrop-blur-xl p-8 sm:p-10 rounded-3xl border border-white/20 text-center max-w-md w-full">
              <div className="text-5xl mb-4">🎉</div>
              <h2 className="text-2xl font-bold">Registration Successful!</h2>
              <p className="text-gray-400 mt-4">Your Registration ID:</p>
              <p className="text-cyan-400 font-bold text-xl mt-2 font-mono">
                {generatedId}
              </p>

              <div className="mt-6 space-y-3">
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(generatedId);
                    setCopied(true);

                    setTimeout(() => {
                      setCopied(false);
                    }, 2000);
                  }}
                  className={`w-full px-6 py-3 rounded-xl transition font-semibold ${
                    copied
                      ? "bg-green-600 text-white"
                      : "bg-cyan-600 hover:bg-cyan-700 text-white"
                  }`}
                >
                  {copied ? "Copied ✓" : "Copy Registration ID"}
                </button>

                <Link
                  to="/check-status"
                  className="w-full inline-flex items-center justify-center 
  px-6 py-3 rounded-xl 
  bg-white/5 border border-cyan-400/30 
  text-cyan-400 font-medium 
  transition duration-300 
  hover:bg-cyan-500/10 
  hover:border-cyan-400 
  hover:shadow-[0_0_20px_rgba(0,255,255,0.4)] 
  hover:scale-[1.02]"
                >
                  Check Status →
                </Link>

                <button
                  onClick={() => navigate("/")}
                  className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600"
                >
                  Back to Homepage
                </button>

                <button
                  onClick={() => {
                    setShowSuccess(false);
                    setTeamName("");
                    setMembers([
                      {
                        name: "",
                        email: "",
                        phone: "",
                        college: "",
                        role: "Leader",
                      },
                      {
                        name: "",
                        email: "",
                        phone: "",
                        college: "",
                        role: "Member",
                      },
                    ]);
                  }}
                  className="w-full px-6 py-3 rounded-xl bg-gray-700 hover:bg-gray-600 transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
