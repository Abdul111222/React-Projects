import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router";

const UserProfile = () => {
  const { id } = useParams();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`https://dummyjson.com/users/${id}`);
        setUser(res.data);
      } catch (err) {
        setError("Unable to load user.");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center text-2xl font-semibold">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-screen items-center justify-center text-red-500 text-xl">
        {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-6xl rounded-3xl bg-white shadow-xl">

        {/* Header */}
        <div className="flex flex-col items-center gap-4 border-b p-8 md:flex-row">
          <img
            src={user.image}
            alt={user.firstName}
            className="h-32 w-32 rounded-full border-4 border-blue-500 object-cover"
          />

          <div>
            <h1 className="text-3xl font-bold">
              {user.firstName} {user.lastName}
            </h1>

            <p className="text-gray-500">
              @{user.username} • {user.role}
            </p>

            <p className="mt-2 text-lg">
              {user.company.title} at {user.company.name}
            </p>
          </div>
        </div>

        <div className="grid gap-8 p-8 md:grid-cols-2">

          {/* Personal */}
          <section className="rounded-2xl border p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-bold">Personal</h2>

            <Info label="Age" value={user.age} />
            <Info label="Gender" value={user.gender} />
            <Info label="Birth Date" value={user.birthDate} />
            <Info label="Blood Group" value={user.bloodGroup} />
            <Info label="Height" value={`${user.height} cm`} />
            <Info label="Weight" value={`${user.weight} kg`} />
            <Info label="Eye Color" value={user.eyeColor} />
            <Info
              label="Hair"
              value={`${user.hair.color}, ${user.hair.type}`}
            />
          </section>

          {/* Contact */}
          <section className="rounded-2xl border p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-bold">Contact</h2>

            <Info label="Email" value={user.email} />
            <Info label="Phone" value={user.phone} />
            <Info label="University" value={user.university} />

            <Info label="Street" value={user.address.address} />
            <Info label="City" value={user.address.city} />
            <Info label="State" value={user.address.state} />
            <Info label="Postal Code" value={user.address.postalCode} />
            <Info label="Country" value={user.address.country} />
          </section>

          {/* Company */}
          <section className="rounded-2xl border p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-bold">Company</h2>

            <Info label="Name" value={user.company.name} />
            <Info label="Department" value={user.company.department} />
            <Info label="Title" value={user.company.title} />

            <Info
              label="Location"
              value={`${user.company.address.city}, ${user.company.address.country}`}
            />
          </section>

          {/* Bank & Crypto */}
          <section className="rounded-2xl border p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-bold">Bank</h2>

            <Info label="Card Type" value={user.bank.cardType} />
            <Info label="Card Number" value={user.bank.cardNumber} />
            <Info label="Expires" value={user.bank.cardExpire} />
            <Info label="Currency" value={user.bank.currency} />
            <Info label="IBAN" value={user.bank.iban} />

            <hr className="my-6" />

            <h2 className="mb-4 text-xl font-bold">Crypto</h2>

            <Info label="Coin" value={user.crypto.coin} />
            <Info label="Network" value={user.crypto.network} />
            <Info label="Wallet" value={user.crypto.wallet} />
          </section>
        </div>

        <div className="p-8">
          <Link
            to="/dashboard"
            className="rounded-lg bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700"
          >
            ← Back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

const Info = ({ label, value }) => (
  <div className="mb-3 flex justify-between border-b pb-2">
    <span className="font-medium text-gray-500">{label}</span>
    <span className="text-right font-semibold">{value}</span>
  </div>
);

export default UserProfile;