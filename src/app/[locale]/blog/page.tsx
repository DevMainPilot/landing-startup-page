import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | AI News',
  description: 'Latest news and updates in the world of Artificial Intelligence',
};

export default function BlogPost() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>
      <article className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-1 p-6">
            <h2 className="text-2xl font-semibold mb-4">
              OpenAI Introduces GPT-4 Turbo: A Leap Forward in AI Language Models
            </h2>
            <p className="text-gray-700 mb-4">
              OpenAI has recently unveiled GPT-4 Turbo, the latest iteration of their groundbreaking language model. This new version boasts significant improvements in performance, efficiency, and capabilities. GPT-4 Turbo demonstrates enhanced understanding of context, improved factual accuracy, and the ability to handle more complex tasks. With a larger context window and more up-to-date knowledge, it promises to revolutionize various applications, from content creation to advanced problem-solving in fields like science and technology.
            </p>
            <p className="text-sm text-gray-500">Author:</p>
          </div>
          <div className="md:flex-1">
            <Image
              src="/image_landing_page_startup.png"
              alt="AI Language Model Visualization"
              width={200}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </article>

      <article className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-1 p-6">
            <h2 className="text-2xl font-semibold mb-4">
              AI News & Artificial Intelligence
            </h2>
            <p className="text-gray-700 mb-4">
                    TechCrunch has reported that AI is transforming software development. According to experts, by 2025, engineers at any level will be able to create an AI app through the widespread availability of APIs and models. The key differentiators will be consistency, usability, and customer impact.

                    The Linux Foundation has also released its "Census III" open-source report, highlighting the growth of AI technologies, particularly generative AI. This evolution complements developers' best qualities – creativity and innovation – and challenges them to grow into leadership roles within their organizations.

                    Key Takeaways:

                    AI is revolutionizing software development, making it more accessible to engineers at all levels.
                    Consistency, usability, and customer impact will be the key differentiators in creating successful AI apps.
                    Generative AI and open-source technologies are driving growth and innovation in the field.            </p>
            <p className="text-sm text-gray-500">Author: </p>
          </div>

        </div>
      </article>
    </div>


  );
}

