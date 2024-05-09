import type { AppProps } from 'next/app';
import type Viewer from 'viewerjs';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Script from 'next/script';
import { GoogleTagManager } from '@next/third-parties/google';
import 'viewerjs/dist/viewer.css';
import '../styles/global.css';

let viewer: Viewer;
const isProduction = process.env.NODE_ENV === 'production';

const initViewer = () => {
  const el = document.getElementById('main');
  if (el) {
    import('viewerjs').then((mod) => {
      viewer = new mod.default(el, {
        button: false,
        loop: false,
        title: false,
        toolbar: false,
        transition: false,
      });
    });
  }
};

const updateViewer = () => {
  if (viewer) {
    viewer.update();
  } else {
    initViewer();
  }
};

if (typeof document !== 'undefined') {
  initViewer();
}

function App({ Component, pageProps }: AppProps) {
  const { events } = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      updateViewer();
    };

    events.on('routeChangeComplete', handleRouteChange);

    return () => {
      events.off('routeChangeComplete', handleRouteChange);
    };
  }, [events]);

  return (
    <>
      <Component {...pageProps} />
      {isProduction && (
        <>
          <GoogleTagManager gtmId="G-BT21DSH0MG" />
          <Script id="ms-clarity">
            {`(function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "m9402dwuco");`}
          </Script>
        </>
      )}
    </>
  );
}

export default App;
