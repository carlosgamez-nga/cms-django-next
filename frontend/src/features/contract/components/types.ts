export type Contract = {
  title: string;
  description: string;
  payer_name: string;
  state: string;
  file: FileList;
  id?: string;
  effective_date?: string;
  uploaded_at?: string;
};
