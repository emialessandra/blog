module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'bd384fffc9076965e3b38289b949f7e1'),
  },
});
