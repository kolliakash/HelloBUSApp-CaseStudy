import React from "react";
import { Row, Col } from "antd";
import "../resourses/bus.css";

function SeatSelection({ selectedSeats, setSelectedSeats, bus }) {
  const capacity = bus.capacity;
  const percentageFilled = (bus.seatsBooked.length/capacity)*100;

  const selectOrUnselectSeats = (seatNumber) => {
    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
    } else {
      setSelectedSeats([...selectedSeats, seatNumber]);
    }
  };

  return (
    <div className="mx-5">
      <div className="bus-container">
        <Row gutter={[10, 10]}>
          {Array.from(Array(capacity).keys()).map((seat) => {
            let seatClass = ''
            if(selectedSeats.includes(seat+1))
            {
                seatClass = 'selected-seat'
            }else if (bus.seatsBooked.includes(seat+1))
            {   
                if(percentageFilled <= 60) seatClass = 'green-seat'
                else if(percentageFilled <= 90) seatClass = 'yellow-seat'
                else seatClass = 'red-seat'
            }
            return (
              <Col span={6}>
                <div
                  className={`seat ${seatClass}`}
                  onClick={() => selectOrUnselectSeats(seat + 1)}
                >
                  {seat + 1}
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}

export default SeatSelection;
