import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A first meetup",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgWy3DLSoDNZxaoOiVo3G9I7-fXtRAztlpB8YtYejl&s",
    address: "Some 5, 12345 City",
    description: "Description here",
  },
  {
    id: "m2",
    title: "A second meetup",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgWy3DLSoDNZxaoOiVo3G9I7-fXtRAztlpB8YtYejl&s",
    address: "Some 6, 12345 City",
    description: "Description here",
  },
  {
    id: "m3",
    title: "A third meetup",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgWy3DLSoDNZxaoOiVo3G9I7-fXtRAztlpB8YtYejl&s",
    address: "Some 7, 12345 City",
    description: "Description here",
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export function getStaticProps() {
  // fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 1,
  };
}

/*export async function getServerSideProps(context) {
  const req = context.req;
  const res = context.res;

  // fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
}*/

export default HomePage;
