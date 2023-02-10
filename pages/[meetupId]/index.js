import MeetupDetail from '../../components/meetups/MeetupDetail';

const MeetupDetailsPage = (props) => {
  return (
    <MeetupDetail
      image={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
  );
};

export const getStaticPaths = async () => {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1',
        },
      },
      {
        params: {
          meetupId: 'm2',
        },
      },
    ],
  };
};

export const getStaticProps = async (context) => {
  const meetupId = context.params.meetupId;

  return {
    props: {
      meetupData: {
        image:
          'https://images.pexels.com/photos/3719037/pexels-photo-3719037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        title: 'A First Meetup',
        address: 'Some address 5, 12345 Some City',
        description: 'This is a first meetup',
      },
    },
  };
};

export default MeetupDetailsPage;
