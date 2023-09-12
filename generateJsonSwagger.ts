import { promises as fsPromises } from 'fs';
import { join } from 'path';
import { rootApi } from './src/index';
import { generateOpenApi } from '@ts-rest/open-api';
const YAML = require('json-to-pretty-yaml');

const openApiDocument = generateOpenApi(rootApi, {
  info: {
    title: 'Posts API',
    version: '1.0.0',
  },
});

async function asyncWriteFile(filename: string, data: any) {
  try {
    await fsPromises.writeFile(join(__dirname, filename), data, {
      flag: 'w',
    });

    const contents = await fsPromises.readFile(
      join(__dirname, filename),
      'utf-8',
    );

    return contents;
  } catch (err) {
    console.log(err);
    return 'Something went wrong';
  }
}

openApiDocument.security = [
  {
    "bearerAuth": []
  }
]

openApiDocument.components = {
  securitySchemes: {
    bearerAuth: {
      type: "http",
      scheme: "bearer",
      bearerFormat: "JWT"
    }
  }
}

for (const path in openApiDocument.paths) {
  for (const obj in openApiDocument.paths[path]){
    const pathApi = openApiDocument.paths[path][obj]
    pathApi.security = [
      {
        "bearerAuth": []
      }
    ]
  }
}

const data = YAML.stringify(openApiDocument);
asyncWriteFile('./swagger.yaml', data);
