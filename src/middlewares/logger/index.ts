import * as rfs from 'rotating-file-stream';
import path from 'path';

const accessLogStream: any = rfs.createStream('main.log', {
    interval: '3d',
    path: path.resolve(process.cwd(), 'log'),
});

export default accessLogStream;
