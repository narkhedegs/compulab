import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Computer Security",
  description: "Computer Security is a critical aspect of modern technology.",
};

export default function Page() {
  return (
    <main className="flex flex-col h-[calc(100vh_-_theme(spacing.16))]">
      <div className="flex-1 overflow-auto p-4 sm:p-6 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Computer Security</h1>
        <p>
          Computer security is a critical aspect of modern technology. With the
          increasing reliance on computers and the internet, protecting
          sensitive information and preventing unauthorized access has become
          more important than ever.
        </p>
        <p>
          One of the key components of computer security is encryption.
          Encryption involves encoding data in such a way that only authorized
          parties can access and understand it. This helps to ensure the
          confidentiality and integrity of data, making it extremely difficult
          for hackers to intercept and decipher sensitive information.
        </p>
        <p>
          Another important aspect of computer security is authentication.
          Authentication mechanisms verify the identity of users and ensure that
          only authorized individuals can access certain resources or perform
          specific actions. This can involve the use of passwords, biometrics,
          or other forms of identification to establish trust and prevent
          unauthorized access.
        </p>
      </div>
    </main>
  );
}
