// lib/qaClient.ts
import { pipeline } from "@xenova/transformers";

// lib/qaClient.ts
let qa: any = null;
let isModelLoading = true; // Track if the model is loading

export async function getQAPipeline() {
  if (qa) return qa;

  // Dynamically import the transformer library only in the client
  const { pipeline } = await import('@xenova/transformers');

  // Start loading the model
  isModelLoading = true;
  qa = await pipeline(
    'question-answering',
    'Xenova/distilbert-base-uncased-distilled-squad',
    {
      progress_callback: (x:any) => console.log('Loading model...', x),
    }
  );

  isModelLoading = false; // Set loading state to false when model is loaded
  return qa;
}

export function getModelLoadingState() {
  return isModelLoading;
}
