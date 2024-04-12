"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useState } from "react";

export default function ProfilePage() {
  const session = useSession();
  const [userName, setUsrName] = useState(session?.data?.user?.name || "");
  const { status } = session;

  async function handleProfileInfoUpdate(ev) {
    ev.preventDefault();
    const response = await fetch('/ap/profile', {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({name:userName}),
    })
  }

  if (status === "loading") {
    return "Loading...";
  }

  // if (status === 'unauthenticated') {
  //   return redirect('/login');
  // }

  const userImage = session.data?.user.image;

  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl mb-4">Perfil</h1>
      <form className="max-w-md mx-auto">
        <div className="flex gap-2 items-center">
          <div>
            <div className="p-2 rounded-lg relative">
              <Image
                className="rounded-lg h-full w-full mb-1"
                src={"/pizza.png"}
                width={100}
                height={100}
              ></Image>
              <button type="button">Editar</button>
            </div>
          </div>
          <form className="grow" onSubmit={handleProfileInfoUpdate}>
            <input
              type="text"
              placeholder="Primer y segundo nombre"
              value={userName}
              onChange={(ev) => setUsrName(ev.target.value)}
            />
            <input
              type="email"
              disabled={true}
              value={session.data?.user.email}
            />
            <button type="submit">Guardar</button>
          </form>
        </div>
      </form>
    </section>
  );
}
