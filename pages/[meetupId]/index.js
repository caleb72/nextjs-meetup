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
  const response = await fetch(
    'https://vicroads-assistant.firebaseio.com/meetups.json'
  );
  const data = await response.json();

  return {
    fallback: false,
    paths: Object.keys(data).map((k) => {
      return {
        params: {
          meetupId: k,
        },
      };
    }),
  };
};

export const getStaticProps = async (context) => {
  const meetupId = context.params.meetupId;

  const response = await fetch(
    `https://vicroads-assistant.firebaseio.com/meetups.json?orderBy="$key"&equalTo="${meetupId}"`
  );
  const data = await response.json();

  return {
    props: {
      meetupData: { id: meetupId, ...data[meetupId] },
    },
    revalidate: 10,
  };
};

export default MeetupDetailsPage;
