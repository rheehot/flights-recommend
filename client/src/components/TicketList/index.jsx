import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';
import GET_TICKETS from './query';
import TicketItem from './TicketItem';

const TicketList = _ => {
  const { loading, error, data } = useQuery(GET_TICKETS);

  if (loading) return <div>loading...</div>;
  //   if (error) return <div>error</div>;

  //   const Tickets = data.tickets.map(({ name, airport }) => <TicketItem key={airport} name={name} />);

  const Tickets = [
    { _id: '1', tripType: 'OW', cities: [{ name: '인천', airport: 'INC' }] },
    { _id: '2', tripType: 'RT', cities: [{ name: '바르셀로나', airport: 'BC' }] },
    {
      _id: '3',
      tripType: 'MD',
      cities: [
        { name: '마드리드', airport: 'MD' },
        { name: '뉴욕', airport: 'NY' },
      ],
    },
    {
      _id: '4',
      tripType: 'MD',
      cities: [
        {
          name: '마드리드',
          airport: 'MD',
        },
        {
          name: '인천',
          airport: 'INC',
        },
        {
          name: '바르셀로나',
          airport: 'BC',
        },
      ],
    },
  ].map(({ _id, tripType, cities }) => (
    <TicketItem key={_id} tripType={tripType} cities={cities} />
  ));

  return <div>{Tickets}</div>;
};

export default TicketList;