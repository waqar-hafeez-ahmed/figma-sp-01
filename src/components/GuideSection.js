import React from "react";
import Button from "react-bootstrap/Button";
import LightCard from "./UI/GuideCard.js";
import Img1 from "../public/assets/LC1.png";
import Img2 from "../public/assets/LC2.jpg";
import Img3 from "../public/assets/LC3.png";
import Img4 from "../public/assets/LC4.png";
import "../components/Style/GuideSection.css";

function GuideSection() {
  return (
    <div className="row">
      <div className="col guide-h2">
        <h2
          style={{
            color: "#18181F",
            fontFamily: "Sora",
            fontWeight: 700,
            paddingLeft: 30,
            paddingBottom: 10,
            marginTop: 50,
          }}
        >
          Tips/Guide for Everyone
        </h2>
        <hr />
        <div style={{ paddingLeft: 30 }}>
          <div class="guide-button" style={{ gap: 10, paddingBottom: 40 }}>
            <Button
              variant="outline-dark"
              style={{
                border: "1px solid #ECECEC",
                borderRadius: 10,
                fontFamily: "Roboto",
                height: 41,
                width: 155,
              }}
            >
              Business Guides
            </Button>{" "}
            <Button
              variant="outline-dark"
              style={{
                border: "1px solid #ECECEC",
                borderRadius: 10,
                fontFamily: "Roboto",
                height: 41,
                width: 123,
              }}
            >
              Data Guides
            </Button>{" "}
            <Button
              variant="outline-dark"
              style={{
                border: "1px solid #ECECEC",
                borderRadius: 10,
                fontFamily: "Roboto",
                height: 41,
                width: 245,
              }}
            >
              Writing & Copywriting Guides
            </Button>{" "}
            <Button
              variant="outline-dark"
              style={{
                border: "1px solid #ECECEC",
                borderRadius: 10,
                fontFamily: "Roboto",
                height: 41,
                width: 223,
              }}
            >
              Video & Animation Guides
            </Button>{" "}
            <Button
              variant="outline-dark"
              style={{
                border: "1px solid #ECECEC",
                borderRadius: 10,
                fontFamily: "Roboto",
                height: 41,
                width: 155,
              }}
            >
              Business Guides
            </Button>{" "}
            <Button
              variant="outline-dark"
              style={{
                border: "1px solid #ECECEC",
                borderRadius: 10,
                fontFamily: "Roboto",
                height: 41,
                width: 125,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span> See more </span>
              <i
                class="fa fa-angle-right"
                style={{
                  fontSize: 20,
                  position: "absolute",
                  marginTop: 1.2,
                  paddingLeft: 5,
                }}
              ></i>
            </Button>{" "}
          </div>
          <div className="row guide-row" style={{}}>
            <div className="col-md-3 pe-md-3">
              <LightCard
                src={Img1}
                desc={"What is data visualization (and why it is important)"}
              />
            </div>
            <div className="col-md-3 pe-md-2">
              <LightCard
                src={Img2}
                desc={"What is data visualization (and why it is important)"}
              />
            </div>
            <div className="col-md-3 pe-md-2">
              <LightCard
                src={Img3}
                desc={"What is data visualization (and why it is important)"}
              />
            </div>
            <div className="col-md-3 pe-md-2">
              <LightCard
                src={Img4}
                desc={"What is data visualization (and why it is important)"}
              />
            </div>
            <Button
              variant="outline-success"
              style={{
                fontFamily: "Roboto",
                height: 53,
                width: 138,
                marginBottom: 70,
                border: "1px solid #4F5054",
                // background: "#fffff",
                alignItems: "center",
                color: "#18181F",
                backgroundColor: "#ffff",
                fontWeight: 700,
              }}
            >
              Learn more
              <i
                class="fa fa-angle-right"
                style={{
                  fontSize: 20,
                  position: "absolute",
                  marginTop: 1.4,
                  paddingLeft: 5,
                }}
              ></i>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GuideSection;
