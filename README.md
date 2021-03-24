# useSaveFilesAsZip

This is a basic library to pass an array of Files and generate a zip file and download.

## Commands

Install library `npm install use-files-as-zip`

## How to use

```typescript
// The initialState is optional but if we need to add it just add a File array
const { setFilesAsZip, saveAsZip } = useSaveFilesAsZip();

// Here we can add all the files that we need to add to generate the ZIP file.
setFilesAsZip(files);
// Here we execute the instruccion to download the ZIP file
saveAsZip();
```

## Extras

```typescript
const { files, urls } = useSaveFilesAsZip();

files; // All the files that you add to generate the ZIP file
urls; // It is an array that contains all the urls from the files and with this you can download indivitually

// Example to download any file
<a href={urls[0]} download>
  Download
</a>;
```

### If you want to contribute

Install dependencies `npm install`

Run project `npm start`
