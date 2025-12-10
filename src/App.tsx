import React, { FC } from "react";
import "./App.css"; // Assuming App.css for base styles
import VideoDemo from "./components/VideoDemo";
import Footer from "./components/Footer";
import { NuvraBadge } from './components/NuvraBadge';
const App: React.FC = () => {
  const theme = {
    font: "font-sans",
    radius: "rounded-lg",
    shadow: "shadow-xl",
    palette: {
      primary: "#4F46E5",
      secondary: "#6366F1",
      accent: "#EC4899",
      neutral: "#F3F4F6",
      success: "#10B981",
      warning: "#F59E0B",
      error: "#EF4444"
    },
    gradient_from: "from-indigo-500",
    gradient_to: "to-purple-600",
    section_y: "py-16 md:py-24"
  };
  const sections = [
    {
      "type": "hero",
      "headline": "Unlock Your Potential with Our Innovative Solutions",
      "sub": "Streamline your workflow, boost productivity, and achieve your goals faster than ever before. Join thousands of satisfied users today!",
      "cta_text": "Get Started Now",
      "image_url": "https://images.unsplash.com/photo-1519389950473-47ba0cfaee1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
    },
    {
      "type": "features",
      "items": [
        {
          "title": "Seamless Integration",
          "desc": "Our platform integrates effortlessly with your existing tools, ensuring a smooth transition and enhanced efficiency."
        },
        {
          "title": "Robust Security",
          "desc": "We prioritize your data's safety with industry-leading encryption and robust security protocols."
        },
        {
          "title": "Intuitive Interface",
          "desc": "Designed for simplicity, our user-friendly interface makes complex tasks feel easy and enjoyable."
        },
        {
          "title": "24/7 Support",
          "desc": "Our dedicated support team is always available to assist you, ensuring uninterrupted productivity."
        }
      ]
    },
    {
      "type": "faq",
      "items": [
        {
          "q": "What is your pricing model?",
          "a": "We offer a flexible subscription model with various tiers to fit individual and business needs. Please check our pricing section for details."
        },
        {
          "q": "Is there a free trial available?",
          "a": "Yes, we offer a 14-day free trial so you can experience all the features before committing."
        },
        {
          "q": "How can I contact support?",
          "a": "You can reach our support team via email, live chat, or phone, 24/7. Details are available on our contact page."
        }
      ]
    }
  ];
  return (
  <>
    <NuvraBadge />
    <div className={`${theme.font} antialiased text-gray-800`}>
      {/* Header/Nav (optional, can be a component) */}
      {sections.map((section, index) => {
        switch (section.type) {
          case "hero":
            return (
              <section key={index} className={`relative overflow-hidden bg-gradient-to-br ${theme.gradient_from} ${theme.gradient_to} text-white ${theme.section_y}`}>
                <div className="container mx-auto px-4 text-center relative z-10">
                  <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">{section.headline}</h1>
                  <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto opacity-90">{section.sub}</p>
                  {section.cta_text && (
                    <button className={`bg-white text-indigo-700 hover:bg-indigo-50 hover:text-indigo-800 transition duration-300 py-3 px-8 ${theme.radius} font-semibold text-lg ${theme.shadow}`}>
                      {section.cta_text}
                    </button>
                  )}
                </div>
                {section.image_url && (
                  <div className="absolute inset-0 z-0 opacity-20">
                    <img
                      src={section.image_url}
                      alt={section.headline}
                      className="w-full h-full object-cover"
                      width="1920"
                      height="1080"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                )}
              </section>
            );
          case "features":
            return (
              <section key={index} className={`bg-gray-50 ${theme.section_y}`}>
                <div className="container mx-auto px-4 text-center">
                  <h2 className="text-3xl md:text-4xl font-extrabold mb-12">Key Features</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {section.items.map((item, itemIndex) => (
                      <div key={itemIndex} className={`bg-white p-8 ${theme.radius} ${theme.shadow} flex flex-col items-center text-center`}>
                        {/* Placeholder for icon, consider inline SVG if specific icon needed */}
                        <div className="text-primary mb-4 w-12 h-12 flex items-center justify-center bg-indigo-100 rounded-full">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 text-indigo-600">
                             <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.035-.259a3.375 3.375 0 002.456-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423L17.25 15l-.394 1.183a2.25 2.25 0 001.423 1.423L19.5 18.75l-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                           </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            );
          case "faq":
            return (
              <section key={index} className={`bg-white ${theme.section_y}`}>
                <div className="container mx-auto px-4 max-w-3xl">
                  <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    {section.items.map((item, itemIndex) => (
                      <details key={itemIndex} className={`bg-gray-50 p-6 ${theme.radius} ${theme.shadow} cursor-pointer`}>
                        <summary className="text-lg font-semibold text-gray-900 flex justify-between items-center">
                          {item.q}
                          <svg className="ml-2 w-5 h-5 transition-transform duration-200 transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                          </svg>
                        </summary>
                        <p className="mt-4 text-gray-700 leading-relaxed">{item.a}</p>
                      </details>
                    ))}
                  </div>
                </div>
              </section>
            );
          default:
            return null;
        }
      })}
      <VideoDemo />
      <Footer />
    </div>
  
  </>
);
};
export default App;