'use client';

import React from 'react';
import { Box, Text, Container, Table, Heading, Center, Button } from '@chakra-ui/react';
import { API_RESPONSES } from '../../../constants';
import Link from 'next/link';

export default function Record({ data }) {
  if (data.detail === API_RESPONSES.notFound) {
    return <Text>Brewer not found</Text>;
  }
  return (
    <Container>
      <Center>
        <Heading mb="4">{data.name}</Heading>
      </Center>
      <Box shadow={'sm'}>
        <Table.Root width="100%">
          <Table.Body>
            <Table.Row>
              <Table.Cell>Brewery type</Table.Cell>
              <Table.Cell>{data.brewery_type}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Address</Table.Cell>
              <Table.Cell>{data.address_1}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Street</Table.Cell>
              <Table.Cell>{data.street}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>City</Table.Cell>
              <Table.Cell>{data.city}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Country</Table.Cell>
              <Table.Cell>{data.country}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>State</Table.Cell>
              <Table.Cell>{data.state}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>State Province</Table.Cell>
              <Table.Cell>{data.state_province}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Postal Code</Table.Cell>
              <Table.Cell>{data.postal_code}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Phone</Table.Cell>
              <Table.Cell>{data.phone}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>
      </Box>
      <Button mt={3}>
        <Link href="/records">Back to Breweries</Link>
      </Button>
    </Container>
  );
}
