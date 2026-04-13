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
                <h1 className="text-3xl font-bold">Full-Stack Developer & Architect</h1>
                <p className="text-sm text-gray-500 mt-1">25+ years building scalable software solutions</p>
              </div>
            </div>

            <p className="text-base leading-relaxed">
              Passionate about crafting elegant, maintainable code and translating complex business
              needs into practical, high-impact solutions. Strong communicator who bridges the gap
              between technical teams and business stakeholders.
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
