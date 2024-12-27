import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import Banner from "../../public/banner.jpeg"


const Landing = () => {
  const [longUrl, setLongUrl] = useState("");
  const navigate = useNavigate();

  const handleShorten = (e) => {
    e.preventDefault();
    if (longUrl) {
      navigate(`/auth?createNew=${longUrl}`);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 p-6"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          variants={itemVariants}
          className="my-10 sm:my-16 text-3xl sm:text-6xl lg:text-7xl text-white text-center font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
        >
          The only URL shortener <br /> you&apos;ll ever need! ✨
        </motion.h2>

        <motion.form
          variants={itemVariants}
          onSubmit={handleShorten}
          className="sm:h-14 flex flex-col sm:flex-row w-full md:w-3/4 lg:w-2/3 mx-auto gap-2"
        >
          <Input
            type="url"
            value={longUrl}
            placeholder="Enter your loooong URL"
            className="h-full flex-1 py-6 px-4 bg-gray-800 border-gray-700 text-white placeholder-gray-400"
            onChange={(e) => setLongUrl(e.target.value)}
          />
          <Button
            className="h-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8"
            type="submit"
          >
            Shorten!
          </Button>
        </motion.form>

        <motion.div
          variants={itemVariants}
          className="w-full my-16"
        >
          <img
            src={Banner}
            alt="URL Shortener Banner"
            className="w-full max-w-4xl mx-auto rounded-lg shadow-2xl"
          />
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="w-full max-w-4xl mx-auto"
        >
          <Accordion type="multiple" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border-gray-700 bg-gray-800 rounded-lg">
              <AccordionTrigger className="px-4 py-4 text-white hover:text-purple-400">
                How does the Trimrr URL shortener work?
              </AccordionTrigger>
              <AccordionContent className="px-4 text-gray-300">
                When you enter a long URL, our system generates a shorter version of
                that URL. This shortened URL redirects to the original long URL when
                accessed.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-gray-700 bg-gray-800 rounded-lg">
              <AccordionTrigger className="px-4 py-4 text-white hover:text-purple-400">
                Do I need an account to use the app?
              </AccordionTrigger>
              <AccordionContent className="px-4 text-gray-300">
                Yes. Creating an account allows you to manage your URLs, view
                analytics, and customize your short URLs.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-gray-700 bg-gray-800 rounded-lg">
              <AccordionTrigger className="px-4 py-4 text-white hover:text-purple-400">
                What analytics are available for my shortened URLs?
              </AccordionTrigger>
              <AccordionContent className="px-4 text-gray-300">
                You can view the number of clicks, geolocation data of the clicks
                and device types (mobile/desktop) for each of your shortened URLs.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Landing;
