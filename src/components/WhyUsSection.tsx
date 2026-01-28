import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  GraduationCap, 
  UserCheck, 
  ClipboardCheck, 
  Users, 
  Target,
  TrendingUp 
} from "lucide-react";

const reasons = [
  {
    icon: GraduationCap,
    title: "Experienced IIT/Medical Faculty",
    description: "Learn from teachers who have mentored 500+ successful selections",
  },
  {
    icon: UserCheck,
    title: "Personal Mentoring System",
    description: "One-on-one guidance for every student's academic journey",
  },
  {
    icon: ClipboardCheck,
    title: "Regular Tests & Tracking",
    description: "Weekly assessments with detailed performance analytics",
  },
  {
    icon: Users,
    title: "Parent-Teacher Meetings",
    description: "Regular updates and collaborative progress discussions",
  },
  {
    icon: Target,
    title: "Result-Oriented Teaching",
    description: "Proven methodology with consistent top ranks every year",
  },
  {
    icon: TrendingUp,
    title: "Competitive Environment",
    description: "Study alongside motivated peers in a success-driven atmosphere",
  },
];

const WhyUsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-us" className="section-padding bg-background" ref={ref}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Our Advantage
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
              Why Choose Sri Skanda Academy?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We combine traditional teaching values with modern methodologies
              to create an environment where every student can excel and achieve
              their dreams.
            </p>

            {/* Feature Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-3 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <reason.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {reason.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Teaching Methods */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="p-8 rounded-2xl bg-primary text-primary-foreground">
              <h3 className="font-heading text-2xl font-bold mb-6">
                Our Teaching Method
              </h3>
              
              <div className="space-y-4">
                {[
                  "Concept-based learning approach",
                  "Daily practice sessions",
                  "Weekly assessments & analysis",
                  "Dedicated doubt-clearing sessions",
                  "Exam-oriented preparation",
                  "Smart study techniques",
                ].map((method, index) => (
                  <motion.div
                    key={method}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold text-accent-foreground">
                        {index + 1}
                      </span>
                    </div>
                    <span className="text-primary-foreground/90">{method}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-accent/20 -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 rounded-xl bg-secondary -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
