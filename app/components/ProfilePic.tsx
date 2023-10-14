import Image from "next/image";
import profile from "@/public/images/profile.jpg";

export default function ProfilePic() {
  return (
    <section className="w-full mx-auto">
      <Image
        className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8 aspect-square"
        src={profile}
        width={200}
        height={150}
        alt="Dvnkx"
        priority={true}
      />
    </section>
  );
}
