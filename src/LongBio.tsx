import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import './App.css';

function bio() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl w-full"
      >
        <Card className="rounded-2xl shadow-lg">
          <CardContent className="p-8 space-y-6">
            <div className="flex items-center gap-6">
              <img
                src="/profile.jpg"
                alt="Profile"
                className="w-30 h-30 rounded-full object-cover shadow-md"
              />
              <div>
                <h1 className="text-3xl font-bold">Daniel Aguilera</h1>
                <p className="text-sm text-gray-500 mt-1">Full-Stack Developer & Tech Lead</p>
              </div>
            </div>

            <p className="text-base leading-relaxed">
              Daniel Aguilera is a distinguished full-stack developer and technical leader with a career spanning more than 25 years of excellence in the software industry. Throughout his extensive tenure, he has established himself as an expert in the design, evolution, and management of complex software systems, consistently delivering robust solutions that stand the test of time.
            </p>

            <p className="text-base leading-relaxed">
              As a Tech Lead, Daniel is recognized for his unique ability to bridge the gap between intricate technical architectures and high-level business objectives. He is a clear and effective communicator who excels at translating complex engineering concepts into actionable insights for stakeholders, ensuring that every technical decision is strategically aligned with real-world needs and organizational goals.
            </p>

            <p className="text-base leading-relaxed">
              His professional portfolio is highlighted by his leadership in large-scale architectural initiatives. Daniel has a proven track record of spearheading the modernization of legacy systems, successfully transitioning them into scalable, service-oriented solutions. His work has driven high-impact outcomes across a diverse range of industries, proving his ability to navigate the unique challenges of different domains with precision and foresight.
            </p>

            <p className="text-base leading-relaxed">
              Daniel's commitment to the craft of software development extends beyond the workplace. Driven by a genuine passion for coding, he is a lifelong learner who continuously explores emerging technologies and methodologies, evidenced by his presence in the open-source community; he frequently shares his personal projects on GitHub, reflecting his ongoing pursuit of technical innovation and creative problem-solving.
            </p>

            <p className="text-base leading-relaxed">
              With a vast background encompassing a wide array of technologies and platforms, Daniel possesses a rare versatility. He is known for his ability to adapt rapidly to new environments and confidently take on challenges within any technology stack, making him an invaluable asset to any forward-thinking technical team.
            </p>

            <p className="text-base leading-relaxed">
              Outside of his professional endeavors, Daniel is a multi-faceted individual with a deep appreciation for the arts and exploration. He enjoys playing the guitar and recording music in his personal time. Additionally, he is a certified open water scuba diver, finding balance and inspiration by exploring the world beneath the waves.
            </p>

            <div className="flex flex-wrap gap-2">
              <Badge>.NET</Badge>
              <Badge>TypeScript</Badge>
              <Badge>React</Badge>
              <Badge>AWS</Badge>
              <Badge>Terraform</Badge>
              <Badge>CI/CD</Badge>
              <Badge>SQL / NoSQL</Badge>
              <Badge>AI</Badge>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-semibold">Highlights</h2>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Worked for big and small companies</li>
                <li>Remote, Multi-cultural environments</li>
                <li>Architected telecom billing migration to scalable SOA</li>
                <li>Built global GPS tracking system for industrial operations</li>
                <li>Automated conversion of 300+ XAML workflows to C#</li>
                <li>Enabled 90% automated billing in energy sector</li>
                <li>Led product architecture for Evoq (DNN platform)</li>
                <li>Integrated AI to existing applications</li>
                <li>Designed & implemented CI/CD pipelines</li>
                <li>Currently leading AI-driven cloud development team</li>
              </ul>
            </div>

            <div className="border-t pt-4 text-sm text-gray-600">
              <p>
                Focused on delivering solutions that are simple, elegant, and built to last.
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

export default bio;
