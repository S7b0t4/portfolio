import Image from "next/image";

export default function Person() {
	return (
	  <div className="flex gap-4">
      <Image
        src="/avatar.svg"
        width={100}
        height={150}
        alt="Avatar"
        className="avatar"
      />
      <div>
        <p className="person_name">
          Paun Anton
        </p>
        <p className="person_subtitle text-center">
          WEB dev
        </p>
        <p className="title">
          hello, world
        </p>
      </div>
    </div>
  );
}

