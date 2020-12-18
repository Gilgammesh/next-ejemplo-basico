import { useRouter } from "next/router";
import Image from "next/image";

const User = ({ user }) => {
  const router = useRouter();

  const size = 150;
  return (
    <div className="col mb-3">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-md-4">
            <span
              onClick={() =>
                router.push({
                  pathname: "/users/[id]",
                  query: { id: user.id },
                })
              }
              style={{ cursor: "pointer" }}
            >
              <Image
                src={user.avatar}
                width={size}
                height={size}
                className="card-img"
              />
            </span>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{user.first_name}</h5>
              <p className="card-text">{user.last_name}</p>
              <p className="card-text">{user.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
