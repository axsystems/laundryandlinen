"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPin, CheckCircle2, XCircle, ArrowRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  SERVICE_REGIONS,
  isZipCodeServiceable,
  getRegionByZipCode,
} from "@/lib/constants/service-areas";

export default function AreasPage() {
  const [zipCode, setZipCode] = useState("");
  const [checkResult, setCheckResult] = useState<{
    checked: boolean;
    serviceable: boolean;
    region: string | null;
  }>({ checked: false, serviceable: false, region: null });

  const handleCheck = () => {
    const cleaned = zipCode.replace(/\D/g, "");
    if (cleaned.length === 5) {
      const serviceable = isZipCodeServiceable(cleaned);
      const region = getRegionByZipCode(cleaned);
      setCheckResult({ checked: true, serviceable, region });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleCheck();
    }
  };

  return (
    <div className="pt-24 md:pt-32">
      {/* Hero */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Service Areas
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              We proudly serve the entire Phoenix Metro area with free pickup and
              delivery on qualifying orders.
            </p>

            {/* ZIP Code Checker */}
            <div className="max-w-md mx-auto">
              <div className="flex gap-3">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Enter your ZIP code"
                    value={zipCode}
                    onChange={(e) => {
                      setZipCode(e.target.value);
                      setCheckResult({ checked: false, serviceable: false, region: null });
                    }}
                    onKeyDown={handleKeyDown}
                    className="pl-10"
                    maxLength={5}
                  />
                </div>
                <Button onClick={handleCheck} variant="accent">
                  Check
                </Button>
              </div>

              {/* Result */}
              {checkResult.checked && (
                <div
                  className={`mt-4 p-4 rounded-xl ${
                    checkResult.serviceable
                      ? "bg-fresh/10 border border-fresh/30"
                      : "bg-destructive/10 border border-destructive/30"
                  }`}
                >
                  {checkResult.serviceable ? (
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-6 h-6 text-fresh" />
                      <div className="text-left">
                        <p className="font-semibold text-foreground">
                          Great news! We service your area.
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {checkResult.region} region
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center gap-3">
                      <XCircle className="w-6 h-6 text-destructive" />
                      <div className="text-left">
                        <p className="font-semibold text-foreground">
                          We don&apos;t service this ZIP code yet.
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Contact us to request coverage in your area.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {checkResult.checked && checkResult.serviceable && (
                <Button asChild variant="accent" className="mt-4 w-full" size="lg">
                  <Link href="/order" className="group">
                    Schedule Pickup
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Regions */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-display font-bold text-foreground text-center mb-12">
            Coverage by Region
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {Object.values(SERVICE_REGIONS).map((region) => (
              <div key={region.id} className="card-elevated p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-foreground">
                    {region.name}
                  </h3>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-muted-foreground mb-2">
                    Cities Served:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {region.cities.map((city) => (
                      <span
                        key={city}
                        className="px-3 py-1 bg-secondary rounded-full text-sm"
                      >
                        {city}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground mb-2">
                    ZIP Codes:
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {region.zipCodes.join(", ")}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-foreground text-center mb-8">
              Service Area Map
            </h2>
            <div className="aspect-video rounded-2xl bg-gradient-to-br from-primary/10 to-wave/10 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-primary/30 mx-auto mb-4" />
                <p className="text-muted-foreground">
                  Interactive map coming soon
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            In Our Service Area?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Schedule your first pickup today and experience the convenience of
            professional laundry service delivered to your door.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-primary hover:bg-white/90"
          >
            <Link href="/order" className="group">
              Schedule Free Pickup
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
