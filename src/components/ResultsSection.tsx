import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Star, Award, Medal } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    count: "150+",
    label: "IIT-JEE Selections",
    description: "Students placed in premier IITs & NITs",
  },
  {
    icon: Star,
    count: "350+",
    label: "NEET Qualifiers",
    description: "Medical aspirants in top colleges",
  },
  {
    icon: Award,
    count: "50+",
    label: "Board Toppers",
    description: "State & District rank holders",
  },
  {
    icon: Medal,
    count: "98%",
    label: "Success Rate",
    description: "Students achieving target scores",
  },
];

const testimonials = [
  {
    name: "Priya Sharma",
    achievement: "AIR 156, IIT-JEE Advanced",
    quote: "The faculty at Sri Skanda understood my strengths and weaknesses. Their personalized guidance was key to my success.",
  },
  {
    name: "Rahul Kumar",
    achievement: "NEET Score: 680/720",
    quote: "The competitive environment and regular tests prepared me well for the actual exam pressure.",
  },
  {
    name: "Ananya Reddy",
    achievement: "State Board Topper",
    quote: "Concept clarity from day one made everything easier. Best decision my parents made!",
  },
];

const ResultsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="results" className="section-padding bg-muted" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Our Track Record
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            Results & Achievements
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our students consistently achieve remarkable results year after year,
            making their dreams a reality.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-elevated p-6 text-center"
            >
              <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                <achievement.icon className="w-7 h-7 text-accent" />
              </div>
              <div className="text-4xl font-bold text-primary mb-1">
                {achievement.count}
              </div>
              <div className="font-semibold text-foreground mb-1">
                {achievement.label}
              </div>
              <div className="text-sm text-muted-foreground">
                {achievement.description}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="font-heading text-2xl font-bold text-foreground text-center mb-8">
            Success Stories
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="card-elevated p-6"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-accent text-accent"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-primary font-medium">
                    {testimonial.achievement}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResultsSection;
