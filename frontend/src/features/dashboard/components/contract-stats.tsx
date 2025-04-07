import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { PiFilePdf } from 'react-icons/pi';
import ChartCard from './chart-card';

const ContractStats = () => {
  // contracts mock data
  const data = [
    {
      name: 'Contract Name',
      date: '2022-09-27',
      time: '03:05:15 PM',
    },
    {
      name: 'Contract Name',
      date: '2022-09-27',
      time: '03:05:15 PM',
    },
    {
      name: 'Contract Name',
      date: '2022-09-27',
      time: '03:05:15 PM',
    },
  ];

  return (
    <>
      <div className='grid md:grid-cols-3 gap-4'>
        {data.map((contract, i) => (
          <Card key={i}>
            <CardHeader className='pb-2 '>
              <PiFilePdf size={28} />
              <CardTitle className='text-base '>{contract.name}</CardTitle>
            </CardHeader>
            {/* <CardContent>Contract Info</CardContent> */}
            <CardFooter className='text-xs text-secondary-foreground flex justify-between gap-4'>
              <div>{contract.date}</div>
              <div>{contract.time}</div>
            </CardFooter>
          </Card>
        ))}
      </div>
      <ChartCard />
    </>
  );
};

export default ContractStats;
