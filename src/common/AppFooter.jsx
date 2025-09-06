import { Mail, Phone, Star } from "lucide-react";
import {
    SiFacebook,
    SiX,
    SiLinkedin,
    SiInstagram,
    SiYoutube,
    SiGoogle
} from "react-icons/si";
import logo from "./logo.png";

// ContactCard Component
function ContactCard({ title, email, phones }) {
    return (
        <div className="bg-white rounded-lg shadow-md p-4 w-full max-w-xs sm:max-w-sm">
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

// OfficeCard Component, now supports "highlight" prop
function OfficeCard({ country, flag, address, highlight }) {
    return (
        <div className={`bg-white rounded-lg shadow-md p-4 min-h-32 ${
            highlight
                ? "border-2 border-blue-500 ring-2 ring-blue-100 md:p-8"
                : ""
        }`}>
            <div className="flex items-center gap-3 mb-3">
                {flag}
                <h4 className="font-semibold text-gray-800 text-sm md:text-base">{country}</h4>
            </div>
            <div className="text-xs md:text-sm text-gray-600 space-y-1">
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

export default function AppFooter() {
    const offices = [
        {
            country: "India(HQ)",
            flag: <IndiaFlag />,
            address: [
                "C-11 Monark Appartment Nidhi Park Society",
                "near Ratnba School Thakkarnager,",
                "Ahmedabad - 382350, Gujarat,",
                "INDIA"
            ]
        },
    ];

    return (
        <footer className="bg-gradient-to-br from-blue-50 to-blue-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
                {/* Container to align Contact and Office side by side on lg+ */}
                <div className="flex flex-col lg:flex-row gap-8 mb-8">
                    {/* Contact Info section */}
                    <div className="flex-1 flex flex-col justify-between">
                        {/* Logo + Contact Cards + Reviews and Social */}
                        <div className="flex flex-col">
                            {/* Logo and company name */}
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-26 h-26 rounded-lg flex items-center justify-center">
                                    <img src={logo} alt="Logo" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-blue-900">Kryzen</h2>
                                    <p className="text-sm text-gray-600">Software Solutions</p>
                                </div>
                            </div>

                            {/* Contact Cards */}
                            <div className="flex flex-col sm:flex-row gap-4 mb-6">
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

                            {/* Reviews and social */}
                            <div className="lg:flex-row items-center justify-between gap-6 pt-6 border-t border-blue-200 flex flex-col">
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
                    </div>

                    {/* Office info section - make it same height as contact info */}
                    <div className="flex-1 flex flex-col justify-center">
                        <OfficeCard
                            country={offices[0].country}
                            flag={offices[0].flag}
                            address={offices[0].address}
                            highlight={true}
                        />
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-6 pt-6 border-t border-blue-200 text-center w-full">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p className="text-sm text-black-600">
                            © 2025 Kryzen Software Solutions. All rights reserved.
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
