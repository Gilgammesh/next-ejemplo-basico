import Image from "next/image";

const Users = ({ users }) => {
  const size = 150;

  const list = users.data.map((ele, index) => {
    return (
      <div key={ele.id} className="col mb-3" style={{ maxWidth: "540px" }}>
        <div className="card">
          <div className="row no-gutters">
            <div className="col-md-4">
              <Image
                // src={`https://i.pravatar.cc/${size}?img=${index}`}
                src={ele.avatar}
                width={size}
                height={size}
                className="card-img"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{ele.first_name}</h5>
                <p className="card-text">{ele.last_name}</p>
                <p className="card-text">{ele.email}</p>
                {/* <p className="card-text">
                  <small className="text-muted">{ele.phone}</small>
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="mt-2">
      <h3>
        Lista de Usuarios
        <span className="badge badge-danger ml-1">{users.per_page}</span>
      </h3>
      <div className="row row-cols-2 row-cols-md-3 mt-3">{list}</div>
    </div>
  );
};

export default Users;
