"use client";

import Link from "next/link";
import {
    Coffee,
    Palette,
    GraduationCap,
    ShieldCheck,
    Briefcase,
    Stethoscope,
    Star
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Category {
    id: string;
    name: string;
    icon: any;
    href: string;
}

const categories: Category[] = [
    { id: "hospitality", name: "Hospitality", icon: Coffee, href: "/men/hospitality" },
    { id: "customization", name: "Customization", icon: Palette, href: "/men/customization" },
    { id: "school", name: "School Uniforms", icon: GraduationCap, href: "/men/school-uniforms" },
    { id: "security", name: "Security Services", icon: ShieldCheck, href: "/men/security-services" },
    { id: "corporate", name: "Corporate Uniforms", icon: Briefcase, href: "/men/corporate-uniforms" },
    { id: "healthcare", name: "Health Care", icon: Stethoscope, href: "/men/healthcare" },
    { id: "events", name: "Special Events", icon: Star, href: "/men/special-events" },
];

export function CategoryGrid() {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 py-8">
            {categories.map((category) => {
                const Icon = category.icon;
                return (
                    <Link
                        key={category.id}
                        href={category.href}
                        className="group flex flex-col items-center gap-4 cursor-pointer"
                    >
                        <div className={cn(
                            "w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-300",
                            "bg-[#111111] border border-white/10",
                            "group-hover:bg-[#1a1a1a] group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]",
                            "group-hover:border-yellow-500/50"
                        )}>
                            <Icon
                                className="w-10 h-10 text-white transition-colors duration-300 group-hover:text-yellow-400"
                                strokeWidth={1.5}
                            />
                        </div>
                        <span className="text-sm font-medium text-center text-muted-foreground transition-colors duration-300 group-hover:text-primary">
                            {category.name}
                        </span>
                    </Link>
                );
            })}
        </div>
    );
}
