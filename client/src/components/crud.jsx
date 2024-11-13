import { useState, useRef } from "react";
import Select from "./fetching/select";
import Insert from "./fetching/insert";
import Delete from "./fetching/delete";
import Update from "./fetching/update";

const Crud = () => {

  // state for refresh table
  const [State, setState] = useState(false);

  // refs by form update and form insert.
  const refrence = useRef();
  const reference2 = useRef();

  // call by constructor request functions
  const { Data : InsertData, Error : InsertError, Loading : InsertLoading, Change, Submit} = Insert({ headers: { key: "insert" }, setState: setState, reference: refrence, });
  const { Data : DeleteData, Error : DeleteError, Loading : DeleteLoading, FetchDelete } = Delete({ headers: { key: "delete" }, setState: setState });
  const { Data : UpdateData, Error : UpdateError, Loading : UpdateLoading, View, ValueData, HandleUpdate, Submit : UpdateSubmit, Change : UpdateChange} = Update({ headers: { key: "update"}, setState: setState, reference: reference2 });
  const { Data, Loading, Error } = Select({ State: State });

  
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Data</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Error ? (
            <tr>
              <td colSpan="3">Error has occurred in the request</td>
            </tr>
          ) : Loading ? (
            <tr>
              <td colSpan="3">Appication is loading</td>
            </tr>
          ) : Data && Data.data.length > 0 ? (
            Data.data.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.data}</td>
                <td>
                  <button onClick={() => HandleUpdate({id : item.id, data : item.data})}>edit</button>
                  <button onClick={() => FetchDelete(item.id)}>Drop</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">Don't exist data</td>
            </tr>
          )}
        </tbody>
      </table>

      <br />
      <br />
      <br />

      <form ref={refrence} onSubmit={Submit}>
        <h1>add</h1>
        <label htmlFor="data">
          <input type="text" id="data" name="data" onChange={Change} />
        </label>
        <button type="submit">Save</button>
      </form>

      {View ? (
        <form ref={reference2} onSubmit={UpdateSubmit} >
          <h1>Update</h1>
          <label htmlFor="data">
            <input
              type="text"
              id="data"
              name="data"
              defaultValue={ValueData ? ValueData : ""}
              onChange={UpdateChange}
            />
          </label>
          <button type="submit">Save</button>
        </form>
      ) : (
        ""
      )}
    </div>
  );
};

export default Crud;
