import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image:
      'https://images.pexels.com/photos/3719037/pexels-photo-3719037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    address: 'Some address 5, 12345 Some City',
    description: 'This is a first meetup',
  },
  {
    id: 'm2',
    title: 'A Second Meetup',
    image:
      'https://images.pexels.com/photos/9034736/pexels-photo-9034736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    address: 'Some address 10, 987654 Some City',
    description: 'This is a second meetup',
  },
];

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

export const getStaticProps = async (request, params) => {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 10,
  };
};

export default HomePage;
