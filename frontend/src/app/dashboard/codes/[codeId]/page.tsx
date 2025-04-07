type CodePageProps = {
  params: {
    codeId: string;
  };
};

const CodePage = ({ params }: CodePageProps) => {
  return <h2>CPT-code {params.codeId}</h2>;
};

export default CodePage;
