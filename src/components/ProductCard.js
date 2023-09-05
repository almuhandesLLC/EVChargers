import {
  AspectRatio,
  Box,
  Button,
  HStack,
  Image,
  Link,
  Skeleton,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { Rating } from './Rating';
import { FavouriteButton } from './FavouriteButton';
import { PriceTag } from './PriceTag';
import { Link as RouterLink } from 'react-router-dom';

export const ProductCard = (props) => {
  const { product, rootProps } = props;
  const { id, name, imageUrl, imageSource, price, salePrice, ratingCount, rating } = product;

  const handleViewDetails = () => {
    window.scrollTo(0, 0)
    console.log(`Navigating to product with ID: ${id}`);
  };



  return (
    <Stack
      spacing={{
        base: '4',
        md: '5',
      }}
      {...rootProps}
    >
      <Box position="relative">
        <AspectRatio ratio={4 / 4}>
        {/* activite the useEffect to scroll to top */}
        <Link as={RouterLink} to={`/products/${id}`} onClick={handleViewDetails}>

          <Image
            src={imageUrl? imageUrl : imageSource}
            alt={name}
            draggable="false"
            fallback={<Skeleton />}
            borderRadius={{
              base: 'md',
              md: 'xl',
            }}
          />
          </Link>
        </AspectRatio>
        <FavouriteButton
          position="absolute"
          top="4"
          right="4"
          aria-label={`Add ${name} to your favourites`}
        />
      </Box>
      <Stack>
        <Stack spacing="1">
          <Text fontWeight="medium" color={useColorModeValue('gray.700', 'gray.400')}>
            {name}
          </Text>
          <PriceTag price={price} salePrice={salePrice} currency="AED" />
        </Stack>
        <HStack>
          <Rating defaultValue={rating} size="sm" />
          <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')}>
            {ratingCount}
          </Text>
        </HStack>
      </Stack>
      <Stack align="center">
        <Link as={RouterLink} to={`/products/${id}`}>
          <Button colorScheme="green" width="full" onClick={handleViewDetails}>
            View Details
          </Button>
        </Link>
        <Link
          textDecoration="underline"
          fontWeight="medium"
          color={useColorModeValue('gray.600', 'gray.400')}
          href="https://wa.me/971501679410"
        >
          Order Now
        </Link>
      </Stack>
    </Stack>
  );
};
