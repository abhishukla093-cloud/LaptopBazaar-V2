import Button from "@/components/ui/Button";

export default function HeroButtons() {
  return (
    <div className="mt-10 flex flex-wrap gap-4">
      <Button>
        Shop Now
      </Button>

      <Button variant="secondary">
        Explore Collection
      </Button>
    </div>
  );
}