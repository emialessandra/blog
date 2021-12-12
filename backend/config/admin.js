module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '2d8536acf334c3d82da0cf760e48ee4f'),
  },
});
