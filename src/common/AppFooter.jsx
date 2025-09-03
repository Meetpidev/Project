import { Mail, Phone, Star } from "lucide-react";
import {
    SiFacebook,
    SiX,
    SiLinkedin,
    SiInstagram,
    SiYoutube,
    SiGoogle
} from "react-icons/si";

function ContactCard({ title, email, phones }) {
    return (
        <div className="bg-white rounded-lg shadow-md p-4 w-72">
            <h3 className="text-blue-800 font-semibold text-sm mb-3">{title}</h3>
            <div className="space-y-2">
                <div className="flex items-center gap-2">
                    <Mail className="text-gray-600 w-4 h-4" />
                    <a
                        href={`mailto:${email}`}
                        className="text-gray-700 text-xs hover:text-blue-600 transition-colors"
                        data-testid={`email-${email.split('@')[0]}`}
                    >
                        {email}
                    </a>
                </div>
                <div className="flex items-center gap-2">
                    <Phone className="text-gray-600 w-4 h-4" />
                    <div className="text-xs">
                        {phones.map((phone, index) => (
                            <div key={index} className="text-gray-700">
                                {phone}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}


function OfficeCard({ country, flag, address }) {
    return (
        <div className="bg-white rounded-lg shadow-md p-4 min-h-32">
            <div className="flex items-center gap-3 mb-3">
                {flag}
                <h4 className="font-semibold text-gray-800 text-sm">{country}</h4>
            </div>
            <div className="text-xs text-gray-600 space-y-1">
                {address.map((line, index) => (
                    <p key={index}>{line}</p>
                ))}
            </div>
        </div>
    );
}

function ReviewBadge({ platform, icon, reviewCount }) {
    return (
        <div className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 shadow-md">
            {icon}
            <div>
                <div className="flex items-center gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    ))}
                </div>
                <p className="text-xs text-gray-600">{reviewCount}</p>
            </div>
        </div>
    );
}

function SocialLink({ href, icon, label }) {
    return (
        <a
            href={href}
            className="w-8 h-8 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors"
            data-testid={`social-${label.toLowerCase()}`}
            aria-label={`Visit our ${label} page`}
        >
            {icon}
        </a>
    );
}

// Flag components using CSS-only approach
function IndiaFlag() {
    return (
        <div className="w-8 h-6 rounded-sm overflow-hidden flex flex-col border border-gray-300">
            <div className="h-2 bg-orange-500"></div>
            <div className="h-2 bg-white flex items-center justify-center relative">
                <div className="w-4 h-4 border border-blue-800 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-blue-800 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 border border-orange-500 rounded-full"></div>
                    </div>
                </div>
            </div>
            <div className="h-2 bg-green-600"></div>
        </div>
    );
}

function USAFlag() {
    return (
        <div className="w-8 h-6 rounded-sm overflow-hidden border border-gray-300">
            <div className="w-full h-full bg-gradient-to-r from-red-600 to-blue-800 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-white via-30% to-blue-800"></div>
                <div className="absolute top-0 left-0 w-3 h-3 bg-blue-800 flex flex-wrap">
                    <div className="w-1 h-1 bg-white m-px"></div>
                </div>
            </div>
        </div>
    );
}

function CanadaFlag() {
    return (
        <div className="w-8 h-6 rounded-sm overflow-hidden flex border border-gray-300">
            <div className="w-2 bg-red-600"></div>
            <div className="w-4 bg-white flex items-center justify-center relative">
                <div className="w-3 h-4 text-red-600 flex items-center justify-center">
                    <svg className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 3L8 7h4l-2-4zM6 9l2 2v6l2-2 2 2V11l2-2H6z" />
                    </svg>
                </div>
            </div>
            <div className="w-2 bg-red-600"></div>
        </div>
    );
}

function AustraliaFlag() {
    return (
        <div className="w-8 h-6 rounded-sm overflow-hidden bg-blue-800 relative border border-gray-300">
            <div className="absolute top-0 left-0 w-4 h-3 bg-blue-900 flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-white flex items-center justify-center">
                <div className="w-1 h-1 bg-red-600"></div>
            </div>
        </div>
    );
}

function UKFlag() {
    return (
        <div className="w-8 h-6 rounded-sm overflow-hidden bg-blue-800 relative border border-gray-300">
            <div className="absolute inset-0 bg-blue-800"></div>
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <div className="w-full h-px bg-white"></div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <div className="w-px h-full bg-white"></div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-0 left-0 w-full h-px bg-red-600"></div>
                <div className="absolute top-0 left-0 w-px h-full bg-red-600"></div>
            </div>
        </div>
    );
}

function UAEFlag() {
    return (
        <div className="w-8 h-6 rounded-sm overflow-hidden flex border border-gray-300">
            <div className="w-2 bg-red-600"></div>
            <div className="w-6 flex flex-col">
                <div className="h-2 bg-green-600"></div>
                <div className="h-2 bg-white"></div>
                <div className="h-2 bg-black"></div>
            </div>
        </div>
    );
}

export default function AppFooter() {
    const offices = [
        {
            country: "India(HQ)",
            flag: <IndiaFlag />,
            address: [
                "301, Ganesh Meridian, Opp.",
                "Kangri Petrol Pump, S.G. Highway,",
                "Ahmedabad - 380060, Gujarat,",
                "INDIA"
            ]
        },
        {
            country: "USA",
            flag: <USAFlag />,
            address: [
                "5900 NW 18th Ave",
                "Coral Springs,",
                "Florida, FL 33076"
            ]
        },
        {
            country: "Canada",
            flag: <CanadaFlag />,
            address: [
                "101 Bow Meadow Cove",
                "Unit#403 Calgary",
                "AB, T2J 0G8"
            ]
        },
        {
            country: "Australia",
            flag: <AustraliaFlag />,
            address: [
                "U 28 305 Harborne",
                "Street, Glendalough",
                "6016 WA"
            ]
        },
        {
            country: "UK",
            flag: <UKFlag />,
            address: [
                "42 Audley Avenue,",
                "Gillingham ME7 3AY",
                "United Kingdom"
            ]
        },
        {
            country: "UAE",
            flag: <UAEFlag />,
            address: [
                "Al building 21",
                "Ghoroob,Mirdiff",
                "Dubai, United Arab",
                "Emirates"
            ]
        }
    ];

    return (
        <footer className="bg-gradient-to-br from-blue-50 to-blue-100">
            <div className="max-w-7xl mx-auto px-6 py-8">
                {/* Top Section with Logo and Contact Cards */}
              <div className="flex flex-col lg:flex-row items-start justify-between gap-8 mb-8">
  {/* Logo and Company Name in a row */}
  <div className="flex flex-col">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
        <span className="text-white font-bold text-xl">S</span>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-blue-900">Sapphire</h2>
        <p className="text-sm text-gray-600">Software Solutions</p>
      </div>
    </div>

    {/* Contact Details below logo and name */}
    <div className="flex flex-row sm:flex-row gap-4 mt-4">
      <ContactCard
        title="Contact For Sales"
        email="contact@sapphiresolutions.net"
        phones={["IN: +91-942-970-8562", "US: +1-754-258-7670"]}
      />
      <ContactCard
        title="Contact for Career (Jobs)"
        email="careers@sapphiresolutions.net"
        phones={["+91-909-997-6034"]}
      />
                        </div>
                        
                               {/* Bottom Section with Reviews and Social */}
                <div className="lg:flex-row items-center justify-between gap-6 pt-6 border-t border-blue-200">
                    {/* Review Badges */}
                    <div className="flex flex-wrap items-center gap-4 justify-center lg:justify-start">
                        <ReviewBadge
                            platform="Google"
                            icon={<SiGoogle className="text-red-500 text-lg" />}
                            reviewCount="100 REVIEWS"
                        />
                        <ReviewBadge
                            platform="Clutch"
                            icon={
                                <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                                    <span className="text-white text-xs font-bold">C</span>
                                </div>
                            }
                            reviewCount="54 REVIEWS"
                        />
                        <ReviewBadge
                            platform="DesignRush"
                            icon={
                                <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center">
                                    <span className="text-white text-xs font-bold">DR</span>
                                </div>
                            }
                            reviewCount="15 REVIEWS"
                        />
                        <div className="flex items-center gap-2">
                            <div className="bg-white rounded px-2 py-1 shadow-sm">
                                <span className="text-xs font-semibold text-green-600">W3C</span>
                            </div>
                            <div className="bg-white rounded px-2 py-1 shadow-sm">
                                <span className="text-xs font-semibold text-orange-600">HTML5</span>
                            </div>
                        </div>
                    </div>

                    {/* Social Media Links */}
                    <div className="flex items-center gap-3 mt-9">
                        <SocialLink
                            href="#"
                            icon={<SiFacebook className="text-white text-sm" />}
                            label="Facebook"
                        />
                        <SocialLink
                            href="#"
                            icon={<SiX className="text-white text-sm" />}
                            label="Twitter"
                        />
                        <SocialLink
                            href="#"
                            icon={<SiLinkedin className="text-white text-sm" />}
                            label="LinkedIn"
                        />
                        <SocialLink
                            href="#"
                            icon={<SiInstagram className="text-white text-sm" />}
                            label="Instagram"
                        />
                        <SocialLink
                            href="#"
                            icon={<SiYoutube className="text-white text-sm" />}
                            label="YouTube"
                        />
                    </div>
                </div>
  </div>

  {/* Offices grid remains unchanged */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
    {offices.map((office, index) => (
      <OfficeCard
        key={index}
        country={office.country}
        flag={office.flag}
        address={office.address}
      />
    ))}
  </div>

                    
</div>

               
         

                {/* Copyright */}
                <div className="mt-6 pt-6 border-t border-blue-200 text-center w-full">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p className="text-sm text-black-600">
                            © 2023 Sapphire Software Solutions. All rights reserved.
                        </p>
                        <div className="flex items-center gap-6">
                            <a
                                href="#"
                                className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
                                data-testid="link-privacy"
                            >
                                Privacy Policy
                            </a>
                            <span className="text-gray-400">|</span>
                            <a
                                href="#"
                                className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
                                data-testid="link-terms"
                            >
                                Terms of Use
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
