type FilterProps = {
  selectedFabric: string;
  selectedOccasion: string;
  onFabricChange: (value: string) => void;
  onOccasionChange: (value: string) => void;
};

export default function ProductFilters({
  selectedFabric,
  selectedOccasion,
  onFabricChange,
  onOccasionChange,
}: FilterProps) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-black/10 bg-white p-4 md:flex-row">
      <select
        className="rounded-lg border border-stone-300 bg-white px-3 py-2"
        value={selectedFabric}
        onChange={(e) => onFabricChange(e.target.value)}
      >
        <option value="">All Fabrics</option>
        <option value="Silk">Silk</option>
        <option value="Cotton">Cotton</option>
      </select>

      <select
        className="rounded-lg border border-stone-300 bg-white px-3 py-2"
        value={selectedOccasion}
        onChange={(e) => onOccasionChange(e.target.value)}
      >
        <option value="">All Occasions</option>
        <option value="Wedding">Wedding</option>
        <option value="Durga Puja">Durga Puja</option>
        <option value="Poila Boishakh">Poila Boishakh</option>
      </select>
    </div>
  );
}