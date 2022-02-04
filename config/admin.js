module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'eefbd6c39a8544a988c486db53ef55bf'),
  },
});
