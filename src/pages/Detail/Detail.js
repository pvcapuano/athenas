import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Detail = () => {
  const { empid } = useParams();

  const [empdata, empdatachange] = useState({});

  useEffect(() => {
    fetch("http://localhost:8000/employee/" + empid)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        empdatachange(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div>
      <div className="container">
        <div className="card row" style={{ textAlign: "left" }}>
          <div className="card-title d-flex flex-row bd-highlight mb-3 mt-3 text-primary">
            <h2>Detalhes</h2>
          </div>
          <div className="card-body"></div>

          {empdata && (
            <div>
              <h3>
                Nome : <b>{empdata.name}</b> ({empdata.id})
              </h3>

              <h5 className="mb-4 mt-4">E-mail : {empdata.email}</h5>

              <Link className="btn btn-danger mb-4 btn-sm" to="/">
                Voltar
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Detail;
