const contentfulManagement = require('contentful-management');
 
export const spaceId = '3bi9p19bi12r';
const client = contentfulManagement.createClient({
  space: '3bi9p19bi12r',
  environment: 'master', // defaults to 'master' if not set
  accessToken: 'CFPAT-04ljIFybqf3ehAkp0VHgGZ6UVHsPpQuJ6EqN6SvRhPw'
})

export default client;