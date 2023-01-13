import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Create = () => {
  const [id, idChange] = useState("");
  const [name, nameChange] = useState("");
  const [email, emailChange] = useState("");
  const [active, activeChange] = useState(true);
  const [validation, valChange] = useState(false);

  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    const empdata = { name, email, active };

    fetch("http://localhost:8000/employee", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(empdata),
    })
      .then((res) => {
        alert("Salvo com sucesso.");
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={handlesubmit}>
            <div className="card" style={{ textAlign: "left" }}>
              <div className="card-title d-flex flex-row bd-highlight mb-3 mt-3 text-primary">
                <h2>Employee Create</h2>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12 mb-3">
                    <div className="form-group">
                      <label>Id</label>
                      <input
                        value={id}
                        disabled="disabled"
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12 mb-3">
                    <div className="form-group">
                      <label>Nome</label>
                      <input
                        required
                        value={name}
                        onMouseDown={(e) => valChange(true)}
                        onChange={(e) => nameChange(e.target.value)}
                        className="form-control"
                      ></input>
                      {name.length === 0 && validation && (
                        <span className="text-danger">Digite um nome</span>
                      )}
                    </div>
                  </div>

                  <div className="col-lg-12 mb-3">
                    <div className="form-group">
                      <label>E-mail</label>
                      <input
                        value={email}
                        onChange={(e) => emailChange(e.target.value)}
                        className="form-control"
                        type="email"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12 mb-3">
                    <div className="form-check">
                      <input
                        checked={active}
                        onChange={(e) => activeChange(e.target.checked)}
                        type="checkbox"
                        className="form-check-input"
                      ></input>
                      <label className="form-check-label">Cadastro ativo</label>
                    </div>
                  </div>
                  <div className="col-lg-12 mb-3 ">
                    <div className="form-group form-group d-flex justify-content-between">
                      <button
                        className="btn btn-success form-group d-flex justify-content-between btn-sm"
                        type="submit"
                      >
                        Salvar
                      </button>
                      <Link to="/" className="btn btn-danger btn-sm">
                        Voltar
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Create;
