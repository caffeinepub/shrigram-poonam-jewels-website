import { useState } from 'react';
import { useSubmitInquiry } from '../hooks/useQueries';
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

interface FormState {
  name: string;
  phone: string;
  city: string;
  message: string;
}

const initialForm: FormState = { name: '', phone: '', city: '', message: '' };

export default function WholesaleInquiry() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const { mutate, isPending, isError, error } = useSubmitInquiry();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.city || !form.message) return;
    mutate(
      { name: form.name, phone: form.phone, city: form.city, message: form.message },
      {
        onSuccess: () => {
          setSubmitted(true);
          setForm(initialForm);
        },
      }
    );
  };

  return (
    <section id="inquiry" className="py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Info */}
          <div>
            <p className="font-sans text-gold text-xs tracking-[0.35em] uppercase mb-4">
              Get In Touch
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl text-charcoal font-bold leading-tight mb-6">
              Wholesale{' '}
              <span className="gold-text-gradient">Inquiry</span>
            </h2>
            <div className="w-16 h-0.5 gold-gradient mb-8" />
            <p className="font-sans text-charcoal/70 text-base leading-relaxed mb-10">
              Are you a retailer, distributor, or jewellery shop owner looking for
              premium 1 gram and 2 gram gold jewellery at wholesale prices? Fill in
              the form and our team will get back to you promptly.
            </p>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-5 bg-white border border-gold/20">
                <div className="w-10 h-10 gold-gradient flex items-center justify-center shrink-0">
                  <span className="text-charcoal font-bold text-sm">📍</span>
                </div>
                <div>
                  <p className="font-sans text-charcoal font-medium text-sm">Location</p>
                  <p className="font-sans text-charcoal/65 text-sm mt-0.5">
                    Jamnagar, Gujarat, India
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-white border border-gold/20">
                <div className="w-10 h-10 gold-gradient flex items-center justify-center shrink-0">
                  <span className="text-charcoal font-bold text-sm">💎</span>
                </div>
                <div>
                  <p className="font-sans text-charcoal font-medium text-sm">Speciality</p>
                  <p className="font-sans text-charcoal/65 text-sm mt-0.5">
                    1 Gram &amp; 2 Gram Gold Jewellery — Retail &amp; Wholesale
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white border border-gold/20 p-8 sm:p-10 relative">
            {/* Corner ornaments */}
            <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-gold/40" />
            <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-gold/40" />
            <div className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-gold/40" />
            <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-gold/40" />

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle size={52} className="text-gold mb-5" />
                <h3 className="font-serif text-2xl text-charcoal font-bold mb-3">
                  Inquiry Received!
                </h3>
                <p className="font-sans text-charcoal/65 text-sm leading-relaxed max-w-xs">
                  Thank you for reaching out to Shrigram. Our team will contact you
                  shortly with the best wholesale offers.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 px-6 py-2.5 font-sans text-xs tracking-[0.2em] uppercase font-medium text-charcoal gold-gradient hover:opacity-90 transition-opacity"
                >
                  Submit Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="text-center mb-8">
                  <h3 className="font-serif text-xl text-charcoal font-semibold">
                    Send Us Your Inquiry
                  </h3>
                  <p className="font-sans text-charcoal/50 text-xs mt-1 tracking-wide">
                    All fields are required
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="name"
                      className="font-sans text-xs tracking-widest uppercase text-charcoal/70"
                    >
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="rounded-none border-gold/30 focus:border-gold focus-visible:ring-gold/30 font-sans text-sm bg-ivory/50"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="phone"
                      className="font-sans text-xs tracking-widest uppercase text-charcoal/70"
                    >
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      required
                      type="tel"
                      className="rounded-none border-gold/30 focus:border-gold focus-visible:ring-gold/30 font-sans text-sm bg-ivory/50"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label
                    htmlFor="city"
                    className="font-sans text-xs tracking-widest uppercase text-charcoal/70"
                  >
                    City
                  </Label>
                  <Input
                    id="city"
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    placeholder="Your city"
                    required
                    className="rounded-none border-gold/30 focus:border-gold focus-visible:ring-gold/30 font-sans text-sm bg-ivory/50"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label
                    htmlFor="message"
                    className="font-sans text-xs tracking-widest uppercase text-charcoal/70"
                  >
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements — quantity, type of jewellery, etc."
                    required
                    rows={4}
                    className="rounded-none border-gold/30 focus:border-gold focus-visible:ring-gold/30 font-sans text-sm bg-ivory/50 resize-none"
                  />
                </div>

                {isError && (
                  <div className="flex items-center gap-2 text-destructive text-sm">
                    <AlertCircle size={16} />
                    <span className="font-sans text-xs">
                      {error?.message || 'Something went wrong. Please try again.'}
                    </span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isPending}
                  className="w-full py-3.5 font-sans text-sm tracking-[0.2em] uppercase font-medium text-charcoal gold-gradient hover:opacity-90 disabled:opacity-60 transition-opacity duration-300 flex items-center justify-center gap-2"
                >
                  {isPending ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    'Submit Inquiry'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
