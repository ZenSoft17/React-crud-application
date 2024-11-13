import { useState } from "react";


// delete request construction function
const Delete = ({ headers, setState }) => {

  // funcional states
  const [Data, setData] = useState(null);
  const [Loading, setLoading] = useState(false);
  const [Error, setError] = useState(false);


  // drop request
  const FetchDelete = async (id) => {

    // data object for the request
    const updatedBodyData = { ...headers, id: id };
    try {
      setLoading(true);
      const Request = await fetch(
        `http://localhost/React-crud-application/server/endpoint/post.php`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedBodyData),
        }
      );

      const Response = await Request.json();
      setData(Response);
      setState((prev) => !prev);
    } catch (error) {
      console.error(new Error("Error has occurred in the request"), error);
      setError(true);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  
  // returns
  return { Data, Loading, Error, FetchDelete };
};

export default Delete;
