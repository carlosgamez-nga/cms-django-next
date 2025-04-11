type ValuesProps = {
  title: string;
  description: string;
  payer_name: string;
  state: string;
  file: File;
};

export const postContract = async (values: ValuesProps) => {
  const formData = new FormData();

  // Append each property to formData
  Object.keys(values).forEach((key) => {
    if (key === 'file') {
      formData.append(key, values.file);
    } else {
      formData.append(key, key);
    }
  });

  console.log(formData);

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/contracts/`,
    {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Failed to upload contract: ${response.statusText}`);
  }

  return await response.json();
};
