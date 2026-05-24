// 'use client';

// import { motion } from 'framer-motion';
// import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';

// const Contact = () => {
//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const formData = new FormData(e.currentTarget);
//     const name = formData.get('name');
//     const email = formData.get('email');
//     const message = formData.get('message');

//     // Using mailto to send email via client
//     window.location.href = `mailto:mdrakibhasan12112@gmail.com?subject=Message from ${name}&body=From: ${name} (${email})%0D%0A%0D%0A${message}`;
//   };

//   return (
//     <section className="py-24 bg-background" id="contact">
//       <div className="max-w-7xl mx-auto px-6 md:px-12">
//         <div className="text-center space-y-4 mb-16">
//           <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">
//             Get In <span className="text-primary">Touch</span>
//           </h2>
//           <div className="w-20 h-1 bg-primary mx-auto"></div>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-16">
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             className="space-y-10"
//           >
//             <p className="text-on-surface-variant text-lg">
//               I'm always open to discussing new projects, creative ideas or
//               opportunities to be part of your visions.
//             </p>

//             <div className="space-y-6">
//               {[
//                 {
//                   icon: <FiMail />,
//                   label: 'Email',
//                   value: 'mdrakibhasan12112@gmail.com',
//                 },
//                 { icon: <FiPhone />, label: 'Phone', value: '01845252695' },
//                 {
//                   icon: <FiMapPin />,
//                   label: 'Address',
//                   value: 'Rangpur Sadar',
//                 },
//               ].map((item, i) => (
//                 <div key={i} className="flex items-center gap-6 group">
//                   <div className="w-14 h-14 rounded-2xl bg-surface-container flex items-center justify-center text-primary text-xl border border-border group-hover:border-primary/50 transition-all shadow-xl">
//                     {item.icon}
//                   </div>
//                   <div>
//                     <h4 className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">
//                       {item.label}
//                     </h4>
//                     <p className="text-on-surface font-medium text-lg break-all">
//                       {item.value}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </motion.div>

//           <motion.form
//             onSubmit={handleSubmit}
//             initial={{ opacity: 0, x: 20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             className="space-y-6 bg-surface-container p-8 md:p-12 rounded-[2rem] border border-border shadow-2xl"
//           >
//             <div className="grid md:grid-cols-2 gap-6">
//               <input
//                 name="name"
//                 type="text"
//                 placeholder="Name"
//                 required
//                 className="w-full bg-background border border-border rounded-2xl px-6 py-4 text-on-surface placeholder:text-on-surface-variant focus:border-primary outline-none transition-all"
//               />
//               <input
//                 name="email"
//                 type="email"
//                 placeholder="Email"
//                 required
//                 className="w-full bg-background border border-border rounded-2xl px-6 py-4 text-on-surface placeholder:text-on-surface-variant focus:border-primary outline-none transition-all"
//               />
//             </div>
//             <textarea
//               name="message"
//               placeholder="Message"
//               required
//               rows={5}
//               className="w-full bg-background border border-border rounded-2xl px-6 py-4 text-on-surface placeholder:text-on-surface-variant focus:border-primary outline-none transition-all"
//             ></textarea>
//             <button
//               type="submit"
//               className="w-full py-5 bg-gradient-to-r from-primary to-secondary text-white rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:brightness-110 transition-all active:scale-[0.98]"
//             >
//               Send Message
//               <FiSend size={20} />
//             </button>
//           </motion.form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

'use client';

import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formRef.current) return;

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      );

      setSubmitted(true);
      formRef.current.reset(); // ফর্ম খালি করে দেয়
    } catch (error) {
      console.error(error);
      alert('Failed to send message. Please try again!');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-background" id="contact">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <p className="text-on-surface-variant text-lg">
              I'm always open to discussing new projects, creative ideas or
              opportunities to be part of your visions.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: <FiMail />,
                  label: 'Email',
                  value: 'mdrakibhasan12112@gmail.com',
                },
                { icon: <FiPhone />, label: 'Phone', value: '01845252695' },
                {
                  icon: <FiMapPin />,
                  label: 'Address',
                  value: 'Rangpur Sadar',
                },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-surface-container flex items-center justify-center text-primary text-xl border border-border group-hover:border-primary/50 transition-all shadow-xl">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">
                      {item.label}
                    </h4>
                    <p className="text-on-surface font-medium text-lg break-all">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 bg-surface-container p-8 md:p-12 rounded-[2rem] border border-border shadow-2xl"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                required
                className="w-full bg-background border border-border rounded-2xl px-6 py-4 text-on-surface placeholder:text-on-surface-variant focus:border-primary outline-none transition-all"
              />
              <input
                name="email"
                type="email"
                placeholder="Your Email"
                required
                className="w-full bg-background border border-border rounded-2xl px-6 py-4 text-on-surface placeholder:text-on-surface-variant focus:border-primary outline-none transition-all"
              />
            </div>

            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows={5}
              className="w-full bg-background border border-border rounded-2xl px-6 py-4 text-on-surface placeholder:text-on-surface-variant focus:border-primary outline-none transition-all resize-y"
            ></textarea>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-5 bg-gradient-to-r from-primary to-secondary text-white rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:brightness-110 transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending Message...' : 'Send Message'}
              <FiSend size={20} />
            </button>

            {submitted && (
              <p className="text-green-500 text-center font-medium mt-4">
                ✅ Thank you! Your message has been sent successfully.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
