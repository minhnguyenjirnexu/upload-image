# upload-image
Sample Upload Image with Multer and Express

## Initial

run `npm install` to install all dependencies first.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

## Available API Routes:

### POST `/uploadmultiple`
#### Params: FormData: `myFiles: File[]`

For upload Multiple Files in onces.


### POST `/uploadfile`
#### Params: FormData: `myFile: File`

For upload single file.
