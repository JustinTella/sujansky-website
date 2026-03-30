const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

type SubmissionPayload = Record<string, string>;

export async function submitWebsiteForm(payload: SubmissionPayload) {
  if (!WEB3FORMS_ACCESS_KEY) {
    throw new Error('missing-access-key');
  }

  const response = await fetch(WEB3FORMS_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,
      botcheck: false,
      ...payload,
    }),
  });

  const result = await response.json();

  if (!response.ok || !result.success) {
    throw new Error(result.message || 'submission-failed');
  }

  return result;
}
