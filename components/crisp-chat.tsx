"use client";
import { Crisp } from "crisp-sdk-web";
import { useEffect } from "react";

const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("112cdd2a-26b5-46fe-bc7a-253687f9c430");
  }, []);
  return null;
};

export default CrispChat;
