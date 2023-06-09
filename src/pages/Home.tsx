import { Helmet } from 'react-helmet-async';

const BouncingArrow = () => {
  return (
    <div className='absolute h-screen contents'>
      <a
        href='#projects'
        className='absolute bottom-10 left-1/2 transform -translate-x-1/2'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-14 w-14 z-40 animate-bounce transition duration-300 ease-in-out hover:text-accent'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M17 13l-5 5m0 0l-5-5m5 5V6'
          />
        </svg>
      </a>
    </div>
  );
};

const index = () => {
  return (
    <main className='grid content-center pt-0 justify-center text-center'>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Francisco Araujo</title>
      </Helmet>
      <h1 className='text-5xl font-bold text-[#ebecf0]' data-aos='fade-up'>
        Hi! I am <br />
        <span className='bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-emerald-500'>
          Francisco Araujo
        </span>
      </h1>
      <p className='mt-5 max-w-xl' data-aos='fade-up' data-aos-delay='300'>
        I am passionate about programming and always seeking to improve my
        skills and knowledge to provide the best possible solution.
      </p>
      <div
        className='flex gap-7 justify-center mt-7 flex-wrap'
        data-aos='zoom-in'
        data-aos-easing='ease'
        data-aos-delay='500'
      >
        <a
          className='flex items-center gap-2 text-gray-400 hover:text-teal-300 transition-all'
          href='mailto:contacto@fjaraujo.com'
          target='_blank'
        >
          <svg
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='w-5 h-5'
          >
            <title>Mail</title>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'
            />
          </svg>
          <span className='font-semibold'>contacto@fjaraujo.com</span>
        </a>
        <a
          className='flex items-center gap-2 text-gray-400 hover:text-teal-300 transition-all'
          href='https://www.linkedin.com/in/fjarauj0/'
          target='_blank'
        >
          <svg
            role='img'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='w-5 h-5'
          >
            <title>LinkedIn</title>
            <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
          </svg>
          <span className='font-semibold'>fjarauj0</span>
        </a>
        <a
          className='flex items-center gap-2 text-gray-400 hover:text-teal-300 transition-all'
          href='https://github.com/fjarauj0'
          target='_blank'
        >
          <svg
            role='img'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='w-5 h-5'
          >
            <title>GitHub</title>
            <path d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12' />
          </svg>
          <span className='font-semibold'>fjarauj0</span>
        </a>
      </div>
      {/* <BouncingArrow /> */}
    </main>
  );
};

export default index;
