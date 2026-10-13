import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const fields = [
  { name: "about", label: "About me" },
  { name: "goal", label: "Main learning goal" },
  { name: "interest", label: "Interest" },
  { name: "hours", label: "Hours per week I can study" },
];

export const ProfileDetailCard = ({
  isEditing,
  values,
  onChange,
  onSubmit,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <Card className={cn("p-0", isEditing ? "ring-1! black" : "ring-0!")}>
        <CardContent className="p-6">
          <h2 className="mb-4 text-lg font-semibold">Profile Details</h2>
          <div className="grid gap-12 md:grid-cols-1">
            {fields.map(({ name, label }) => (
              <div key={name} className="space-y-2">
                <Label htmlFor={name}>{label}</Label>
                <Input
                  id={name}
                  name={name}
                  value={values[name]}
                  onChange={onChange}
                  readOnly={!isEditing}
                  className={isEditing ? "border! py-5" : "border-0!"}
                />
              </div>
            ))}
          </div>
          {isEditing && (
            <div className="mt-6 flex justify-center text-md bg-emerald-700 text-white font-bold py-2 rounded-lg">
              <Button type="submit">Save Changes</Button>
            </div>
          )}
        </CardContent>
      </Card>
    </form>
  );
};
