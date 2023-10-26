import React from 'react';
import { JourneyPicker } from '../JourneyPicker';
import { useState } from 'react';
import { JourneyDetail } from '../JourneyDetail';
import { SelectedSeat } from '../SelectedSeat';
import { useNavigate } from 'react-router';

export const Home = () => {
  const [journey, setJourney] = useState(null);
  const navigate = useNavigate();

  const handleJourneyChange = (journey) => {
    setJourney(journey);
  };

  const handleBuy = () => {
    if (!journey) {
      console.log('Nelze provést nákup, nebylo vybráno spojení.');
      return;
    }
    fetch('https://apps.kodim.cz/daweb/leviexpress/api/reservation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action: 'create',
        seat: journey.autoSeat,
        journeyId: journey.journeyId,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        const reservationId = data.results.reservationId;

        console.log('Jízdenka zakoupena:', data);
        console.log('reservationId:', reservationId);

        navigate(`/reservation/${reservationId}`);
      })
      .catch((error) => {
        console.error('Chyba při nákupu jízdenky:', error);
      });
  };

  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      <SelectedSeat number={journey ? journey.autoSeat : null} />
      <JourneyDetail journey={journey} />
      <div className="controls container">
        <button className="btn btn--big" type="button" onClick={handleBuy}>
          Rezervovat
        </button>
      </div>
    </main>
  );
};
