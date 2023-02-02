import React, { useState } from "react";

function ProfilePage({ currentUser, currentUserPet, posts, updatePetName }) {
  const [petName, setPetName] = useState(currentUserPet);

  const handleUpdatePetName = (e) => {
    e.preventDefault();
    updatePetName(petName);
    console.log(`Pet name updated to: ${petName}`);
  };

  return (
    <div>
      <h1>{currentUser}'s Profile</h1>
      <h2>Pet: {currentUserPet}</h2>
      <form onSubmit={handleUpdatePetName}>
        <label>
          Change Pet Name:
          <input
            type="text"
            value={petName}
            onChange={(e) => setPetName(e.target.value)}
          />
        </label>
        <button type="submit">Update</button>
      </form>
      <h2>Posts</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <p>{post.content}</p>
          <p>{post.date}</p>
        </div>
      ))}
    </div>
  );
}

export default ProfilePage;