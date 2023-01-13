import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const TodoList = () => {
  const [empdata, empdatachange] = useState(null);
  const navigate = useNavigate();

  const LoadDetail = (id) => {
    navigate("/employee/detail/" + id);
  };
  const LoadEdit = (id) => {
    navigate("/employee/edit/" + id);
  };
  const Removefunction = (id) => {
    if (window.confirm("Do you want to remove?")) {
      fetch("http://localhost:8000/employee/" + id, {
        method: "DELETE",
      })
        .then((res) => {
          alert("Removed successfully.");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  useEffect(() => {
    fetch("http://localhost:8000/employee")
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
    <>
      <div className="container">
        <div className="card">
          <div className="card-title d-flex flex-row bd-highlight mb-3 mt-3 text-primary">
            <h3>Lista de tarefas</h3>
          </div>
          <div className="card-body">
            <table className="table table-bordered">
              <thead className="bg-primary text-white">
                <tr>
                  <td>Id</td>
                  <td>Name</td>
                  <td>Email</td>

                  <td>Ação</td>
                </tr>
              </thead>
              <tbody>
                {empdata &&
                  empdata.map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>

                      <td className="d-flex justify-content-evenly">
                        <a
                          onClick={() => {
                            LoadEdit(item.id);
                          }}
                          className="btn btn-success btn-sm"
                        >
                          Editar
                        </a>
                        <a
                          onClick={() => {
                            Removefunction(item.id);
                          }}
                          className="btn btn-danger btn-sm"
                        >
                          Deletar
                        </a>
                        <a
                          onClick={() => {
                            LoadDetail(item.id);
                          }}
                          className="btn btn-primary btn-sm"
                        >
                          Detalhe
                        </a>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <div className="divbtn d-flex flex-row bd-highlight mb-3 mt-3">
              <Link to="employee/create" className="btn btn-success ">
                Nova tarefa
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoList;
