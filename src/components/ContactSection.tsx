import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success("Thank you! We'll contact you shortly.");
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      (e.target as HTMLFormElement).reset();
    }, 3000);
  };

  return (
    <section id="contact" className="section-padding bg-background" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Get In Touch
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start your journey towards IIT/Medical success? 
            Reach out to us for admissions and enquiries.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50">
                <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                  <p className="text-muted-foreground">+91 98765 43210</p>
                  <p className="text-muted-foreground">+91 98765 43211</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50">
                <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <p className="text-muted-foreground">info@sriskandaacademy.com</p>
                  <p className="text-muted-foreground">admissions@sriskandaacademy.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50">
                <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Address</h3>
                  <p className="text-muted-foreground">
                    Sri Skanda IIT & Medical Academy,<br />
                    Main Road, Education Hub,<br />
                    Hyderabad - 500001
                  </p>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="mt-8 p-6 rounded-xl bg-primary text-primary-foreground">
              <h3 className="font-heading text-xl font-bold mb-4">Office Hours</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Monday - Saturday</span>
                  <span className="font-medium">8:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-medium">9:00 AM - 2:00 PM</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="card-elevated p-6 md:p-8"
          >
            <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
              Enquiry Form
            </h3>

            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle className="w-16 h-16 text-success mb-4" />
                <h4 className="text-xl font-semibold text-foreground mb-2">
                  Thank You!
                </h4>
                <p className="text-muted-foreground">
                  We've received your enquiry and will contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">
                      Student Name *
                    </label>
                    <Input 
                      placeholder="Enter student name" 
                      required 
                      maxLength={100}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">
                      Parent Name *
                    </label>
                    <Input 
                      placeholder="Enter parent name" 
                      required 
                      maxLength={100}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">
                      Phone Number *
                    </label>
                    <Input 
                      type="tel" 
                      placeholder="+91 XXXXX XXXXX" 
                      required 
                      maxLength={15}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">
                      Email
                    </label>
                    <Input 
                      type="email" 
                      placeholder="email@example.com" 
                      maxLength={255}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">
                      Current Class *
                    </label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select class" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="10th">Class 10th</SelectItem>
                        <SelectItem value="11th">Class 11th / Inter 1st Year</SelectItem>
                        <SelectItem value="12th">Class 12th / Inter 2nd Year</SelectItem>
                        <SelectItem value="repeater">Repeater / Long Term</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">
                      Course Interested *
                    </label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select course" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mpc">Intermediate MPC (IIT-JEE)</SelectItem>
                        <SelectItem value="bipc">Intermediate BiPC (NEET)</SelectItem>
                        <SelectItem value="eamcet">EAMCET Special</SelectItem>
                        <SelectItem value="foundation">Foundation Course</SelectItem>
                        <SelectItem value="board">Board Excellence</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">
                    Message (Optional)
                  </label>
                  <Textarea
                    placeholder="Any specific queries or requirements..."
                    rows={4}
                    maxLength={1000}
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Submitting..."
                  ) : (
                    <>
                      Submit Enquiry
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
