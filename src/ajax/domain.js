/* eslint-disable */
const env = process.env.ENV_VAR || 'local'
/* eslint-disable */
console.log(env)
const apiRoot = {}
switch (env) {
  case 'local':
  case 'development': {
    apiRoot.BASE_URL = '/api/private/v1/'
    break
  }
  case 'test': {
    apiRoot.BASE_URL = '/api/private/v1/'
    break
  }
  case 'production': {
    apiRoot.BASE_URL = '//demo.com'
    break
  }
  default: {
    break
  }
}

export default apiRoot
