import { NextPage } from 'next';
import Head from 'next/head';

const Default: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Memoria2 Template</title>
        <meta content='Memoria2 Template' name='description' />
        <link href='/favicon.ico' rel='icon' />
      </Head>

      <main className='grid grid-cols-3 mx-auto'>
        <div className='fixed left-0 w-4/12 h-screen bg-secondary' />
        <div className='col-span-2 col-start-2 bg-primary'>
          {/* article content */}
          <div className='grid grid-cols-2 mx-auto w-10/12 bg-primary-light'>
            <div>Article 1</div>
            <div>Article 2</div>
            <div>Article 3</div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Default;
