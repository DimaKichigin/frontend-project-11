import Post from '@m_odels/P_ost'
// import json from './a_ssets/json.json'
// import xml from './a_ssets/data.xml'
import csv from './a_ssets/data.csv'
import WebpackLogo from '@/a_ssets/webpack-logo'
import './styles/styles.css'


const post = new Post('Webpack Post', WebpackLogo)

console.log('Post to String: ', post)
// console.log('JSON: ', json)
// console.log('XML: ', xml)
// console.log('CSV:', csv)