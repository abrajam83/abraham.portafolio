import React, { useState, useEffect } from "react";

const Contacto = ({ isOpen, onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    setIsSubmitted(true);
    setIsSubmitting(true);

    const formAction = "https://formsubmit.co/d20abdaebc9f24d94f5f66ca340348eb";
    const formData = new FormData(form);

    fetch(formAction, {
      method: "POST",
      body: formData,
    })
      .catch((error) => console.error("Error al enviar el formulario", error))
      .finally(() => {
        setTimeout(() => onClose(), 3000);
      });
  };

  useEffect(() => {
    if (isOpen) {
      setIsSubmitted(false);
      setIsSubmitting(false);
    }
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-96 relative">
            {/* Botón de cierre (X) */}
            <button
              onClick={onClose}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-lg"
            >
              ✕
            </button>

            {!isSubmitted ? (
              <>
                <h2 className="text-2xl font-semibold mb-4">Escríbeme</h2>
                <form method="POST" onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Nombre"
                      required
                      className="w-full border p-3 rounded-md"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="email"
                      name="email"
                      placeholder="Correo"
                      required
                      className="w-full border p-3 rounded-md"
                    />
                  </div>
                  <div className="mb-4">
                    <textarea
                      name="message"
                      placeholder="Mensaje"
                      required
                      className="w-full border p-3 rounded-md"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-black text-white py-2 rounded-md"
                  >
                    Enviar
                  </button>
                </form>
              </>
            ) : (
              <>
                <h2 className="text-lg font-semibold">¡Gracias por tu mensaje!</h2>
                <p>Te responderé lo antes posible.</p>
                <button
                  onClick={onClose}
                  className="mt-4 bg-black text-white px-4 py-2 rounded-sm"
                >
                  Cerrar
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Contacto;
