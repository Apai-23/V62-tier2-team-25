import { useState } from "react";
import { ProfileHeader } from "@/components/ProfileHeader";
import { ProfileDetailCard } from "@/components/ProfileDetailCard";
import { UserDashBoard } from "@/components/UserDashboard";
import Header from "@/layout/Header";

const initialProfile = {
  about: "John",
  goal: "Doe",
  interest: "john@example.com",
  hours: "Product Designer",
};

const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState(initialProfile);
  const [draft, setDraft] = useState(initialProfile);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDraft((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditToggle = () => {
    // leaving edit mode without saving discards the draft
    setDraft(profile);
    setIsEditing((prev) => !prev);
  };

  const handleSave = (e) => {
    e.preventDefault();
    setProfile(draft);
    setIsEditing(false);
  };

  return (
    <div>
      <div className="container mx-auto px-4 py-6 md:px-6 2xl:max-w-[1400px]">
        <Header />
        <div className="mx-auto max-w-4xl py-8">
          <ProfileHeader isEditing={isEditing} onEditToggle={handleEditToggle} />
          {/* User Data  */}
          <div defaultValue="profile" className="space-y-6">
            <div value="profile" className="space-y-1">
              <UserDashBoard />
              <ProfileDetailCard
                isEditing={isEditing}
                values={draft}
                onChange={handleChange}
                onSubmit={handleSave}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
