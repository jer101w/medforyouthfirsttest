import { motion } from "motion/react";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

export function Register() {
  const [formData, setFormData] = useState({
    studentName: "",
    gradeLevel: "",
    parentEmail: "",
    studentEmail: "",
    reason: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // TODO: Paste your Google Apps Script Webhook URL or Formspree URL here
      const WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbxwiJS-lBkrgSIQ6R0K2Z9AgZuPi8yJ37QjqOdVoPPKoIWG4nfa6KcNkL_yEgbd5xLeBQ/exec";

      if (WEBHOOK_URL) {
        await fetch(WEBHOOK_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
          mode: "no-cors", // Required for basic Google Apps Script webhooks without complex CORS setup
        });
      } else {
        // Simulated network request if no webhook URL is provided yet
        await new Promise((resolve) => setTimeout(resolve, 1500));
        console.log("Form Data pretending to go to Google Sheets:", formData);
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(
        "There was an error submitting your registration. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto min-h-[80vh]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-brand-100"
      >
        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12"
          >
            <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-brand-900 mb-4">
              Registration Received!
            </h2>
            <p className="text-slate-600 mb-8">
              Thank you for registering for Med for Youth. We've received your
              information and will be in touch shortly.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  studentName: "",
                  gradeLevel: "",
                  parentEmail: "",
                  studentEmail: "",
                  reason: "",
                });
              }}
              className="bg-brand-50 text-brand-700 font-bold px-8 py-3 rounded-xl hover:bg-brand-100 transition-colors"
            >
              Register Another Student
            </button>
          </motion.div>
        ) : (
          <>
            <div className="text-center mb-10">
              <div className="inline-block bg-brand-100 text-brand-700 font-bold px-4 py-1.5 rounded-full text-sm mb-4">
                100% Free Program
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-brand-900 mb-4">
                Register for the Workshop
              </h1>
              <p className="text-slate-600">
                Join our 8-week curriculum to build clinical literacy and learn
                how to deliver powerful advocacy speeches. It's completely free!
              </p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-brand-900 mb-2">
                    Student Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="studentName"
                    value={formData.studentName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors"
                    placeholder="Jane Doe"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-brand-900 mb-2">
                    Grade Level <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="gradeLevel"
                    value={formData.gradeLevel}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors bg-white"
                    required
                  >
                    <option value="">Select Grade</option>
                    <option value="5">5th Grade</option>
                    <option value="6">6th Grade</option>
                    <option value="7">7th Grade</option>
                    <option value="8">8th Grade</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-brand-900 mb-2">
                  Parent/Guardian Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="parentEmail"
                  value={formData.parentEmail}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors"
                  placeholder="parent@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-brand-900 mb-2">
                  Student Email (if applicable)
                </label>
                <input
                  type="email"
                  name="studentEmail"
                  value={formData.studentEmail}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors"
                  placeholder="student@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-brand-900 mb-2">
                  Why do you want to join Med for Youth?
                </label>
                <textarea
                  rows={4}
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors"
                  placeholder="Tell us briefly about your interest in healthcare or public speaking..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand-600 text-white font-bold py-4 rounded-xl hover:bg-brand-700 transition-colors shadow-lg shadow-brand-600/20 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  "Submit Registration"
                )}
              </button>
            </form>
          </>
        )}
      </motion.div>
    </div>
  );
}
