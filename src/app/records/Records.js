'use client';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Box,
  Button,
  Card,
  Center,
  Flex,
  Grid,
  Heading,
  HStack,
  Input,
  Text,
} from '@chakra-ui/react';
import {
  PaginationItems,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRoot,
} from '../../components/ui/pagination';
import Link from 'next/link';
import { RECORDS_PAGE_SIZE } from '../../constants';
import DroidLoading from '../../components/Loading/DroidLoading';

export default function RecordsPage({ data = [], page = 1, total = 0 }) {
  const [fetching, setFetching] = useState(false);
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');

  const handlePageChange = ({ page }) => {
    setFetching(true);
    if (searchTerm) {
      router.push(`?search=${searchTerm}&page=${page}`);
    } else {
      router.push(`?page=${page}`);
    }
  };

  const handleSearch = useCallback(() => {
    setFetching(true);
    router.push(`?search=${searchTerm}`);
  }, [router, searchTerm]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Enter') {
        handleSearch();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleSearch, searchTerm]);

  useEffect(() => {
    if (data) {
      setFetching(false);
    }
  }, [data]);

  if (fetching) return <DroidLoading />;
  return (
    <Box p="4">
      <Center>
        <Heading mb="4" fontSize="2xl">
          <Link href="/records">List of Breweries</Link>
        </Heading>
      </Center>
      <Heading mb="4">Total count: {total}</Heading>
      <Flex gap={2}>
        <Input
          placeholder="search breweries..."
          mb="4"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />

        <Button onClick={handleSearch}>Search</Button>
      </Flex>
      {data.length === 0 ? (
        <Center>
          <Text textStyle="2xl">No breweries found yet</Text>
        </Center>
      ) : (
        <Grid gridTemplateColumns="repeat(12, 1fr)" gap={6}>
          {data.map(({ id, name, address_1 }) => {
            return (
              <Box
                flexBasis="25%"
                key={id}
                gridColumn={{
                  base: 'span 12',
                  sm: 'span 12',
                  md: 'span 6',
                  lg: 'span 4',
                  xl: 'span 3',
                }}
              >
                <Card.Root overflow="hidden">
                  <Card.Body gap="2">
                    <Card.Title>{name}</Card.Title>
                    <Card.Description>Address: {address_1}</Card.Description>
                  </Card.Body>
                  <Card.Footer gap="2">
                    <Button variant="solid" asChild size="sm">
                      <Link href={`/records/${id}`}>See More</Link>
                    </Button>
                  </Card.Footer>
                </Card.Root>
              </Box>
            );
          })}
        </Grid>
      )}
      {total > RECORDS_PAGE_SIZE && (
        <Flex justify="center" mt={3}>
          <PaginationRoot
            count={total}
            pageSize={RECORDS_PAGE_SIZE}
            defaultPage={parseInt(page)}
            onPageChange={handlePageChange}
          >
            <HStack>
              <PaginationPrevTrigger />
              <PaginationItems />
              <PaginationNextTrigger />
            </HStack>
          </PaginationRoot>
        </Flex>
      )}
    </Box>
  );
}
