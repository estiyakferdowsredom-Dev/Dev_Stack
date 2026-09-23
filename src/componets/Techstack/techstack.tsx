import { use } from 'react';
import type TechType from "../../Types/techtypes";

type Props = {
  techStackPromise: Promise<TechType[]>;
  selectedTechnologies: TechType[];
  onAddToStack: (technology: TechType) => void;
};

const getBadgeClassName = (badge: string) => {
  switch (badge) {
    case "Popular":
      return "bg-pink-50 text-pink-600";
    case "Trending":
      return "bg-emerald-50 text-emerald-600";
    case "Essential":
      return "bg-sky-50 text-sky-600";
    case "Fast":
    case "Lightweight":
      return "bg-orange-50 text-orange-600";
    case "Top SQL":
    case "Cloud Native":
      return "bg-blue-50 text-blue-600";
    case "NoSQL":
      return "bg-red-50 text-red-600";
    case "Enterprise":
      return "bg-violet-50 text-violet-600";
    default:
      return "bg-gray-100 text-gray-600";
  }
};


const Techstack = ({ techStackPromise, selectedTechnologies, onAddToStack }: Props) => {
  const techstack = use(techStackPromise);

    return (
    <section className="py-16">
      <div className="mb-6">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Explore the <span className="text-[#d8217d]">Technologies</span>
        </h2>
        <p className="mt-2 text-sm text-gray-500">Pick one technology per category to build your ideal stack.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {techstack.map((technology) => {
          const isAdded = selectedTechnologies.some((item) => item.id === technology.id);

          return (
            <article className="flex h-full flex-col rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md" key={technology.id}>
              <div className="flex items-start justify-between gap-4">
                <img className="h-10 w-10 object-contain" src={technology.icon} alt={`${technology.name} icon`} />
                <span className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${getBadgeClassName(technology.badge)}`}>
                  {technology.badge}
                </span>
              </div>
              <h3 className="mt-3 text-base font-bold">{technology.name}</h3>
              <p className="mt-2 flex-1 text-xs leading-5 text-gray-500">{technology.description}</p>
              <div className="mt-4 flex items-center justify-between gap-2 text-[10px]">
                <div className="flex items-center gap-2">
                  <span className="rounded-sm bg-gray-100 px-2 py-1 font-medium text-gray-600">{technology.category}</span>
                  <span className="rounded-sm border border-gray-200 px-2 py-1 text-gray-500">{technology.difficulty}</span>
                </div>
                <span className="font-semibold text-amber-500">★ {technology.rating}</span>
              </div>
              <div className="mt-3 border-t border-gray-100 pt-3">
                <button
                  className="w-full rounded-md bg-[#101522] px-4 py-2 text-[10px] font-semibold text-white transition-colors hover:bg-[#d8217d] disabled:cursor-not-allowed disabled:bg-gray-400"
                  disabled={isAdded}
                  onClick={() => onAddToStack(technology)}
                  type="button"
                >
                  {isAdded ? "✓ Added to Stack" : "Add to Stack"}
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
    );
};

export default Techstack;