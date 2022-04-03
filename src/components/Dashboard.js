import { Card } from "react-bootstrap";
import { useEffect, useState } from "react";

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Dashboard = () => {
  const data = [
    { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
    { name: "Page B", uv: 350, pv: 2400, amt: 2400 },
    { name: "Page C", uv: 150, pv: 2400, amt: 2400 },
    { name: "Page D", uv: 300, pv: 2400, amt: 2400 },
  ];
  return (
    <>
      <div className="row">
        <div className="col-md-12 fw-bold fs-3">Dashboard</div>
      </div>

      <div className="row mt-5">
        <div className="col-md-6 col-sm-12 mb-3 d-flex justify-content-center">
          <Card border="default" bg="default" className="shadow">
            {/* <Card.Header>Header</Card.Header> */}
            <Card.Body>
              <Card.Title className="text-center">
                <span className="text-brand greeting-text">Welcome Sajjad</span>
              </Card.Title>
              <Card.Text>
                You have done 57.6% more sales today. Check your new badge in
                your profile.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3 col-sm-12 mb-3 d-flex justify-content-center">
          <Card border="primary" bg="primary" text="white" className="shadow">
            <Card.Header>Header</Card.Header>
            <Card.Body>
              <Card.Title>Primary Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3 col-sm-12 mb-3 d-flex justify-content-center">
          <Card border="primary" bg="primary" text="white" className="shadow">
            <Card.Header>Header</Card.Header>
            <Card.Body>
              <Card.Title>Primary Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <Card className="mt-3 pb-5 mb-3">
            <h4 className="ms-3 mt-2">Sales</h4>
            <ResponsiveContainer width="95%" height={400}>
              <LineChart
                className="pt-2 pb-5"
                data={data}
                margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
              >
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
