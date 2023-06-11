import React, { useState } from "react";

const Problem1 = () => {
  const [show, setShow] = useState("all");
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [data, setData] = useState([]);
  const active = [];
  const completed = [];
  const other = [];
  //   const all = { ...active, ...completed, ...other };

  for (let i = 0; i < data.length; i++) {
    if (data[i].status === "active") {
      active.push(data[i]);
    } else if (data[i].status === "completed") {
      completed.push(data[i]);
    } else {
      other.push(data[i]);
    }
  }

  const handleForm = (e) => {
    e.preventDefault();
    setData([
      ...data,
      {
        id: Math.floor(Math.random() * 1000),
        name: name,
        status: status,
      },
    ]);
    setName("");
    setStatus("");
  };

  const handleClick = (val) => {
    setShow(val);
  };

  const allSortedData = [...active, ...completed, ...other];
  const filtered = data && data.filter((d) => d.status === show);

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
        <div className="col-6 ">
          <form
            className="row gy-2 gx-3 align-items-center mb-4"
            onSubmit={(e) => handleForm(e)}
          >
            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="col-8">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
              <button
                className={`nav-link ${show === "all" && "active"}`}
                type="button"
                onClick={() => handleClick("all")}
              >
                All
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "active" && "active"}`}
                type="button"
                onClick={() => handleClick("active")}
              >
                Active
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "completed" && "active"}`}
                type="button"
                onClick={() => handleClick("completed")}
              >
                Completed
              </button>
            </li>
          </ul>
          <div className="tab-content"></div>
          <table className="table table-striped ">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {data && show === "all"
                ? allSortedData.map((d) => (
                    <tr key={d.id}>
                      <td>{d.name}</td>
                      <td>{d.status}</td>
                    </tr>
                  ))
                : filtered.map((data) => (
                    <tr key={data.id}>
                      <td>{data.name}</td>
                      <td>{data.status}</td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Problem1;
