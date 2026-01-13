import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useRef } from "react";
import { toast } from "react-toastify";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jj5oxpu",
        "template_yetwuuu",
        form.current,
        "71D9_GKq3ofJIpr41"
      )
      .then(
        () => {
          toast.success("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          toast.error("❌ Failed to send message. Try again!");
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen px-4 sm:px-6 md:px-8 py-16 sm:py-20 bg-[#0f172a] flex flex-col items-center"
    >
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center text-blue-400"
      >
        📬 Contact Me
      </motion.h1>

      {/* Subtext */}
      <p className="max-w-xl text-center text-sm sm:text-base text-white mb-10 sm:mb-12 px-2">
        Feel free to reach out for collaborations, questions, or just a friendly hello!
      </p>

      <div className="flex flex-col md:flex-row gap-8 sm:gap-10 md:gap-12 max-w-5xl w-full">
        
        {/* FORM */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="w-full md:flex-1 bg-white/10 backdrop-blur-md rounded-xl shadow-xl p-5 sm:p-6 md:p-8 flex flex-col gap-5 sm:gap-6 border border-blue-400"
        >
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
            className="p-3 rounded-md bg-white/20 text-white placeholder-white focus:ring-2 focus:ring-blue-400 outline-none text-sm sm:text-base"
          />

          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
            className="p-3 rounded-md bg-white/20 text-white placeholder-white focus:ring-2 focus:ring-blue-400 outline-none text-sm sm:text-base"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            required
            className="p-3 rounded-md bg-white/20 text-white placeholder-white resize-none focus:ring-2 focus:ring-blue-400 outline-none text-sm sm:text-base"
          />

          <button
            type="submit"
            className="bg-blue-500 text-white py-3 rounded-md font-semibold hover:bg-blue-600 transition text-sm sm:text-base"
          >
            Send Message
          </button>
        </form>

        {/* CONTACT INFO */}
        <div className="w-full md:flex-1 flex flex-col gap-4 sm:gap-6 text-white">
          <a
            href="mailto:dharniha9@gmail.com"
            className="bg-white/10 p-4 rounded-xl border border-blue-400 text-sm sm:text-base"
          >
            📧 dharniha9@gmail.com
          </a>

          <a
            href="https://www.linkedin.com/in/dharniha-s-2b7541325/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 p-4 rounded-xl border border-blue-400 text-sm sm:text-base"
          >
            🔗 LinkedIn Profile
          </a>

          <a
            href="https://github.com/dharnihaa"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 p-4 rounded-xl border border-blue-400 text-sm sm:text-base"
          >
            🐙 GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
