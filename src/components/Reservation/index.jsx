import React from 'react';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import './style.css';

export const Reservation = () => {
  const { id } = useParams();
  const [reservation, setReservation] = useState(null);

  useEffect(() => {
    const fetchReservation = async () => {
      try {
        const response = await fetch(
          `https://apps.kodim.cz/daweb/leviexpress/api/reservation?id=${id}`,
        );
        console.log(id);
        if (response.ok) {
          const data = await response.json();
          setReservation(data.results);
          console.log(data);
        } else {
          console.error('Chyba při načítání jízdenky');
        }
      } catch (error) {
        console.error('Chyba při komunikaci s API', error);
      }
    };

    fetchReservation();
  }, [id]);

  if (!reservation) {
    console.log('Načítám detail jízdenky...');
    return <p>Načítám detail jízdenky...</p>;
  }

  return (
    <div className="reservation container">
      <h2>Vaše e-jízdenka č. {reservation.reservationId}</h2>
      <div className="reservation__body">
        <div className="reservation__headings">
          <p>Datum cesty: </p>
          <p>Odjezd:</p>
          <p>Příjezd:</p>
          <p>Sedadlo: </p>
        </div>
        <div className="reservation__info">
          <p>{reservation.date}</p>
          <p>
            {reservation.fromCity.name}, {reservation.fromCity.time}
          </p>
          <p>
            {reservation.toCity.name}, {reservation.toCity.time}
          </p>
          <p>{reservation.seatNumber}</p>
        </div>
      </div>
    </div>
  );
};
