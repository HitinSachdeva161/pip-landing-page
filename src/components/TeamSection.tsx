import React, { useState } from "react";
import teamIllustration from "../assets/Hero/Pipo_Shy.png";

export const TeamSection = (): JSX.Element => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "7460c56e-5202-402d-a503-4957dc55d205", 
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: "New Contact Form Submission from PIP Website",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitStatus("idle"), 5000);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="contact" 
      className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8 md:gap-16 py-12 md:py-20 px-6 md:px-12 relative self-stretch w-full"
      style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}
    >
      {/* Left side - Illustration */}
      <div className="flex flex-col items-center justify-start gap-4 md:gap-6 w-full md:w-auto md:max-w-[400px]">
        <h2 className="[font-family:'Roboto-Medium',Helvetica] font-medium text-[#393152] text-[32px] md:text-[40px] text-center tracking-[0] leading-[42px] md:leading-[60px]">
          Send us a message
        </h2>

        <div className="flex items-center justify-center w-[180px] h-[220px] md:w-[280px] md:h-[320px]">
          <img
            className="w-full h-full object-contain"
            alt="PIP character illustration"
            src={teamIllustration}
          />
        </div>
      </div>

      {/* Right side - Form */}
      <form className="flex flex-col items-stretch gap-4 w-full max-w-[500px]" onSubmit={handleSubmit}>
        <div className="flex flex-col items-start gap-2 w-full">
          <label
            htmlFor="name"
            className="[font-family:'Roboto-Medium',Helvetica] font-medium text-black text-[14px] md:text-[15px] tracking-[0] leading-[20px]"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full h-[46px] md:h-[50px] px-4 py-2.5 bg-[#fafafa] rounded-[18px] md:rounded-[20px] border border-solid border-[#b0b0b0] [font-family:'Roboto-Regular',Helvetica] font-normal text-black text-[14px] md:text-[15px] tracking-[0] leading-[normal] outline-none focus:border-[#453b55] focus:ring-1 focus:ring-[#453b55] transition-colors"
            aria-label="Name"
          />
        </div>

        <div className="flex flex-col items-start gap-2 w-full">
          <label
            htmlFor="email"
            className="[font-family:'Roboto-Medium',Helvetica] font-medium text-black text-[14px] md:text-[15px] tracking-[0] leading-[20px]"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full h-[46px] md:h-[50px] px-4 py-2.5 bg-[#fafafa] rounded-[18px] md:rounded-[20px] border border-solid border-[#b0b0b0] [font-family:'Roboto-Regular',Helvetica] font-normal text-black text-[14px] md:text-[15px] tracking-[0] leading-[normal] outline-none focus:border-[#453b55] focus:ring-1 focus:ring-[#453b55] transition-colors"
            aria-label="Email"
          />
        </div>

        <div className="flex flex-col items-start gap-2 w-full">
          <label
            htmlFor="message"
            className="[font-family:'Roboto-Medium',Helvetica] font-medium text-black text-[14px] md:text-[15px] tracking-[0] leading-[20px]"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className="w-full h-[140px] md:h-[170px] px-4 py-3 bg-[#fafafa] rounded-[18px] md:rounded-[22px] border border-solid border-[#b0b0b0] [font-family:'Roboto-Regular',Helvetica] font-normal text-black text-[14px] md:text-[15px] tracking-[0] leading-[normal] resize-none outline-none focus:border-[#453b55] focus:ring-1 focus:ring-[#453b55] transition-colors"
            aria-label="Message"
          />
        </div>

        {/* Status Messages */}
        {submitStatus === "success" && (
          <div className="w-full p-4 bg-green-50 border border-green-200 rounded-[20px] text-green-800 text-sm [font-family:'Roboto-Regular',Helvetica]">
            Thank you! Your message has been sent successfully.
          </div>
        )}
        
        {submitStatus === "error" && (
          <div className="w-full p-4 bg-red-50 border border-red-200 rounded-[20px] text-red-800 text-sm [font-family:'Roboto-Regular',Helvetica]">
            Oops! Something went wrong. Please try again later.
          </div>
        )}

        <div className="flex justify-end w-full mt-1">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex min-w-[130px] h-[46px] md:h-[48px] items-center justify-center gap-2.5 px-7 md:px-8 py-3 bg-[#453b55] rounded-[100px] cursor-pointer hover:bg-[#5a4d6b] focus:outline-none focus:ring-2 focus:ring-[#453b55] focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Submit form"
          >
            <span className="[font-family:'Roboto-Medium',Helvetica] font-medium text-white text-[13px] md:text-[14px] text-center tracking-[0] leading-[normal]">
              {isSubmitting ? "Sending..." : "Submit"}
            </span>
          </button>
        </div>
      </form>
    </section>
  );
};
