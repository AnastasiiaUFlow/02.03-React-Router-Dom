import { useParams } from "react-router-dom";
function UserProfile() {
  const { userId } = useParams();
  return (
    <div>
      <h2>Profile page</h2>
      <h3>User ID:{userId}</h3>
    </div>
  );
}
export default UserProfile;