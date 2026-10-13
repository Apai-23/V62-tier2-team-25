import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export const ProfileHeader = ({ isEditing, onEditToggle }) => {
  return (
    <div className="mb-8 flex items-center justify-center gap-6">
      <Avatar className="size-20">
        <AvatarImage src="https://github.com/shadcn.png" alt="User" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <div>
        <h1 className="text-2xl text-md">User Name</h1>
        <Button
          onClick={onEditToggle}
          className="text-md bg-emerald-700 text-white font-bold py-5 px-7 rounded-lg"
        >
          {isEditing ? "Cancel" : "Edit Profile"}
        </Button>
      </div>
    </div>
  );
};
