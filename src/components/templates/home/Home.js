import React, { useEffect, useState } from "react";
import Loading from "../loading/Loading";
import "./home.css";
const url = "https://admin.naxa.com.np/api/projects";
function Home() {
  const [data, setData] = useState();
  const [modelData, setModelData] = useState();

  const fetchUrl = async () => {
    const response = await fetch(url);
    const result = await response.json();
    setData(result);
  };

  const filterFun = (id) => {
    const latestData = data.filter((newData) => {
      return id === newData.id;
    });
    setModelData(...latestData);
  };

  useEffect(() => {
    fetchUrl();
  }, []);
  if (!data) {
    return <Loading />;
  }
  return (
    <div className="home">
      <div className="content">
        {data.map((newData) => {
          const {
            id,
            category_title,
            category_description,
            focus_area,
            photo,
            title,
            subtitle,
            clients,
            start_date,
            end_date,
            description,
            project_order,
          } = newData;

          return (
            <React.Fragment key={id}>
              <div
                className="innerContent"
                data-bs-toggle="modal"
                href="#exampleModalToggle"
                role="button"
                onClick={() => {
                  filterFun(id);
                }}
              >
                <h4 style={{ padding: "10px" }}>{title}</h4>
                <p style={{ padding: "10px" }}>{subtitle}</p>
                <div className="lowCnt">
                  <div>
                    <h5 style={{ color: "#ffab00" }}>Client</h5>
                    <p>{clients}</p>
                  </div>
                  <div>
                    <h5 style={{ color: "#ffab00" }}>Time Period</h5>
                    <p>
                      {start_date} - {end_date}
                    </p>
                  </div>
                </div>
                <div className="photo">
                  <img src={photo} alt="logo" />
                </div>
              </div>
            </React.Fragment>
          );
        })}
        <div
          className="modal fade"
          id="exampleModalToggle"
          aria-hidden="true"
          aria-labelledby="exampleModalToggleLabel"
          tabIndex="-1"
        >
          <div className="modal-dialog modal-fullscreen">
            <div className="modal-content">
              <div className="modal-header">
                {/* <h5 className="modal-title" id="exampleModalToggleLabel">
                  Modal 1
                </h5> */}
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              {modelData && (
                <div className="modal-body">
                  <div className="modelPic">
                    <img src={modelData.photo} alt="" />
                    <div className="modelPicCnt">
                      <h3>{modelData.title}</h3>
                      <p>{modelData.subtitle}</p>
                      <div className="div">
                        <div className="left">
                          <span>Client</span>
                          <p>{modelData.clients}</p>
                        </div>
                        <div className="right">
                          <span>Time Duration</span>
                          <p>
                            {modelData.start_date} - {modelData.end_date}
                          </p>
                        </div>
                        <div className="left">
                          <span>Focuss Area</span>
                          <p>{modelData.focus_area}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="description">{modelData.description}</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="apiData"></div>
    </div>
  );
}

export default Home;
