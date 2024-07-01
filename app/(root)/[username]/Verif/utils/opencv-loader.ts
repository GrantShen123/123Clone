let opencv: any = null;

export const loadOpenCV = (): Promise<any> => {
  return new Promise((resolve) => {
    if (opencv) {
      resolve(opencv);
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://docs.opencv.org/4.5.2/opencv.js';
    script.async = true;
    script.type = 'text/javascript';
    script.onload = () => {
      if (window.cv) {
        opencv = window.cv;
        resolve(opencv);
      }
    };
    document.body.appendChild(script);
  });
};