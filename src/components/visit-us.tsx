import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Clock, MapPin, Info } from 'lucide-react';

const contactDetails = [
  { icon: <MapPin className="h-5 w-5 text-primary" />, text: "Toli Chowki, Hyderabad - 500008", href: "https://share.google/BXdBAGvrEM2jMln8g" },
  { icon: <Clock className="h-5 w-5 text-primary" />, text: "Everyday: 12 PM – 11 PM", href: "#" },
  { icon: <Phone className="h-5 w-5 text-primary" />, text: "+91 97004 60343", href: "tel:+919700460343" },
];

const houseRules = [
    "Orders once placed cannot be cancelled.",
    "We aim to serve your order within 15 minutes.",
    "Please avoid asking for extras beyond the menu.",
    "Kindly dispose of waste in the dustbin after eating.",
];

export default function VisitUs() {
  return (
    <section id="visit-us" className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Visit Shabistan</h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Contact and Rules */}
          <div className="lg:col-span-1 space-y-8">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Contact Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactDetails.map((detail, index) => (
                  <a key={index} href={detail.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                    {detail.icon}
                    <span className="text-foreground/80 group-hover:text-primary transition-colors">{detail.text}</span>
                  </a>
                ))}
              </CardContent>
            </Card>
            <Card className="shadow-lg bg-blue-100/30">
                <CardHeader className="flex-row items-center gap-4 space-y-0">
                    <Info className="h-6 w-6 text-blue-600"/>
                    <CardTitle className="text-blue-800">Good to Know</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-2 text-blue-700 list-disc list-inside">
                        {houseRules.map((rule, index) => (
                            <li key={index}>{rule}</li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
          </div>
          {/* Map */}
          <div className="lg:col-span-2">
            <Card className="h-full min-h-[400px] w-full overflow-hidden shadow-lg">
              <div className="h-full w-full bg-gray-200 flex items-center justify-center">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.295789286094!2d78.4055916!3d17.397587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97d887956fb3%3A0x2f191fa10b3bed03!2sShabistan.%20The%20Meeting%20Point!5e0!3m2!1sen!2sin!4v1765875540211!5m2!1sen!2sin" width="100%" height="100%" style={{ border:0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Shabistan Location"></iframe>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
