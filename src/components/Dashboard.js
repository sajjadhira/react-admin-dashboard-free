import { Card } from "react-bootstrap";
import { useEffect, useState } from "react";

const Dashboard = () => {
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
              <Card.Title className="text-center fs-5">
                <span className="text-brand">Welcome Sajjad</span>
              </Card.Title>
              <Card.Text>
                You have done 57.6% more sales today. Check your new badge in
                your profile.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3 col-sm-12 mb-3 d-flex justify-content-center">
          <Card border="primary" bg="primary" text="white">
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
          <Card border="primary" bg="primary" text="white">
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
    </>
  );
};

export default Dashboard;
