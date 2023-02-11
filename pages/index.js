import Head from 'next/head';
import MeetupList from '../components/meetups/MeetupList';

const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>React Meetups</title>
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
};

export const getStaticProps = async (request, params) => {
  const response = await fetch(
    'https://vicroads-assistant.firebaseio.com/meetups.json'
  );
  const data = await response.json();

  const meetupData = Object.entries(data).map((i) => {
    const [k, v] = i;
    return {
      id: k,
      title: v.title,
      description: v.description,
      address: v.address,
      image: v.image,
    };
  });

  console.log(meetupData);

  return {
    props: {
      meetups: meetupData,
    },
    revalidate: 10,
  };
};

export default HomePage;
