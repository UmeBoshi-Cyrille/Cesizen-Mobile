export const baseEnv = {
  production: false,
  apiUrl: 'https://localhost:5001/api',
  apiUrlshorten: 'https://localhost:5001',
  query: 'query',
  command: 'command',
  articles: 'articles',
  exercises: 'breath-exercises',
  categories: 'categories',
  authentication: 'authentication',
  registration: 'registration',
  users: 'users',
}

export const environment = {
  production: false,
  deleteCookieUrl: `${baseEnv.apiUrl}/${baseEnv.authentication}/delete-cookie`,
  invalidateTokensUrl: `${baseEnv.apiUrl}/${baseEnv.authentication}/invalidate-tokens`,
  forgetPasswordUrl: `${baseEnv.apiUrl}/${baseEnv.authentication}/forgot-password`,
  forgetPasswordresponseUrl: `${baseEnv.apiUrl}/${baseEnv.authentication}/forgot-password-response`,
  resetPasswordUrl: `${baseEnv.apiUrl}/${baseEnv.authentication}/reset-password`,
  resetForgottenPasswordUrl: `${baseEnv.apiUrl}/${baseEnv.authentication}/reset-forgotten-password`,
  loginUrl: `${baseEnv.apiUrl}/${baseEnv.authentication}/authenticate`,
  logoutUrl: `${baseEnv.apiUrl}/${baseEnv.authentication}/logout`,
  refreshAccessTokenUrl: `${baseEnv.apiUrl}/${baseEnv.authentication}/refresh-access-token`,
  verifyEmailUrl: `${baseEnv.apiUrl}/${baseEnv.authentication}/verify-email`,
  resendEmailVerificationUrl: `${baseEnv.apiUrl}/${baseEnv.authentication}/resend-verify-email`,

  registrationUrl: `${baseEnv.apiUrl}/${baseEnv.registration}/register`,

  articleSearchUrl: `${baseEnv.apiUrl}/${baseEnv.articles}/${baseEnv.query}/search`,
  articleIndexUrl: `${baseEnv.apiUrl}/${baseEnv.articles}/${baseEnv.query}/index`,
  articleGetLastUrl: `${baseEnv.apiUrl}/${baseEnv.articles}/${baseEnv.query}/index-last`,
  articleGetByCategoryUrl: `${baseEnv.apiUrl}/${baseEnv.articles}/${baseEnv.query}/index-by-category`,
  articleQueryUrl: `${baseEnv.apiUrl}/${baseEnv.articles}/${baseEnv.query}`,
  imageDisplayUrl: `${baseEnv.apiUrlshorten}`,

  categoryIndexUrl: `${baseEnv.apiUrl}/${baseEnv.categories}/${baseEnv.query}/index`,
  categorysQueryUrl: `${baseEnv.apiUrl}/${baseEnv.categories}/${baseEnv.query}`,
 
  exerciseIndexUrl: `${baseEnv.apiUrl}/${baseEnv.exercises}/${baseEnv.query}/index`,
  exerciseCreateUrl: `${baseEnv.apiUrl}/${baseEnv.exercises}/${baseEnv.command}/create`,
  exercisesQueryUrl: `${baseEnv.apiUrl}/${baseEnv.exercises}/${baseEnv.query}`,
  exerciseCommandUrl: `${baseEnv.apiUrl}/${baseEnv.exercises}/${baseEnv.command}`,

  userGetProfileUrl: `${baseEnv.apiUrl}/${baseEnv.users}/${baseEnv.query}/profile`,
  userCommandUrl: `${baseEnv.apiUrl}/${baseEnv.users}/${baseEnv.command}`,
}
