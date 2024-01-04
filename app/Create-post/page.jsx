"use client";

import React from "react";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Form from "@components/Form";
import { set } from "mongoose";

function CreatePrompt() {
  const router = useRouter();
  const { data: session } = useSession();
  const [submitting, setsubmitting] = useState(false);
  const [post, setpost] = useState({
    prompt: "",
    tag: "",
  });

  const CreatePrompt = async (e) => {
    e.preventDefault();
    setsubmitting(true);

    try {
      const response = await fetch("api/Prompts/New", {
        method: "POST",
        body: JSON.stringify({
          prompt: post.prompt,
          userId: session?.user.id,
          tag: post.tag,
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setsubmitting(false);
    }
  };

  return (
    <Form
      type="Create"
      post={post}
      setpost={setpost}
      submitting={submitting}
      handlesubmitting={CreatePrompt}
    />
  );
}

export default CreatePrompt;
