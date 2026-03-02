import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useActor } from "./useActor";

export function useSubmitInquiry() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      name,
      phone,
      city,
      message,
    }: {
      name: string;
      phone: string;
      city: string;
      message: string;
    }) => {
      if (!actor) throw new Error("Backend not available");
      await actor.submitInquiry(name, phone, city, message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["inquiries"] });
    },
  });
}
