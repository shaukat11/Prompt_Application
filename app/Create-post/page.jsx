"use client";

import React from "react";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Form from "@components/Form";

function CreatePrompt() {
  const [submitting, setsubmitting] = useState(false);
  const [post, setpost] = useState({
    prompt: "",
    tag: "",
  });

  const CreatePrompt = async (e) => {
    window.alert("owl");
  };

  return (
    <Form
      type="create"
      post={post}
      setpost={setpost}
      submitting={submitting}
      handlesubmitting={CreatePrompt}
    />
  );
}

export default CreatePrompt;
