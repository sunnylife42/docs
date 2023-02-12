import type { AppProps } from 'next/app';
import type Viewer from 'viewerjs';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import PlausibleProvider from 'next-plausible';
import 'viewerjs/dist/viewer.css';
import '../styles/global.css';

let viewer: Viewer;

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
    <PlausibleProvider
      selfHosted
      domain="sunnylife42.com"
      customDomain="https://analytics.cyc.app"
    >
      <Component {...pageProps} />
    </PlausibleProvider>
  );
}

export default App;
