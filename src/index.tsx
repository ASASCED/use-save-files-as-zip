import { useState } from 'react';

// Libraries
import shortid from 'shortid';
import JSZip from 'jszip';
import JSZipUtils from 'jszip-utils';
import saveAs from 'save-as';

export const useFilesAsZip = (initialState: File[] = []) => {
  const [files, setFiles] = useState<File[]>(initialState);
  const [urls, setUrls] = useState<string[]>([] as string[]);

  const setFilesAsZip = (files: File[]) => {
    setFiles(files);

    const urls: string[] = files.map(file => URL.createObjectURL(file));
    setUrls(urls);
  };

  const saveAsZip = (zipName: string = shortid.generate()) => {
    let count = 0;
    const zip = new JSZip();
    const zipFilename = `${zipName}.zip`;

    urls.forEach(async function(url, idx) {
      try {
        const file = await JSZipUtils.getBinaryContent(url);
        zip.file(files[idx].name, file, { binary: true });

        count++;

        if (count === urls.length) {
          zip.generateAsync({ type: 'blob' }).then(function(content) {
            saveAs(content, zipFilename);
          });
        }
      } catch (err) {
        console.log(err);
      }
    });
  };

  return {
    files,
    urls,
    setFilesAsZip,
    saveAsZip,
  };
};
