import React, { useState, useEffect } from "react";
import axios from "axios";

export default function useAuth() {
  const [accessToken, setAccessToken] = useState();
  const [refreshToken, setRefreshToken] = useState();
  const [accessToken, setExpiresIn] = useState();

  useEffect(() => {
    axios
      .post("http://localhost:3000", {
        code,
      })
      .then(res => {
        console.log(res.data)
      });
  }, [code]);
}
