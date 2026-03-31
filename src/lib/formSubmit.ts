type SubmissionPayload = Record<string, string>;

function encodeFormData(payload: SubmissionPayload) {
  return new URLSearchParams(payload).toString();
}

export async function submitWebsiteForm(formName: string, payload: SubmissionPayload) {
  const response = await fetch('/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: encodeFormData({
      'form-name': formName,
      ...payload,
    }),
  });

  if (!response.ok) {
    throw new Error('submission-failed');
  }
}
