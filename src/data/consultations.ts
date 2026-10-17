// Content-planning categories only. Add specific conditions here only after
// the clinic confirms both the wording and the service scope.
export const consultationTopics = [
  { id: 'musculoskeletal', conditionsPendingReview: [] as string[] },
  { id: 'sleepStress', conditionsPendingReview: [] as string[] },
  { id: 'digestive', conditionsPendingReview: [] as string[] },
  { id: 'womensHealth', conditionsPendingReview: [] as string[] },
  { id: 'headSenses', conditionsPendingReview: [] as string[] },
  { id: 'respiratoryAllergy', conditionsPendingReview: [] as string[] },
] as const;

export type ConsultationTopicId = (typeof consultationTopics)[number]['id'];
