import path from 'path';
import csvParser from './helpers/csvParser.js'

const filePath = path.join(__dirname, '../csv/node_mentoring_t1_2_input_example.csv');

csvParser(filePath, "hello.txt");

