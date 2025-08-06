import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { subjectsColors, voices } from "@/constants";
import { CreateAssistantDTO } from "@vapi-ai/web/dist/api";
import type { ClientMessage, ServerMessage } from "@vapi-ai/web/dist/api";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getSubjectColor = (subject: string) => {
  return subjectsColors[subject as keyof typeof subjectsColors];
};

export const configureAssistant = (voice: string, style: string) => {
  const voiceId = voices[voice as keyof typeof voices][
          style as keyof (typeof voices)[keyof typeof voices]
          ] || "sarah";

  const vapiAssistant: CreateAssistantDTO = {
    name: "Companion",
    firstMessage:
        "Hello, let's start the session. Today we'll be talking about {{topic}}.",
    transcriber: {
      provider: "deepgram",
      model: "nova-3",
      language: "en",
    },
    voice: {
      provider: "11labs",
      voiceId: voiceId,
      stability: 0.4,
      similarityBoost: 0.8,
      speed: 1,
      style: 0.5,
      useSpeakerBoost: true,
    },
    model: {
      provider: "openai",
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: `You are a highly knowledgeable tutor teaching a real-time voice session with a student. Your goal is to teach and engage the student naturally.
        
        Tutor Guidelines:
        - Focus on the given topic: {{ topic }} and subject: {{ subject }}.
        - Break down the topic into smaller parts and teach one part at a time.
        - Maintain a {{ style }} style of conversation.
        - Keep responses short, like in a real voice conversation.
        - Check regularly that the student is following and understanding.
        - Keep the conversation flowing and natural.
        - If the student asks something unrelated to the topic or subject, go with it and respond helpfully and conversationally.
        - It's okay to temporarily move away from the original topic if the student seems more engaged with another question.
        - Do not include any special characters in your responses — this is a voice conversation.
        `
        },
      ],
    },
    //clientMessages: "conversation-update",
    //serverMessages: "conversation-update",
  };
  return vapiAssistant;
};