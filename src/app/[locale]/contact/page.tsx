import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact with us',
  description: ' ',
};

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Contact</h1>
      <article className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-1 p-6">
            <h2 className="text-2xl font-semibold mb-4">
Contact mail            </h2>
            <p className="text-gray-700 mb-4">
newbotsforall@gmail.com            </p>
            <p className="text-sm text-gray-500">From: Barcelona</p>
          </div>
          <div className="md:flex-1">
            <Image
              src="/barcelona.jpg"
              alt="AI Language Model Visualization"
              width={400}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </article>
    </div>
  );
}

