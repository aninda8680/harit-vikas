import { Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[color:var(--color-hv-cream-dark)] pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-[color:var(--color-hv-forest)] flex items-center justify-center">
                <span className="text-white font-bold text-xs" style={{ fontFamily: "var(--font-body)" }}>HV</span>
              </div>
              <span className="font-bold text-lg text-[color:var(--color-hv-forest-dark)]" style={{ fontFamily: "var(--font-body)" }}>
                Harit Vikas
              </span>
            </div>
            
            <h3 
              className="text-3xl font-bold text-[color:var(--color-hv-forest-dark)] leading-tight mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              "Climate is changing,<br/><span className="italic text-[color:var(--color-hv-sage)]">so should we.</span>"
            </h3>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[color:var(--color-hv-ink-light)] mb-6">Explore</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="text-sm font-medium text-[color:var(--color-hv-ink)] hover:text-[color:var(--color-hv-forest)] transition-colors">About Us</a></li>
              <li><a href="#verticals" className="text-sm font-medium text-[color:var(--color-hv-ink)] hover:text-[color:var(--color-hv-forest)] transition-colors">Business Verticals</a></li>
              <li><a href="#focus-areas" className="text-sm font-medium text-[color:var(--color-hv-ink)] hover:text-[color:var(--color-hv-forest)] transition-colors">Impact Focus</a></li>
              <li><a href="#projects" className="text-sm font-medium text-[color:var(--color-hv-ink)] hover:text-[color:var(--color-hv-forest)] transition-colors">Projects</a></li>
              <li><a href="https://aim.harit-vikas.com" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-[color:var(--color-hv-ink)] hover:text-[color:var(--color-hv-forest)] transition-colors">AIM Platform ↗</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[color:var(--color-hv-ink-light)] mb-6">Contact</h4>
            <div className="space-y-5">
              <a href="mailto:info@harit-vikas.com" className="flex items-center gap-3 text-sm font-medium text-[color:var(--color-hv-ink)] hover:text-[color:var(--color-hv-forest)] transition-colors group">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-[color:var(--color-hv-mist)] group-hover:border-[color:var(--color-hv-forest)] transition-colors">
                  <Mail size={14} className="text-[color:var(--color-hv-forest)]" />
                </div>
                info@harit-vikas.com
              </a>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-[color:var(--color-hv-mist)] flex-shrink-0 mt-1">
                  <MapPin size={14} className="text-[color:var(--color-hv-forest)]" />
                </div>
                <address className="not-italic text-sm text-[color:var(--color-hv-ink)] leading-relaxed">
                  Horizon Vikas Technologies<br/>
                  Jagatpur, Near Gour Das<br/>
                  Aswini Nagar, North 24 Parganas<br/>
                  West Bengal, India – 700159
                </address>
              </div>
            </div>
          </div>
          
        </div>

        <div className="pt-8 border-t border-[color:var(--color-hv-mist)] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[color:var(--color-hv-ink-light)] font-medium">
            &copy; {new Date().getFullYear()} Horizon Vikas Technologies. All rights reserved.
          </p>
          <div className="flex gap-4">
             <a href="#" className="text-xs text-[color:var(--color-hv-ink-light)] hover:text-[color:var(--color-hv-forest)] transition-colors font-medium">Privacy Policy</a>
             <a href="#" className="text-xs text-[color:var(--color-hv-ink-light)] hover:text-[color:var(--color-hv-forest)] transition-colors font-medium">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
