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
              I'm a full-stack developer with 25+ years of experience in designing and implementing corporate software solutions. I'm really passionate about writing computer programs and I consider myself very proficient at communicating, not only technically, but also with business people. I'm a good listener, I like to understand what I'm doing and I always work relentlessly to achieve the most elegant, succinct and beautiful solution possible.
            </p>

            <p className="text-base leading-relaxed">
              I am a strong believer in the DRY principle and I apply it as much as I can. I'm a perfectionist, although I understand the importance of balancing quality, time and budget.
            </p>

            <p className="text-base leading-relaxed">
              I've had the chance to master many different software development technologies, platforms and tools, and while my comfort zone is .NET and Typescript (the best programming language ever), my solid background lets me adapt very quickly and take on any tech stack in no time. Even more so now, with the help of AI. I'm also very proficient in AWS, React and databases of all sorts.
            </p>

            <p className="text-base leading-relaxed">
              I feel comfortable working fully remotely in multi-cultural, global projects, and I have hands-on experience in open source projects.
            </p>

            <p className="text-base leading-relaxed">
              As an architect, I developed a strategy for a telecom customer to migrate their billing platform (highly coupled to hundreds of custom applications) four versions ahead into a scalable SOA architecture.
            </p>

            <p className="text-base leading-relaxed">
              For a different client, in the seamless oil pipes industry, I implemented a GPS-based solution that helped them track their vehicles around the plants worldwide.
            </p>

            <p className="text-base leading-relaxed">
              For a former employer, I developed an internal tool that helped them migrate more than 300 XAML workflows into pure C# code, fast and flawlessly (when AI didn't exist!). This tool saved real money not spent in manual, error-prone work. For this project I had to learn about recursive descent scanners, parsers and compiler generators.
            </p>

            <p className="text-base leading-relaxed">
              Later, I helped Aurea Energy Services bill 90% of usage records automatically.
            </p>

            <p className="text-base leading-relaxed">
              I also worked as the Product Chief Architect of Evoq, a product based on the DNN platform. This role required expertise in advanced ASP.NET, Dev Ops, Azure, non relational databases (like Cosmos DB), OAuth, microservice architectures, and React.
            </p>

            <p className="text-base leading-relaxed">
              More recently, since 2023, I've been a full-stack dev with Blend. In my role I lead a team of 6 devs to create modern applications in the cloud for our giant customer in the financial services industry, blending the power of AI with common sense and experience.
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
