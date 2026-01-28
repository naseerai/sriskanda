import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Atom, Microscope, BookOpen, Award, Rocket } from "lucide-react";

const courses = [
  {
    icon: Atom,
    title: "Intermediate MPC",
    subtitle: "IIT-JEE Focus",
    description: "Mathematics, Physics, Chemistry with intensive JEE Main & Advanced preparation",
    features: ["JEE Main & Advanced", "Board Exam Excellence", "Olympiad Training"],
    popular: true,
  },
  {
    icon: Microscope,
    title: "Intermediate BiPC",
    subtitle: "NEET Focus",
    description: "Biology, Physics, Chemistry with dedicated NEET-UG exam preparation",
    features: ["NEET-UG Preparation", "AIIMS/JIPMER", "Board Toppers Program"],
    popular: true,
  },
  {
    icon: BookOpen,
    title: "Board Excellence",
    subtitle: "State & CBSE",
    description: "Focused preparation for Board exams with guaranteed results",
    features: ["State Board", "CBSE Board", "ISC Board"],
    popular: false,
  },
  {
    icon: Award,
    title: "EAMCET Special",
    subtitle: "Engineering & Medical",
    description: "Specialized coaching for AP & TS EAMCET examinations",
    features: ["AP EAMCET", "TS EAMCET", "Rank Improvement"],
    popular: false,
  },
  {
    icon: Rocket,
    title: "Foundation Course",
    subtitle: "Class 10 to Inter",
    description: "Bridge course for smooth transition to competitive exam preparation",
    features: ["Concept Building", "Aptitude Development", "Early Preparation"],
    popular: false,
  },
];

const CoursesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="courses" className="section-padding bg-muted" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Programs
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            Courses We Offer
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive intermediate programs designed for academic excellence
            and competitive exam success.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative card-elevated card-hover p-6 ${
                course.popular ? "border-2 border-primary" : ""
              }`}
            >
              {course.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 bg-accent text-accent-foreground text-xs font-bold rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <course.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-foreground">
                    {course.title}
                  </h3>
                  <span className="text-sm text-primary font-medium">
                    {course.subtitle}
                  </span>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-4">
                {course.description}
              </p>

              <ul className="space-y-2 mb-6">
                {course.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button variant="outline" className="w-full" asChild>
                <a href="#contact">Learn More</a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
