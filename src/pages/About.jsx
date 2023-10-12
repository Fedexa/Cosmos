import { Flex, Heading, Image } from '@chakra-ui/react';
import ariesMu from '../images/AriesMu.png';
import papyrus from '../images/PapyrusBack.jpeg';
import classes from './About.module.css';

const About = () => {
  const firstPapyrus = (
    <Flex
      className={`${classes.papyrusBox} ${classes.outerFlex}`}
      style={{
        background: `linear-gradient(to top, rgba(199, 157, 115, 0.8), rgba(163, 126, 83, 0.94)), url(${papyrus})`,
      }}
    >
      <Heading
        className={classes.heading}
        fontFamily='papyrus'
      >
        Saint Seiya
      </Heading>
      <Flex className={classes.innerFlex}>
        Saint Seiya is a manga and anime originally created by
        Masami Kurumada in 1985. The plot of the story centers
        around a group of young warriors known as Saints that
        fight alongside the Greek Goddess Athena to protect
        humanity against the forces of evil.
      </Flex>
    </Flex>
  );

  const secondPapyrus = (
    <Flex
      style={{
        background: `linear-gradient(to top, rgba(199, 157, 115, 0.8), rgba(163, 126, 83, 0.9)), url(${papyrus})`,
      }}
      className={`${classes.papyrusBox} ${classes.outerFlex}`}
    >
      <Heading
        className={classes.heading}
        fontFamily='papyrus'
      >
        Cosmos Warriors
      </Heading>
      <Flex className={classes.innerFlex}>
        Cosmos Warriors is a Saint Seiya demo website created by
        me, Federico Sánchez, with the purpose of putting into
        practice many of the React concepts that I have learnt so
        far about the world of web development.
      </Flex>
    </Flex>
  );

  const MuExplain = (
    <Image
      display={{ base: 'none', md: 'none', lg: 'block', xl: 'block' }}
      src={ariesMu}
    />
  );

  return (
    <Flex
    className={classes.totalFlex}
      minH='70vh'
      mt={{ base: '190px', sm: '50px', md: '90px', lg: '100px', xl: '120px' }}
      mb={{ base: '120px', sm: '-30px', md: '10px', lg: '35px', xl: '40px' }}
      mx={{ base: '2%', sm: '15%', md: '24%', lg: '4%', xl: '10%' }}
      flexDir={{ base: 'column', sm: 'column', md: 'column', lg: 'row' }}
      // flexWrap={{ base: 'wrap', md: 'wrap', lg: 'nowrap' }}
    >
      {MuExplain}
      <Flex wrap='wrap' flexDirection={{ base: 'column', sm: 'column', md: 'column', lg: 'row',  xl: 'row' }} px={{ sm: '15px', md: '20px', lg: '5px',  xl: '30px' }} className={classes.wrapperBoxesFlex}>
        {firstPapyrus}
        {secondPapyrus}
      </Flex>
    </Flex>
  );
};

export default About;