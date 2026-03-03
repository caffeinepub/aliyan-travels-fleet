import {
  AlertCircle,
  Calendar,
  Car,
  CheckCircle2,
  Clock,
  Fuel,
  IndianRupee,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  TrendingUp,
  User,
  X,
} from "lucide-react";
import { AnimatePresence, type Variants, motion } from "motion/react";
import { useRef, useState } from "react";

/* ─── Types ────────────────────────────────────────────────────────────── */
interface FormState {
  name: string;
  phone: string;
  address: string;
}

/* ─── Job Benefits Data ────────────────────────────────────────────────── */
const jobBenefits = [
  {
    icon: Car,
    label: "Vehicle",
    value: "Suzuki Wagon R (Uber platform)",
    description:
      "Drive a reliable, fuel-efficient Wagon R on the Uber platform in Pune.",
  },
  {
    icon: Clock,
    label: "Shifts",
    value: "12 AM–12 PM or 12 PM–12 AM",
    description: "Two 12-hour shift options — choose what fits your lifestyle.",
  },
  {
    icon: IndianRupee,
    label: "Daily Target",
    value: "₹2,500 Base Target",
    description:
      "Base target easily achievable in just 7–8 hours within a 12-hour shift.",
  },
  {
    icon: Fuel,
    label: "Overtime",
    value: "100% Yours After Target",
    description:
      "Hit your target early? Keep every rupee of additional earnings. You cover fuel for overtime.",
  },
  {
    icon: IndianRupee,
    label: "Salary",
    value: "₹20,000/month + Accommodation",
    description:
      "Starting salary of ₹20,000 with free accommodation provided. Food not included.",
  },
  {
    icon: TrendingUp,
    label: "Bonus",
    value: "15% Raise After 3 Months",
    description:
      "Honest work and consistent target-meeting earns you a 15% salary increase after 3 months.",
  },
  {
    icon: Calendar,
    label: "Time Off",
    value: "4 Days Off / Month",
    description: "Take 4 flexible days off every month — you choose the dates.",
  },
];

const requirements = [
  {
    id: "license",
    icon: ShieldCheck,
    text: "Valid Driving License",
    detail: "Must hold a valid light motor vehicle (LMV) driving license.",
  },
  {
    id: "skills",
    icon: Car,
    text: "Excellent & Safe Driving Skills",
    detail: "Skilled, safe driver comfortable in Pune city traffic.",
  },
  {
    id: "behavior",
    icon: User,
    text: "Professional Behavior",
    detail:
      "Courteous, punctual, and professionally conduct yourself with customers.",
  },
  {
    id: "location",
    icon: MapPin,
    text: "Ready to Drive in Pune",
    detail: "Must be available and willing to drive within Pune city.",
  },
];

/* ─── Animations ───────────────────────────────────────────────────────── */
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

/* ─── Header ────────────────────────────────────────────────────────────── */
function Header({ onApplyClick }: { onApplyClick: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      data-ocid="header.nav"
      className="sticky top-0 z-50 bg-navy/90 backdrop-blur shadow-navy-md"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 select-none">
            <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center flex-shrink-0">
              <Car className="w-4 h-4 text-navy" />
            </div>
            <span className="font-display font-bold text-lg text-gold leading-tight tracking-tight">
              Aliyan Travels Fleet
            </span>
          </div>

          {/* Desktop nav */}
          <nav className="hidden sm:flex items-center gap-6">
            <a
              href="#benefits"
              className="text-white/80 hover:text-gold transition-colors text-sm font-medium"
            >
              Benefits
            </a>
            <a
              href="#requirements"
              className="text-white/80 hover:text-gold transition-colors text-sm font-medium"
            >
              Requirements
            </a>
            <button
              type="button"
              data-ocid="nav.apply_button"
              onClick={onApplyClick}
              className="tap-target bg-gold hover:bg-gold-light text-navy font-bold text-sm px-5 py-2 rounded-lg transition-all duration-200 shadow-gold-glow hover:shadow-none active:scale-95"
            >
              Apply Now
            </button>
          </nav>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="sm:hidden text-white p-2 tap-target"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile nav dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="sm:hidden overflow-hidden border-t border-white/20"
            >
              <div className="py-3 flex flex-col gap-1">
                <button
                  type="button"
                  onClick={() => {
                    setMenuOpen(false);
                    window.location.href = "#benefits";
                  }}
                  className="text-white/80 hover:text-gold px-2 py-3 text-base font-medium tap-target flex items-center text-left"
                >
                  Benefits
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setMenuOpen(false);
                    window.location.href = "#requirements";
                  }}
                  className="text-white/80 hover:text-gold px-2 py-3 text-base font-medium tap-target flex items-center text-left"
                >
                  Requirements
                </button>
                <button
                  type="button"
                  data-ocid="nav.apply_button"
                  onClick={() => {
                    setMenuOpen(false);
                    onApplyClick();
                  }}
                  className="mt-2 mb-3 tap-target bg-gold hover:bg-gold-light text-navy font-bold text-base px-5 py-3 rounded-lg transition-all duration-200 w-full active:scale-95"
                >
                  Apply Now
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

/* ─── Hero ──────────────────────────────────────────────────────────────── */
function HeroSection({ onApplyClick }: { onApplyClick: () => void }) {
  return (
    <section
      data-ocid="hero.section"
      className="relative overflow-hidden min-h-[480px] sm:min-h-[560px] flex items-center"
    >
      {/* Bottom border accent */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gold"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >
          {/* Badge */}
          <motion.div variants={fadeInUp} className="mb-5">
            <span className="inline-flex items-center gap-2 bg-gold/20 text-gold border border-gold/40 rounded-full px-4 py-1.5 text-sm font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              Now Hiring — Pune
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeInUp}
            className="font-display font-bold text-white text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight mb-4"
          >
            Premium Driver Opportunities in{" "}
            <span className="text-gold">Pune</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeInUp}
            className="text-white/80 text-lg sm:text-xl leading-relaxed mb-8 max-w-xl"
          >
            Join our elite Suzuki Wagon R fleet on the Uber platform. Excellent
            earnings, flexible time-off, and accommodation provided.
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-3"
          >
            <button
              type="button"
              data-ocid="hero.apply_button"
              onClick={onApplyClick}
              className="tap-target bg-gold hover:bg-gold-light text-navy font-bold text-lg px-8 py-4 rounded-xl transition-all duration-200 shadow-gold-glow hover:shadow-none active:scale-95 w-full sm:w-auto text-center"
            >
              Apply Now — It's Free
            </button>
            <a
              href="#benefits"
              className="tap-target bg-white/10 hover:bg-white/20 border border-white/25 text-white font-semibold text-base px-8 py-4 rounded-xl transition-all duration-200 active:scale-95 w-full sm:w-auto text-center flex items-center justify-center"
            >
              See Benefits
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={fadeInUp}
            className="mt-10 flex flex-wrap gap-6 text-white/70 text-sm"
          >
            <div className="flex items-center gap-2">
              <IndianRupee className="w-4 h-4 text-gold" />
              <span>₹20,000 starting salary</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-gold" />
              <span>Flexible shifts</span>
            </div>
            <div className="flex items-center gap-2">
              <Car className="w-4 h-4 text-gold" />
              <span>Suzuki Wagon R</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Job Benefits ──────────────────────────────────────────────────────── */
function JobBenefitsSection() {
  return (
    <section
      data-ocid="jobs.section"
      id="benefits"
      className="py-16 sm:py-20 bg-white/10 backdrop-blur-sm"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <span className="text-gold font-semibold text-sm uppercase tracking-widest">
              Why Join Us
            </span>
            <h2 className="font-display font-bold text-white text-3xl sm:text-4xl mt-2">
              Job Benefits & Perks
            </h2>
            <p className="text-white/65 mt-3 max-w-xl mx-auto text-base sm:text-lg">
              We believe in fair pay, flexibility, and real growth for every
              driver on our fleet.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {jobBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.label}
                  variants={fadeInUp}
                  data-ocid={`jobs.card.${index + 1}`}
                  className="group bg-white/12 backdrop-blur border border-white/20 text-white shadow-lg rounded-xl p-5 sm:p-6 hover:-translate-y-0.5 transition-all duration-250"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-navy flex items-center justify-center shadow-navy-sm">
                      <Icon className="w-5 h-5 text-gold" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-widest text-white/55 mb-0.5">
                        {benefit.label}
                      </p>
                      <p className="font-display font-bold text-white text-base leading-tight mb-1.5">
                        {benefit.value}
                      </p>
                      <p className="text-white/65 text-sm leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Requirements ──────────────────────────────────────────────────────── */
function RequirementsSection() {
  return (
    <section
      data-ocid="requirements.section"
      id="requirements"
      className="py-16 sm:py-20 bg-transparent"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div variants={fadeInUp} className="text-center mb-10">
            <span className="text-gold font-semibold text-sm uppercase tracking-widest">
              Eligibility
            </span>
            <h2 className="font-display font-bold text-white text-3xl sm:text-4xl mt-2">
              What We're Looking For
            </h2>
            <p className="text-white/65 mt-3 max-w-lg mx-auto text-base sm:text-lg">
              We keep requirements simple — if you can drive safely and
              professionally, you're welcome to apply.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {requirements.map((req, index) => {
              const Icon = req.icon;
              return (
                <motion.div
                  key={req.id}
                  variants={fadeInUp}
                  data-ocid={`requirements.item.${index + 1}`}
                  className="bg-white/12 backdrop-blur border border-white/20 rounded-xl p-5 sm:p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-gold flex items-center justify-center">
                      <Icon className="w-5 h-5 text-navy" />
                    </div>
                    <div>
                      <p className="font-display font-bold text-white text-base mb-1">
                        {req.text}
                      </p>
                      <p className="text-white/60 text-sm leading-relaxed">
                        {req.detail}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Divider callout */}
          <motion.div
            variants={fadeInUp}
            className="mt-10 text-center border-t border-white/15 pt-8"
          >
            <p className="text-white/50 text-sm">
              No experience with Uber? No problem. We'll guide you through the
              onboarding process.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Apply Form ────────────────────────────────────────────────────────── */
function ApplySection({
  sectionRef,
}: { sectionRef: React.RefObject<HTMLElement | null> }) {
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    address: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  function handleChange(field: keyof FormState) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };
  }

  // Handle form submission result by checking for redirect (Formspree redirects on success)
  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    const form = e.currentTarget;
    const nameVal = (
      form.elements.namedItem("Name") as HTMLInputElement
    )?.value?.trim();
    const phoneVal = (
      form.elements.namedItem("Phone") as HTMLInputElement
    )?.value?.trim();
    const addressVal = (
      form.elements.namedItem("Address") as HTMLTextAreaElement
    )?.value?.trim();

    if (!nameVal || !phoneVal || !addressVal) {
      e.preventDefault();
      setSubmitError(true);
      return;
    }
    setSubmitError(false);
    // Let native form submission proceed to Formspree
  }

  if (submitted) {
    return (
      <section
        data-ocid="apply.section"
        id="apply"
        ref={sectionRef as React.RefObject<HTMLElement>}
        className="py-16 sm:py-20 bg-transparent"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="max-w-xl mx-auto">
            <motion.div
              data-ocid="apply.success_state"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white/15 backdrop-blur-md border border-white/25 rounded-2xl shadow-xl p-8 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-display font-bold text-white text-xl mb-2">
                Application Submitted!
              </h3>
              <p className="text-white/70 text-base">
                We'll contact you soon. Thank you for your interest in Aliyan
                Travels Fleet!
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-6 tap-target text-gold font-semibold text-sm underline underline-offset-2 hover:text-gold-light transition-colors"
              >
                Submit another application
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      data-ocid="apply.section"
      id="apply"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-16 sm:py-20 bg-transparent"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="text-center mb-10">
            <span className="text-gold font-semibold text-sm uppercase tracking-widest">
              Join Our Fleet
            </span>
            <h2 className="font-display font-bold text-white text-3xl sm:text-4xl mt-2">
              Apply to Drive
            </h2>
            <p className="text-white/65 mt-3 text-base sm:text-lg">
              Fill out the form below and our team will reach out to you
              shortly.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="bg-white/15 backdrop-blur-md border border-white/25 rounded-2xl shadow-xl p-6 sm:p-8"
          >
            <form
              action="https://formspree.io/f/xkovlrpn"
              method="POST"
              onSubmit={handleFormSubmit}
              className="space-y-5"
            >
              {/* Name */}
              <div className="space-y-1.5">
                <label
                  htmlFor="apply-name"
                  className="text-white font-semibold text-sm flex items-center gap-1.5"
                >
                  <User className="w-3.5 h-3.5 text-gold" />
                  Full Name <span className="text-red-400">*</span>
                </label>
                <input
                  id="apply-name"
                  data-ocid="apply.name_input"
                  type="text"
                  name="Name"
                  placeholder="Your Full Name"
                  autoComplete="name"
                  value={form.name}
                  onChange={handleChange("name")}
                  required
                  className="w-full tap-target text-base px-4 py-3 rounded-lg bg-white/90 text-gray-900 placeholder-gray-500 border border-white/30 focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold transition-all"
                />
              </div>

              {/* Phone */}
              <div className="space-y-1.5">
                <label
                  htmlFor="apply-phone"
                  className="text-white font-semibold text-sm flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-gold" />
                  Phone Number <span className="text-red-400">*</span>
                </label>
                <input
                  id="apply-phone"
                  data-ocid="apply.phone_input"
                  type="tel"
                  name="Phone"
                  placeholder="Your Mobile Number"
                  autoComplete="tel"
                  inputMode="tel"
                  value={form.phone}
                  onChange={handleChange("phone")}
                  required
                  className="w-full tap-target text-base px-4 py-3 rounded-lg bg-white/90 text-gray-900 placeholder-gray-500 border border-white/30 focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold transition-all"
                />
              </div>

              {/* Address */}
              <div className="space-y-1.5">
                <label
                  htmlFor="apply-address"
                  className="text-white font-semibold text-sm flex items-center gap-1.5"
                >
                  <MapPin className="w-3.5 h-3.5 text-gold" />
                  Address <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="apply-address"
                  data-ocid="apply.address_input"
                  name="Address"
                  placeholder="Your Address in Pune"
                  autoComplete="street-address"
                  value={form.address}
                  onChange={handleChange("address")}
                  required
                  rows={3}
                  className="w-full text-base px-4 py-3 rounded-lg bg-white/90 text-gray-900 placeholder-gray-500 border border-white/30 focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold transition-all resize-none min-h-[96px]"
                />
              </div>

              {/* Error State */}
              <AnimatePresence>
                {submitError && (
                  <motion.div
                    data-ocid="apply.error_state"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="flex items-start gap-3 bg-red-500/20 border border-red-400/40 text-red-300 rounded-lg px-4 py-3 text-sm"
                  >
                    <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>Please fill in all fields before submitting.</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit */}
              <button
                type="submit"
                data-ocid="apply.submit_button"
                className="w-full tap-target bg-gold hover:bg-gold-light text-navy font-bold text-base py-4 px-6 rounded-xl transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 shadow-gold-glow hover:shadow-none"
              >
                Submit Application
              </button>

              <p className="text-xs text-white/45 text-center">
                By submitting, you agree to be contacted by Aliyan Travels Fleet
                regarding this application.
              </p>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Footer ────────────────────────────────────────────────────────────── */
function Footer() {
  const hostname = window.location.hostname;
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer
      data-ocid="footer.section"
      className="bg-navy/90 backdrop-blur border-t-2 border-gold py-10"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Top row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-8">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center">
              <Car className="w-4 h-4 text-navy" />
            </div>
            <span className="font-display font-bold text-gold text-lg">
              Aliyan Travels Fleet
            </span>
          </div>

          {/* Contact */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-white/70 text-sm">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-gold flex-shrink-0" />
              <span>
                Founder:{" "}
                <span className="text-white font-semibold">Aliyan</span>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-gold flex-shrink-0" />
              <a
                href="mailto:aliyan.mirza8090@gmail.com"
                className="text-white hover:text-gold transition-colors break-all"
              >
                aliyan.mirza8090@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/15 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-white/40 text-xs">
          <p>© 2026 Aliyan Travels Fleet. All rights reserved.</p>
          <p>
            Built with ♥ using{" "}
            <a
              href={caffeineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors underline underline-offset-2"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ─── App ────────────────────────────────────────────────────────────────── */
export default function App() {
  const applyRef = useRef<HTMLElement | null>(null);

  function scrollToApply() {
    applyRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className="min-h-screen flex flex-col font-body">
      <Header onApplyClick={scrollToApply} />
      <main className="flex-1">
        <HeroSection onApplyClick={scrollToApply} />
        <JobBenefitsSection />
        <RequirementsSection />
        <ApplySection sectionRef={applyRef} />
      </main>
      <Footer />
    </div>
  );
}
