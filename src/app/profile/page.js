"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { redirect } from "next/navigation";

export default function ProfilePage() {
  const session = useSession();
  const { status } = session;

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
                width={250}
                height={250}
              ></Image>
              <button type="button">Editar</button>
            </div>
          </div>
          <div className="grow">
            <input type="text" placeholder="Primer y segundo nombre" />
            <button type="submit">Guardar</button>
          </div>
        </div>
      </form>
    </section>
  );
}
