import { useState } from "react";


// update request construction function
const Update = ({ headers, setState, reference }) => {

  // funcional states
  const [Data, setData] = useState(null);
  const [Loading, setLoading] = useState(false);
  const [Error, setError] = useState(false);

  // from data and state
  const [View, setView] = useState(false);
  const [ValueData, setValueData] = useState(null);

  // Data object for the request
  const [BodyData, setBodyData] = useState({ ...headers });

  // function edit and data extraction.
  const HandleUpdate = ({ id, data }) => {
    setView(true);
    setValueData(data);
    setBodyData({
      ...BodyData,
      id : id
    });
    console.log();
    
  };

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
    setView(false);
    setValueData(null);
  };

  // returns
  return { View, ValueData, HandleUpdate, Change, Submit };
};

export default Update;
