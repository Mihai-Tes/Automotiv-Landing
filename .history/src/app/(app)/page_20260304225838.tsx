import { Check, Star } from "lucide-react";


export default function Home() {
  return (
    <div className="wrapper">
      <section className="h-screen bg-neutral-900 text-white pt-16">
        <div className="page-width grid grid-cols-6 h-full">
          <div className="col-span-2 flex flex-col justify-center">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <Star size={16} />
                <Star size={16} />
                <Star size={16} />
                <Star size={16} />
                <Star size={16} />

              </div>
              <span className="text-xs">4.86/5 Google Rating</span>
            </div>
            <h1 className="text-6xl font-bold tracking-tight">The All-in-One solution for auto repair shops</h1>
          </div>
          <div className="col-span-4 relative">
            <div className="absolute bottom-0 right-0">
              <img src="https://images.ctfassets.net/k0itp0ir7ty4/53zTNXtkmfyj4EDjHZ9oc0/202efa01b6aa891add91b8e5844b92c4/Tablet-Hands.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
