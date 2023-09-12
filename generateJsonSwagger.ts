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

// ✅ write to file ASYNCHRONOUSLY
async function asyncWriteFile(filename: string, data: any) {
  /**
   * flags:
   *  - w = Open file for reading and writing. File is created if not exists
   *  - a+ = Open file for reading and appending. The file is created if not exists
   */
  try {
    await fsPromises.writeFile(join(__dirname, filename), data, {
      flag: 'w',
    });

    const contents = await fsPromises.readFile(
      join(__dirname, filename),
      'utf-8',
    );
    console.log(contents); // 👉️ "One Two Three Four"

    return contents;
  } catch (err) {
    console.log(err);
    return 'Something went wrong';
  }
}

const data = YAML.stringify(openApiDocument);
asyncWriteFile('./swagger.yaml', data);
