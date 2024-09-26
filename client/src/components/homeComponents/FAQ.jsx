import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"; // Adjust the import path as needed

export default function FAQ() {
  return (
    <div className="w-[40vh] max-w-5xl mx-auto p-2 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h1>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="bg-green-600 text-white px-2 py-2 rounded-md font-semibold hover:bg-green-700 transition">
            What is the purpose of this website?
          </AccordionTrigger>
          <AccordionContent className="p-4 text-gray-700">
            This website provides comprehensive information and resources related to medicinal plants and their benefits. Our goal is to educate and inform visitors about the various uses of medicinal plants.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="bg-green-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-green-700 transition">
            How can I contact support?
          </AccordionTrigger>
          <AccordionContent className="p-4 text-gray-700">
            You can reach our support team by clicking on the 'Contact Us' link at the bottom of the page. Alternatively, you can email us directly at support@example.com.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="bg-green-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-green-700 transition">
            Are there any subscription fees?
          </AccordionTrigger>
          <AccordionContent className="p-4 text-gray-700">
            No, access to the information on this website is completely free. We believe in providing valuable resources without any cost to our users.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="bg-green-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-green-700 transition">
            Can I contribute to the content?
          </AccordionTrigger>
          <AccordionContent className="p-4 text-gray-700">
            Yes, we welcome contributions from knowledgeable individuals. If you would like to contribute, please reach out to us through our 'Contact Us' page with your proposals.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="bg-green-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-green-700 transition">
            How do you ensure the accuracy of the information?
          </AccordionTrigger>
          <AccordionContent className="p-4 text-gray-700">
            Our team of experts reviews and updates the information regularly to ensure its accuracy. We also reference reputable sources and scientific studies to maintain the quality of content.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
