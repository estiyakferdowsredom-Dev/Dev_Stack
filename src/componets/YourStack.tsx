import type TechType from "../Types/techtypes";

type Props = {
	selectedTechnologies: TechType[];
	onRemove: (technologyId: string) => void;
	onRemoveAll: () => void;
};

const YourStack = ({ selectedTechnologies, onRemove, onRemoveAll }: Props) => {
	return (
		<aside className="h-fit rounded-xl border border-gray-200 bg-white p-4 shadow-sm lg:sticky lg:top-24 lg:mt-[164px]">
			<div className="flex items-start justify-between gap-4">
				<div>
					<h2 className="text-base font-bold">Your Stack</h2>
					<p className="mt-1 text-[10px] text-gray-400">
						{selectedTechnologies.length} Technology{selectedTechnologies.length === 1 ? "" : "ies"} Selected
					</p>
				</div>
				{selectedTechnologies.length > 0 && (
					<button className="text-[10px] font-semibold text-pink-600" onClick={onRemoveAll} type="button">
						Remove All
					</button>
				)}
			</div>

			{selectedTechnologies.length === 0 ? (
				<p className="mt-6 rounded-lg bg-gray-50 p-5 text-center text-xs text-gray-500">
					No technologies selected yet.
				</p>
			) : (
				<div className="mt-5 space-y-2">
					{selectedTechnologies.map((technology) => (
						<div className="flex items-center gap-2 rounded-lg border border-gray-100 p-2" key={technology.id}>
							<img className="h-7 w-7 object-contain" src={technology.icon} alt={`${technology.name} icon`} />
							<div className="min-w-0 flex-1">
								<h3 className="truncate text-xs font-semibold">{technology.name}</h3>
								<p className="text-[9px] text-gray-500">{technology.category}</p>
							</div>
							<button
								className="text-sm text-gray-400 hover:text-red-500"
								aria-label={`Remove ${technology.name}`}
								onClick={() => onRemove(technology.id)}
								type="button"
							>
								✕
							</button>
						</div>
					))}
				</div>
			)}
		</aside>
	);
};

export default YourStack;
