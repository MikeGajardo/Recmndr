import React from "react";

const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=c84bc9400d084613ad02791a90a34969&response_type=code_redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";

export default function MusicServ() {
  return;
  <>
    <Container
      ClassName="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <Button className="btn btn-secondary" href={AUTH_URL}>
        Login to spotify
      </Button>
    </Container>
  </>;
}
