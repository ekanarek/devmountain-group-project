import { useState } from "react";

export default function LandingPage() {
  //sample response
  const sampleUserObject = {
    country: "string",
    display_name: "Jon",
    email: "jon33@gmail.com",
    explicit_content: {
      filter_enabled: false,
      filter_locked: false,
    },
    external_urls: {
      spotify: "string",
    },
    followers: {
      href: "string",
      total: 0,
    },
    href: "string",
    id: "string",
    images: [
      {
        url: "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228",
        height: 300,
        width: 300,
      },
    ],
    product: "string",
    type: "string",
    uri: "string",
  };

  const [serverData, setServerData] = useState(sampleUserObject);

  return (
    <>
      <h3>You made it, {serverData.display_name}!</h3>
      <h4>Email: {serverData.email}</h4>
    </>
  );
}