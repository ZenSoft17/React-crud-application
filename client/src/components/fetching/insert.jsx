import { useState } from "react";


// insert request constrution function
const Insert = ({ headers, setState, reference }) => {

  // funcional states
  const [Data, setData] = useState(null);
  const [Loading, setLoading] = useState(false);
  const [Error, setError] = useState(false);

  // Data object for the request
  const [BodyData, setBodyData] = useState({ ...headers });

  // onchange function.
  const Change = (e) => {
    setBodyData({
      ...BodyData,
      [e.target.name]: e.target.value,
    });
  };

  // onsubmit function
  const Submit = (e) => {
    e.preventDefault();

    // request and state management
    const Fetch = async () => {
      try {
        setLoading(true);
        const Request = await fetch(
          `http://localhost/React-crud-application/server/endpoint/post.php`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(BodyData),
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

    // excute and values reset
    Fetch();
    reference.current.reset();
  };

  // returns
  return { Data, Loading, Error, Submit, Change };
};

export default Insert;
