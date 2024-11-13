import { useState, useEffect } from "react";

// select request function
const Select = ({State}) => {

  // funcional states
  const [Data, setData] = useState(null);
  const [Loading, setLoading] = useState(false);
  const [Error, setError] = useState(false);

  // select request
  const Fetch_Select = async () => {
    try {
      setLoading(true);
      const Request = await fetch(
        `http://localhost/React-crud-application/server/endpoint/get.php`,
        {
          method: "GET",
        }
      );

      const Response = await Request.json();
      setData(Response);
    } catch (error) {
      console.error(new Error("Error has occurred in the request"), error);
      setError(true);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  // execute and State's updates
  useEffect(() => {
    Fetch_Select();
  }, [State]);

  // returns
  return { Data, Loading, Error };
};

export default Select;


// note : this function only worked for a request.

// if need more request, you should more by this functions and more endpoints.