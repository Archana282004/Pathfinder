"use client";

import { Button } from "@/src/components/ui/button";

interface CategoryTabProps {
  categories: string[];
  selected: string;
  handleSelect: (category: string) => void;
}

const CategoryTab = ({ categories, selected, handleSelect }: CategoryTabProps) => {
  return (
    <div>
      <div className="flex gap-2 overflow-x-auto pb-2">
      {categories.map((category) => (
        <Button
          key={category}
          size="sm"
          variant={selected === category ? "default" : "outline"}
          onClick={() => handleSelect(category)}
        >
          {category}
        </Button>
      ))}
    </div>
    </div>
  );
};

export default CategoryTab;
