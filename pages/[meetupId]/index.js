import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return <MeetupDetail image="" title="" address="" description="" />;
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
      {
        params: {
          meetupId: "m3",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  // fetch data from an API

  const meetupId = context.params.meetupId;

  return {
    props: {
      meetupData: {
        image: "",
        id: "",
        title: "",
        address: "",
        description: "",
      },
    },
  };
}

export default MeetupDetails;
