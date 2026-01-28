import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Heart, Lightbulb, Users } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "Delivering quality intermediate education with focus on competitive exam success",
  },
  {
    icon: Heart,
    title: "Discipline & Values",
    description: "Building character alongside academics through structured learning environment",
  },
  {
    icon: Lightbulb,
    title: "Concept Clarity",
    description: "Strong foundation through deep understanding of fundamentals, not rote learning",
  },
  {
    icon: Users,
    title: "Student-Centered",
    description: "Personalized attention and mentoring for every student's unique learning journey",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-background" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            About Us
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            Shaping Future Leaders
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sri Skanda IIT & Medical Academy is dedicated to transforming students
            into confident achievers through disciplined, concept-driven education.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-elevated card-hover p-6 text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mx-auto mb-4">
                <value.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                {value.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Academy Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 p-8 md:p-12 rounded-2xl bg-secondary text-center"
        >
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
            "Future Doctors. Future Engineers. One Academy."
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We nurture both medical and engineering aspirants under one roof, 
            creating a competitive yet supportive ecosystem where students inspire 
            each other to achieve greatness.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
