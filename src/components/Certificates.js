import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const certificates = [
  "certi1.jpg",
  "certi2.jpg",
  "certi3.jpg",
  "certi4.jpg",
  "certi5.jpg",
];

const Certificates = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [confirmImage, setConfirmImage] = useState(null);

  return (
    <section
      id="certificates"
      className="min-h-[70vh] px-4 sm:px-6 py-10 sm:py-12 bg-[#0f172a] flex flex-col items-center"
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-blue-400 text-center">
        🏆 Certificates
      </h1>

      {/* Certificates */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {certificates.map((certi, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer bg-white border-2 border-blue-400 rounded-xl overflow-hidden"
            onClick={() => setConfirmImage(certi)}
          >
            <img
              src={`/${certi}`}
              alt="Certificate"
              className="w-full h-44 sm:h-52 md:h-56 object-cover"
            />
          </motion.div>
        ))}
      </div>

      {/* CONFIRMATION POPUP */}
      <AnimatePresence>
        {confirmImage && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-xl p-5 sm:p-6 text-center max-w-sm w-full"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
            >
              <h2 className="text-lg sm:text-xl font-bold mb-4 text-blue-900">
                Open Certificate?
              </h2>

              <p className="text-gray-600 text-sm sm:text-base mb-6">
                Do you want to view this certificate clearly?
              </p>

              <div className="flex justify-center gap-4">
                <button
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 text-sm sm:text-base"
                  onClick={() => setConfirmImage(null)}
                >
                  Cancel
                </button>

                <button
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm sm:text-base"
                  onClick={() => {
                    setSelectedImage(confirmImage);
                    setConfirmImage(null);
                  }}
                >
                  Open
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CERTIFICATE VIEW POPUP */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4"
            onClick={() => setSelectedImage(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.img
              src={`/${selectedImage}`}
              alt="Certificate View"
              className="w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl rounded-lg"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;
